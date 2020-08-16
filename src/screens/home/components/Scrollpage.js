import Constants from "expo-constants";
import React from 'react';
import { Animated, Dimensions, ScrollView, StyleSheet, View } from 'react-native';
import globalStyles from "../../../modules/globalStyles";

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

export default ScrollPage = ({
  // pageNum, 
  children
}) => {
  const pageNum = React.Children.count(children)
  const scrollY = new Animated.Value(0)
  const position = Animated.divide(scrollY, screenHeight);
  return (
    <View style={styles.container}>
      <ScrollView
        pagingEnabled={true}
        showsVerticalScrollIndicator={false}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: false }
        )}
        scrollEventThrottle={16}
        contentContainerStyle={styles.scrollViewContainer}
        bounces={false}
      >
        {React.Children.map(children, child => {
          return <View style={styles.view}>
            {child}
          </View>
        })}
      </ScrollView>
      <View style={styles.indicatorContainer}>
        {Array.from({ length: pageNum }, (_, i) => {
          let opacity = position.interpolate({
            inputRange: [i - 1, i, i + 1],
            outputRange: [0.3, 1, 0.3],
            extrapolate: 'clamp'
          });
          return (
            <Animated.View
              key={i}
              style={{ opacity, ...styles.pageIndicator }}
            />
          )
        })}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: (globalStyles('windowHeight').height - globalStyles('homeBottomTabHeight').height),
  },
  indicatorContainer: {
    position: 'absolute',
    right: 10,
    top: '40%'
  },
  scrollViewContainer: {
  },
  view: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: (globalStyles('windowHeight').height - globalStyles('homeBottomTabHeight').height),
  },
  pageIndicator: {
    height: 5,
    width: 5,
    backgroundColor: '#595959',
    margin: 5,
    borderRadius: 5
  }
})