import React, { Component } from 'react';
import { SectionList, StyleSheet, Text, TextInput, TouchableWithoutFeedback, View } from 'react-native';
import globalStyles from '../../../modules/globalStyles';


export default class AutoComplete extends Component {
  constructor(props) {
    super(props);
    this.state = {
      val: '',
    }
    this.sectionList = []
  }
  componentDidUpdate() {
    this.sectionList = this.toSectionListData(this.props.filter_result)
  }
  handleChange = (e) => {
    const input = e
    this.props.filter(input)
    this.setState({
      val: input,
    })
  }
  handleClick = (v) => {
    if (this.props.suggest_value) {
      this.props.suggest_value(v)
    }
    this.setState({
      val: v,
    })
  }
  toSectionListData = (r) => {
    let resultList = []
    if (!r) {
      return resultList
    }
    for (const key of Object.keys(r)) {
      resultList.push({
        title: key,
        data: r[key]
      })
    }
    return resultList
  }
  renderSectionHeader = ({ section }) => {
    return (
      <Text style={styles.header}>{section.title}</Text>
    )
  }
  renderItem = ({ item, section }) => {
    if (section.data.length === 0) {
      return <View></View>
    }
    return (
      <TouchableWithoutFeedback >
        <Text
          style={styles.item}
          onPress={() => { this.handleClick(item) }}>
          {item}
        </Text>
      </TouchableWithoutFeedback >
    )
  }
  render() {
    return (
      <View style={[styles.outbox, this.props.style]}>
        <TextInput
          style={styles.textInput}
          placeholder='Search...'
          placeholderTextColor='white'
          clearButtonMode='while-editing' //TODO custom clear button
          textAlignVertical='top'
          paddingRight={12}
          paddingLeft={12}
          onFocus={this.props.onFocus}
          onBlur={this.props.onBlur}
          onChangeText={this.handleChange}
          value={this.state.val}
        />
        {!this.props.error && !this.props.loading &&
          (!!this.props.close ? !this.props.close : true) &&
          <SectionList
            style={styles.sectionList}
            keyboardShouldPersistTaps='always'
            sections={this.sectionList}
            keyExtractor={(item, index) => index}
            renderSectionHeader={this.renderSectionHeader}
            renderItem={this.renderItem}
          />
        }
      </View>
    )
  }
}

const styles = StyleSheet.create({
  outbox: {
    flex: 1,
    flexDirection: 'column',
    alignSelf: 'stretch',
    maxWidth: '80%',
  },
  sectionList: {
    maxWidth: '100%',
    marginTop: 10,
  },
  item: {
    ...globalStyles('fontWhite'),
    fontSize: 15,
    padding: 10
  },
  header: {
    ...globalStyles('fontWhite'),
    fontSize: 20,
    paddingVertical: 5,
    backgroundColor: 'black'
  },
  textInput: {
    borderBottomColor: 'white',
    borderWidth: 1,
    ...globalStyle('fontWhite'),
  },
})
