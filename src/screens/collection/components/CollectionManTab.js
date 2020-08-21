import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet,
  SectionList,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native'
import Collapsible from 'react-native-collapsible';

import { TouchableHighlight } from 'react-native-gesture-handler'
import Icon from 'react-native-vector-icons/FontAwesome';
import { departments, MenDepartment, shoesAndBags } from '../../../components/_fakeData';
import { departmentToCollection, shoesBagsToCollection } from '../../../utils/departmentsToSectionList';
import { navigate } from '../../../modules/Navigation/StackNavigation'
import globalStyles from '../../../modules/globalStyles';

export default class CollectionManTab extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeSection: ''
    }
    this.sections = [
      { title: 'NEW IN', data: [] },
      departmentToCollection(MenDepartment),
      shoesBagsToCollection(shoesAndBags)
    ]
  }

  renderSectionHeader = ({ section }) => {
    if (section.title === 'NEW IN') {
      return (
        <TouchableOpacity onPress={() => navigate('ListScreen', { title: 'New In' })}>
          <Text style={[styles.header, styles.newInHeader]}>{section.title}</Text>
        </TouchableOpacity>
      )
    }
    return (
      <TouchableOpacity onPress={() => this.handleToggle(section)}>
        <Text style={styles.header}>{section.title}</Text>
      </TouchableOpacity>
    )
  }

  renderItem = ({ item, section }) => {
    if (section.data.length === 0) {
      return <View></View>
    }
    return (
      <Collapsible
        key={item}
        collapsed={section.title !== this.state.activeSection}>
        <Text
          style={styles.item}
          onPress={() => {
            navigate('ListScreen', { title: item, category: item, department: 'Men' })
          }}>
          {item}
        </Text>
      </Collapsible>
    )
  }

  handleToggle = (section) => {
    this.setState({
      activeSection: this.state.activeSection === section.title
        ? ''
        : section.title,
    });

  }

  render() {
    return (
      <View style={styles.container}>
        <SectionList
          sections={this.sections}
          keyExtractor={(item, index) => index}
          renderSectionHeader={this.renderSectionHeader}
          renderItem={this.renderItem}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    width: '100%',
    height: '100%',
    paddingHorizontal: 30,
    display: 'flex',
    justifyContent: 'space-between'
  },
  header: {
    fontSize: 35,
    ...globalStyles('fontWhite'),
    paddingVertical: 8,
    backgroundColor: 'black',
  },
  newInHeader: {
    paddingVertical: 50
  },
  item: {
    fontSize: 20,
    ...globalStyles('fontWhite'),
    paddingVertical: 5,
  },
})