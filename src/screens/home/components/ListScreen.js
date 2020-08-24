import React, { Component } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import DisplayList from '../../../components/DisplayList';
import globalStyles from '../../../modules/globalStyles';

export class ListScreen extends Component {
  constructor(props) {
    super(props)
    this.category = this.props.route.params.category
    this.department = this.props.route.params.department
    this.products = []
  }
  componentDidMount() {
    this.props.getProductsByDepartmentAndCategory(this.department, this.category)
  }
  componentDidUpdate() {
    if (!!this.department && !!this.category) {
      this.products = this.props.productsByDepartmentAndCategory(this.department, this.category)
    } else if (!!this.department) {
      this.products = this.props.productsByDepartment(this.department)
    }
  }
  render() {
    return (
      <View style={{ backgroundColor: 'black', minHeight: '100%', flex: 1, justifyContent: "center" }}>
        {this.props.loading
          ? <ActivityIndicator size="large" />
          : this.products && this.products.length > 0
            ? <DisplayList dataArray={this.products} />
            : <Text style={{ ...globalStyles('fontWhite'), padding: 20 }}>No Products</Text>
        }
      </View>
    )
  }
}


