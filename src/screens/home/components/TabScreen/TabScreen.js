import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import Scrollpage from '../Scrollpage';
import TabCollection from './TabCollection';
import TabNewIn from './TabNewIn';

export default class TabScreen extends Component {
  constructor(props) {
    super(props)
    this.department = ''
  }
  componentDidMount() {
    switch (this.props.route.name) {
      case 'DashBoardManScreen':
        this.department = 'Men'
        break;
      case 'DashBoardWomanScreen':
        this.department = 'Women'
        break;
      case 'DashBoardKidsScreen':
        this.department = 'Kids'
        break;
      default:
        this.department = ''
    }
    this.props.getNewProductsByDepartment(this.department)
  }
  render() {
    return (
      <Scrollpage pageNum={3} style={styles.container}>
        <TabNewIn
          department={this.department}
          imgUri={this.props.products(this.department).length > 1
            ? this.props.products(this.department)[0].imagePath
            : null}
        />
        <TabCollection
          // navigation={navigation}
          title="COLLECTION"
          description="Discover this weeks pieces from our latest collection."
          imgUri={this.props.products(this.department).length > 1
            ? this.props.products(this.department)[1].imagePath
            : null}
        />
      </Scrollpage>

    )
  }
}

const styles = StyleSheet.create({
  container: {
    //  height:'100%'
  },
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10
  },
})