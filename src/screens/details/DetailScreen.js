import React, { useEffect, Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import ButtonAddToCart from '../../components/Buttons/ButtonAddToCart';
import ButtonBookMark from '../../components/Buttons/ButtonBookMark';
import ButtonShare from '../../components/Buttons/ButtonShare';
import ButtonViewCart from '../../components/Buttons/ButtonViewCart';
import { _products } from '../../components/_fakeData';
import globalStyle from '../../modules/globalStyles';
import { goBack, navigate } from '../../modules/Navigation/StackNavigation';
import SlideUpScrollView from './components/SlideUpScrollView';

export default class DetailScreen extends Component {
  constructor(props) {
    super(props)
    this.product = this.props.route.params.data
    this.products = []
  }
  componentDidMount() {
    this.props.getProductsByDepartmentAndCategory(this.product.department)
  }
  componentDidUpdate() {
    this.products = this.props.productsByDepartment(this.product.department)
  }
  render() {
    const { title, description, price, imagePath } = this.product
    return (
      <SlideUpScrollView
        isOpen={false}
        bgImgUri={imagePath}
        close={() => goBack()}
      >
        <View style={styles.container}>
          <View style={styles.contentHeader}>
            <Text style={styles.title}>
              {title ? title.toUpperCase() : ''}
            </Text>
            <Text style={styles.price}>
              {price} CAD
          </Text>
            <View style={styles.buttons}>
              <ButtonAddToCart />
              <View style={styles.iconButtons}>
                <ButtonShare size={20} style={{ padding: 10 }} />
                <ButtonBookMark size={20} style={{ padding: 10 }} onPress={() => { }} />
                <ButtonViewCart size={20} style={{ padding: 10 }} />
              </View>
            </View>
          </View>
          <Text style={styles.description}>
            {description}
          </Text>
          <View style={styles.recomend}>
            <View style={styles.recommendHeader}>
              <Text style={styles.recomendTitle}>COLLOCATION</Text>
              <Text style={styles.recomendSubTitle}>
                {!!this.products && this.products.length} Items
                </Text>
            </View>
            <FlatList
              data={this.products}
              renderItem={recommendItem}
              horizontal={true}
              keyExtractor={(item) => item._id}
            // TODO add pagination
            />
          </View>
          <View style={styles.footer}>
            {/* TODO add footer */}
          </View>
        </View>
      </SlideUpScrollView>
    )
  }
}

const recommendItem = ({ item }) => {
  const { imagePath, title, price } = item
  return (
    <ProductCard
      onPressCard={() => navigate('DetailScreen', { data: item })}
      imgUri={imagePath}
      title={title}
      price={price}
      onPressBookMark={() => { }}
      keyExtractor={(item) => item._id}
    />
  )
}
const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 18
  },
  title: {
    ...globalStyle('fontWhite'),
    fontSize: 16,
    fontWeight: 'bold'
  },
  price: {
    ...globalStyle('fontWhite'),
    paddingTop: 5,
  },
  buttons: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    paddingVertical: 10
  },
  iconButtons: {
    flexDirection: 'row',
    marginLeft: 'auto'
  },
  description: {
    ...globalStyle('fontWhite'),
    paddingVertical: 30,
    fontSize: 13
  },
  recomend: {
    // width: Dimensions.get('window').width TODO
  },
  recommendHeader: {
    paddingVertical: 10
  },
  recomendTitle: {
    ...globalStyle('fontWhite'),
    fontSize: 16,
    fontWeight: 'bold',
  },
  recomendSubTitle: {
    ...globalStyle('fontWhite'),
    color: 'grey'
  },
})