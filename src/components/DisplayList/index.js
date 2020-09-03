import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { navigate } from '../../modules/Navigation/StackNavigation';
import ProductCard from '../Card';

export default DisplayList = ({
  dataArray,
  renderListItem,
  numColumns,
  containerStyle,
  contentContainerStyle,
  extraData
}) => {
  return (
    <View style={containerStyle}>
      <FlatList
        contentContainerStyle={contentContainerStyle}
        data={dataArray}
        extraData={extraData ? extraData : null}
        numColumns={numColumns ? numColumns : 2}
        renderItem={renderListItem ? renderListItem : renderItem}
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

})
