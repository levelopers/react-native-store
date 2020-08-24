import React, { Component } from 'react';
import { SectionList, StyleSheet, Text, TouchableOpacity, View, ActivityIndicator } from 'react-native';
import Collapsible from 'react-native-collapsible';
import globalStyles from '../../../modules/globalStyles';
import { navigate } from '../../../modules/Navigation/StackNavigation';
import { departmentToCollection, shoesBagsToCollection } from '../../../utils/departmentsToSectionList';


export default class CollectionTabScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeSection: '',
      activeTitle: ''
    }
    this.department = ''
    this.sections = []
  }

  componentDidMount() {
    switch (this.props.route.name) {
      case 'CollectionMenTab':
        this.department = 'Men'
        break;
      case 'CollectionWomenTab':
        this.department = 'Women'
        break;
      case 'CollectionKidsTab':
        this.department = 'Kids'
        break;
      default:
        this.department = ''
    }
    this.props.getDepartments();
  }

  componentDidUpdate() {
    this.sections = [
      { title: 'NEW IN', data: [] },
      departmentToCollection(this.props.departmentByName(this.department)),
      shoesBagsToCollection(this.props.departmentByName(this.department))
    ]
  }

  renderSectionHeader = ({ section }) => {
    if (section.title === 'NEW IN') {
      return (
        <TouchableOpacity onPress={() => navigate('ListScreen', { title: 'New In', department: this.department })}>
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
            navigate('ListScreen', { title: item, category: item, department: this.department })
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
        {this.props.loading
          ? <ActivityIndicator size="large" />
          : <SectionList
            sections={this.sections}
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
  container: {
    backgroundColor: 'black',
    width: '100%',
    height: '100%',
    paddingHorizontal: 30,
    display: 'flex',
    justifyContent: 'center'
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