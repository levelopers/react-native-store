import React, { Component } from 'react';
import { StyleSheet, Text } from "react-native";
import DisplayList from "../../components/DisplayList";
import EditableScreen from "../../components/EditableScreen/EditableScreen";
import { _products } from "../../components/_fakeData";
import globalStyles from '../../modules/globalStyles';


export default class BookMarkScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedMap: new Map(),
      isEditing: false
    };
  }

  handleEditPress = () => {
    this.setState({
      isEditing: true
    })
  }

  handleCancelPress = () => {
    this.setState({
      isEditing: false
    })
  }

  handleDeletePress = () => {
    let deleteIdArray = []
    for (let [key, value] of this.state.selectedMap) {
      if (value === true) {
        deleteIdArray.push(key)
      }
    }
    console.log(deleteIdArray);
  }

  onPressItem = (id) => {
    this.setState(state => {
      const selectedMap = new Map(state.selectedMap)
      selectedMap.set(id, !selectedMap.get(id))
      return { ...state, selectedMap }
    })
  }

  renderListItem = ({ item }) => {
    const { imagePath, _id } = item
    return (
      <ProductCard
        onPressCard={() => this.onPressItem(_id)}
        imgUri={imagePath}
        title={''}
        price={''}
        enableSelect={this.state.isEditing}
        isSelected={this.state.selectedMap.get(_id)}
        containerStyle={{ borderRadius: 0 }}
      />
    )
  }
  render() {
    return (
      <EditableScreen
        isEditing={this.state.isEditing}
        onDeleteButtonPress={this.handleDeletePress}
        onEditPress={this.handleEditPress}
        onCancelPress={this.handleCancelPress}
      >
        <Text style={{ fontSize: 30, paddingVertical: 10, paddingHorizontal: 15, ...globalStyles('fontWhite') }}>
          My List
          </Text>
        <DisplayList
          dataArray={_products} //TODO redux feed in user bookmark products
          containerStyle={{ flex: 1 }}
          numColumns={3}
          extraData={this.state.selectedMap}
          renderListItem={this.renderListItem}
        />
      </EditableScreen >
    )
  }
}

const styles = StyleSheet.create({

});