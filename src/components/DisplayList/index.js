import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import ProductCard from '../Card';
import { navigate } from '../../modules/Navigation/StackNavigation';

export default DisplayList = ({ dataArray }) => {
  return (
    <View>
      <FlatList
        data={dataArray}
        numColumns={2}
        renderItem={renderItem}
        keyExtractor={item => item._id}
        columnWrapperStyle={{ flexWrap: 'wrap', justifyContent: 'center' }}
      />
    </View>
  )
}

var renderItem = ({ item }) => {
  const { imagePath, title, price } = item
  return (
    <ProductCard
      onPressCard={() => navigate('DetailScreen', { data: item })}
      imgUri={imagePath}
      title={title}
      price={price}
      onPressBookMark={() => { }}
      containerStyle={{ width: '45%' }}
    // onPressAddToCart={}
    />
  )
}

const styles = StyleSheet.create({
  cardContainer: {
    margin: 5,
    width: '45%'
  },
  cardDesc: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  cardContent: {
    maxWidth: '80%',
  },
  cardContentTitle: {
    fontSize: 12
  },
  cardContentPrice: {
    fontSize: 10,
    marginTop: 'auto'
  },
  cardActions: {

  }
})
