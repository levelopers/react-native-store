import React from 'react'
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native'
import Constants from "expo-constants";
import { goBack, navigate } from '../../modules/Navigation/StackNavigation';
import SlideUpScrollView from './components/SlideUpScrollView';
import globalStyle from '../../modules/globalStyles'
import { _products } from '../../components/_fakeData'
import { FlatList } from 'react-native-gesture-handler';

export default DetailScreen = ({ route }) => {
  // TODO prevent default modal navigator slide down close gesture
  const { title, description, price, imagePath } = route.params.data
  return (
    <SlideUpScrollView
      isOpen={false}
      bgImgUri={imagePath}
      close={() => goBack()}
    >
      <View style={styles.contentHeader}>
        <Text style={globalStyle('fontWhite')}>
          {title}
        </Text>
        <Text style={[globalStyle('fontWhite'), styles.price]}>
          {price}
        </Text>
        <View style={styles.buttons}>
          <TouchableHighlight>
            <Text style={globalStyle('fontWhite')}>Add To Cart</Text>
          </TouchableHighlight>
          {/* TODO share,bookmark,view store */}
        </View>
      </View>
      <Text style={[globalStyle('fontWhite'), styles.desc]}>
        {description}
      </Text>
      <View style={styles.recomend}>
        <Text>Recommend</Text>
        <FlatList
          data={_products}
          renderItem={recommendItem}
          horizontal={true}
          keyExtractor={(item) => item._id}
        />
      </View>
      <View style={styles.footer}>

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
    backgroundColor: 'transparent'
    // marginTop: Constants.statusBarHeight
  },
})