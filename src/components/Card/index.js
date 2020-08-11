import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Card, Paragraph } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';

export default ProductCard = ({
  onPressCard,
  imgUri,
  title,
  price,
  onPressBookMark,
  onPressAddToCart,
  containerStyle
}) => {
  return (
    <Card
      style={[containerStyle, styles.cardContainer]}
      onPress={onPressCard}
    >
      <Card.Cover source={{ uri: imgUri }} />
      <View style={styles.cardDesc}>
        <Card.Content style={styles.cardContent}>
          <Paragraph style={styles.cardContentTitle} numberOfLines={1}>{title ? title.toUpperCase() : ''}</Paragraph>
          <Paragraph style={styles.cardContentPrice}>{price} CAD</Paragraph>
        </Card.Content>
        <Card.Actions style={styles.cardActions}>
          <Button onPress={onPressBookMark}>
            <Icon name="bookmark-o" />
          </Button>
        </Card.Actions>
        {/* add to cart button */}
      </View>
    </Card>
  )
}

const styles = StyleSheet.create({
  cardContainer: {
    margin: 5,
    minWidth: 150,
    maxWidth: 200
  },
  cardDesc: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 5
  },
  cardContent: {
    maxWidth: '80%',
    flexDirection: 'column'
  },
  cardContentTitle: {
    fontSize: 12,
    marginBottom: -5
  },
  cardContentPrice: {
    fontSize: 10,
  },
  cardActions: {

  }
})