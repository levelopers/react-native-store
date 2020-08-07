import React from 'react'
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native'
import Constants from "expo-constants";
import { goBack } from '../../modules/Navigation/StackNavigation';
import SlideUpScrollView from './components/SlideUpScrollView';
import globalStyle from '../../modules/globalStyles'

export default DetailScreen = ({ route }) => {
  const { title, description, price, imagePath } = route.params.data
  return (
    <SlideUpScrollView bgImgUri={imagePath} close={() => goBack()}>
      <View style={styles.contentHeader}>
        <Text style={globalStyle('fontWhite')}>
          {title}
        </Text>
        <Text style={styles.price}>
          {price}
        </Text>
        <View style={styles.buttons}>
          <TouchableHighlight>
            <Text>Add To Cart</Text>
          </TouchableHighlight>
          {/* TODO share,bookmark,view store */}
        </View>
      </View>
      <Text style={styles.desc}>
        {description}
      </Text>
      <View style={styles.recomend}>

      </View>
      <View style={styles.footer}>

      </View>
    </SlideUpScrollView>
  )
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'transparent'
    // marginTop: Constants.statusBarHeight
  },
})