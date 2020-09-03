import React from 'react';
import { StyleSheet, View } from 'react-native';
import CheckBox from 'react-native-check-box';
import { Button, Card, Paragraph } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';

export default ProductCard = ({
  onPressCard,
  imgUri,
  title,
  price,
  onPressBookMark,
  onPressAddToCart,
  containerStyle,
  enableSelect,
  isSelected
}) => {
  return (
    <Card
      style={[containerStyle, styles.cardContainer]}
      onPress={onPressCard}
    >
      {!!enableSelect &&
        <CheckBox
          isChecked={isSelected}
          onClick={onPressCard}
          style={styles.checkbox}
        />
      }
      <Card.Cover style={{ marginBottom: -15 }} source={{ uri: imgUri }} />
      <View style={styles.cardDesc}>
        {(!!title || !!price) &&
          <Card.Content style={styles.cardContent}>
            {!!title &&
              <Paragraph style={styles.cardContentTitle} numberOfLines={1}>
                {title.toUpperCase()}
              </Paragraph>
            }
            {!!price &&
              <Paragraph style={styles.cardContentPrice}>
                {price} CAD
            </Paragraph>
            }
          </Card.Content>
        }
        <Card.Actions style={styles.cardActions}>
          {!!onPressBookMark &&
            <Button style={styles.btnBookmark} onPress={onPressBookMark}>
              <Icon name="bookmark-o" />
            </Button>
          }
        </Card.Actions>
        {/* add to cart button */}
      </View>
    </Card>
  )
}

const styles = StyleSheet.create({
  cardContainer: {
    margin: 5,
    minWidth: 100,
    maxWidth: 200
  },
  checkbox: {
    flex: 1,
    position: 'absolute',
    zIndex: 1,
  },
  cardDesc: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cardContent: {
    maxWidth: '80%',
    flexDirection: 'column',
  },
  cardContentTitle: {
    fontSize: 12,
    paddingTop: 15,
    marginBottom: -5
  },
  cardContentPrice: {
    fontSize: 10,
    paddingBottom: 5
  },
  cardActions: {
    
  },
  btnBookmark: {
    paddingTop: 15
  }
})