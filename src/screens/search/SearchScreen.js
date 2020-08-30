import Constants from "expo-constants";
import React, { Component } from 'react';
import { KeyboardAvoidingView, StyleSheet, View } from "react-native";
import ButtonClose from "../../components/Buttons/ButtonClose";
import DisplayList from "../../components/DisplayList";
import { goBack } from '../../modules/Navigation/StackNavigation';
import AutoComplete from "./components/AutoCompleteContainer";

export default class SearchScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      searchValue: '',
      showingList: false
    }
  }
  handleSuggest = (v) => {
    this.props.search(v)
    this.setState({
      searchValue: v
    })
  }
  handleInputFocus = () => {
    this.setState({
      showingList: false,
      searchValue: ''
    })
  }
  handleInputBlur = () => {
    this.setState({
      showingList: true
    })
  }

  render() {
    return (
      <KeyboardAvoidingView
        behavior={Platform.OS == "ios" ? "padding" : "height"}
        style={styles.modalView}
      >
        <View style={styles.header}>
          <ButtonClose
            size={30}
            style={styles.closeButton}
            onPress={() => { goBack() }}
          />
          <AutoComplete
            style={styles.auto}
            suggest_value={this.handleSuggest}
            onFocus={this.handleInputFocus}
            onBlur={this.handleInputBlur}
            close={this.state.showingList}
          />
        </View>
        {!!this.state.searchValue && this.state.showingList &&
          <DisplayList
            containerStyle={{ height: '90%' }}
            dataArray={this.props.search_result}
          />
        }
      </KeyboardAvoidingView>
    )
  }
}

const styles = StyleSheet.create({
  modalView: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: 'black',
    height: '100%',
    width: '100%',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start'
  },
  header: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  closeButton: {
    padding: 10,
    marginLeft: 15
  },
  auto: {
    marginTop: 15
  },

});