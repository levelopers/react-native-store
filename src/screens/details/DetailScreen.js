import React from 'react'
import { View, Text, StyleSheet, TouchableHighlight, Dimensions } from 'react-native'
import Constants from "expo-constants";
import { goBack, navigate } from '../../modules/Navigation/StackNavigation';
import SlideUpScrollView from './components/SlideUpScrollView';
import globalStyle from '../../modules/globalStyles'
import { _products } from '../../components/_fakeData'
import { FlatList } from 'react-native-gesture-handler';
import ButtonAddToCart from '../../components/Buttons/ButtonAddToCart';
import ButtonBookMark from '../../components/Buttons/ButtonBookMark';
import ButtonShare from '../../components/Buttons/ButtonShare';
import ButtonViewCart from '../../components/Buttons/ButtonViewCart';

// TODO redux feed in _products
export default DetailScreen = ({ route }) => {
  const { title, description, price, imagePath } = route.params.data
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
            <Text style={styles.recomendSubTitle}>{_products.length} Items</Text>
          </View>
          <FlatList
            data={_products}
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