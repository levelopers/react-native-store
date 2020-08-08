import React, { Component, PropTypes } from 'react';
import {
  Animated,
  Dimensions,
  PanResponder,
  Platform,
  ScrollView,
  StyleSheet,
  StatusBar,
  Text,
  TouchableWithoutFeedback,
  ImageBackground,
  View
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const { width, height } = Dimensions.get('window');


export default class SlideUpScrollView extends Component {
  static defaultProps = {
    isOpen: false,
    headerHeight: 70,
    teaserHeight: 130,
  };
  constructor(props) {
    super(props);
    this.config = {
      position: {
        min: this.props.headerHeight,
        max: height,
        start: height - this.props.teaserHeight,
        end: this.props.headerHeight,
      },
      //transform img scale
      opacity: {
        start: 0,
        end: 1
      },
    };
    this.state = {
      open: false,
      pulling: false,
      scrollOffset: 0,
    }
    this._animatedPosition = new Animated.Value(this.props.isOpen
      ? this.config.position.end
      : this.config.position.start);
    this._animatedOpacity = new Animated.Value(this.config.opacity.start);
    this._panResponder = PanResponder.create({
      onStartShouldSetPanResponder: this._grantPanResponder,
      onStartShouldSetPanResponderCapture: this._grantPanResponder,
      onMoveShouldSetPanResponder: this._grantPanResponder,
      onMoveShouldSetPanResponderCapture: this._grantPanResponder,
      onPanResponderGrant: this._handlePanResponderGrant,
      onPanResponderMove: this._handlePanResponderMove,
      onPanResponderTerminationRequest: (evt, gestureState) => true,
      onPanResponderRelease: this._handlePanResponderEnd,
      onPanResponderTerminate: this._handlePanResponderEnd,
      onShouldBlockNativeResponder: (evt, gestureState) => true,
    });

  }

  componentDidMount() {
    this._animatedPosition.addListener((value) => {
      this._currentPosition = value.value;
      this._animatedOpacity.setValue(value.value)
    });
    this._animatedPosition.setValue(this._animatedPosition._value);
    this._currentPosition = this._animatedPosition._value;
  }

  render() {
    const { children, header, bgImgUri } = this.props
    const animatedOpacity = this._animatedOpacity.interpolate({
      inputRange: [this.config.position.end, this.config.position.start],
      outputRange: [this.config.opacity.end, this.config.opacity.start],
    })
    return (
      <Animated.View style={[styles.container, this.getContainerStyle()]}>
        <StatusBar barStyle={"light-content"} />
        <ImageBackground source={{ uri: bgImgUri }} style={{ width: '100%', height: '100%' }}>
          <Animated.View style={[styles.backdrop, { opacity: animatedOpacity }, styles.header, this.getHeaderStyle()]}>
            <TouchableWithoutFeedback style={styles.headerIcon} onPress={this.props.close}>
              <Icon name="md-close" size={24} color="white" />
            </TouchableWithoutFeedback>
          </Animated.View>
          <Animated.View
            style={[styles.content, {
              paddingBottom: this.props.headerHeight,
              transform: [{ translateY: this._animatedPosition }, { translateX: 0 }]
            }]}
            {...this._panResponder.panHandlers}
          >
            <ScrollView
              ref={(scrollView) => { this._scrollView = scrollView; }}
              scrollEnabled={this.state.open}
              showsHorizontalScrollIndicator={false}
              showsVerticalScrollIndicator={false}
              bounces={false}
              scrollEventThrottle={16}
              onScroll={this._handleScroll}
            >
              {children}
            </ScrollView>
          </Animated.View>
        </ImageBackground>
      </Animated.View>
    )
  }
  _grantPanResponder = (evt, gestureState) => {
    if (!this.state.open) {
      return true;
    }
    else if (this.pulledDown(gestureState) && this.state.scrollOffset <= 0) {
      return true;
    }
    else if (this.pulledDown(gestureState) && this.pulledFast(gestureState)) {
      return true;
    }
    return false;
  };
  _handlePanResponderGrant = (evt, gestureState) => {
    this.setState({ pulling: true });
    this._animatedPosition.setOffset(this._currentPosition);
    this._animatedPosition.setValue(0);
  };
  _handlePanResponderMove = (evt, gestureState) => {
    if (this.insideAllowedRange()) {
      this._animatedPosition.setValue(gestureState.dy);
    }
  };
  _handlePanResponderEnd = (evt, gestureState) => {
    this._animatedPosition.flattenOffset();
    this.setState({ pulling: false });
    if (this.pulledDown(gestureState) && this.pulledFar(gestureState)) {
      return this.close();
    }
    else if (this.pulledUp(gestureState) && this.pulledFar(gestureState)) {
      return this.open();
    }
    else if (this.tapped(gestureState)) {
      return this.toggle();
    }
    else {
      this.restore();
    }
  };
  _handleScroll = event => {
    const { y } = event.nativeEvent.contentOffset;
    this.setState({ scrollOffset: y });
  };
  tapped = (gestureState) => gestureState.dx === 0 && gestureState.dy === 0;
  pulledUp = (gestureState) => gestureState.dy < 0;
  pulledDown = (gestureState) => gestureState.dy > 0;
  pulledFast = (gestureState) => Math.abs(gestureState.vy) > 3;
  pulledFar = (gestureState) => Math.abs(gestureState.dy) > 50;
  insideAllowedRange = () =>
    this._currentPosition >= this.config.position.min
    && this._currentPosition <= this.config.position.max;
  open = () => {
    this.setState({ open: true }, () => {
      Animated.timing(this._animatedPosition, {
        toValue: this.config.position.end,
        duration: 400,
        useNativeDriver: true
      }).start();
    });
  };
  close = () => {
    this._scrollView.scrollTo({ y: 0 });
    Animated.timing(this._animatedPosition, {
      toValue: this.config.position.start,
      duration: 400,
      useNativeDriver: true
    }).start(() => this.setState({
      open: false,
    }));
  };
  toggle = () => {
    if (!this.state.open) {
      this.open();
    }
    else {
      this.close();
    }
  };
  restore = () => {
    if (this.state.open) {
      this.open();
    }
    else {
      this.close();
    }
  };
  getHeaderStyle = () => ({
    height: Platform.OS === 'ios'
      ? this.props.headerHeight
      : this.props.headerHeight - 40,
  });
  getContainerStyle = () => ({
    zIndex: this.state.pulling || this.state.open ? 1 : -1,
  });
}
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'flex-end',
    backgroundColor: 'transparent',
  },

  backdrop: {
    ...StyleSheet.absoluteFillObject,
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: 'black',
  },

  content: {
    backgroundColor: 'black',
    height: height,
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 20,
    paddingHorizontal: 20,
  },
  headerIcon: {
    marginRight: 10,
  },

});
