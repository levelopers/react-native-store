import React from 'react'
import { View, Text, FlatList, StyleSheet, Image } from 'react-native'
import { Card, Paragraph, Button } from 'react-native-paper';
import { _products } from '../../../../components/_fakeData'
import Icon from 'react-native-vector-icons/FontAwesome';
import { navigate } from '../../../../modules/Navigation/StackNavigation'
export default ManNewInScreen = ({ listData }) => {
  return (
    <View>
      <FlatList
        data={_products}
        numColumns={2}
        renderItem={renderItem}
        keyExtractor={item => item._id}
        columnWrapperStyle={{ flexWrap: 'wrap', justifyContent: 'center' }}
      />
    </View>
  )
}

var renderItem = ({ item }) => {
  return (
    <Card
      style={styles.cardContainer}
      onPress={() => navigate('DetailScreen', { data: item })}
    >
      <Card.Cover source={{ uri: item.imagePath }} />
      <View style={styles.cardDesc}>
        <Card.Content style={styles.cardContent}>
          <Paragraph style={styles.cardContentTitle}>{item.title}</Paragraph>
          <Paragraph style={styles.cardContentPrice}>{item.price}</Paragraph>
        </Card.Content>
        <Card.Actions style={styles.cardActions}>
          <Button>
            <Icon name="bookmark-o" />
          </Button>
        </Card.Actions>
      </View>
    </Card>
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
