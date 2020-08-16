import React from 'react';
import { ImageBackground, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { navigate } from '../../../../modules/Navigation/StackNavigation';


export default ManNewIn = ({
  navigation,
  imgUri
}) => {
  return (
    <ImageBackground source={{ uri: imgUri }} style={styles.backgroundImage} resizeMode="cover" >
      <Text style={styles.title}>
        NEW IN
      </Text>
      <Text style={styles.desc}>
        Explore this week's latest men pieces of the season curated for you.
      </Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigate('ManNewInScreen')}
      >
        <Text style={styles.btnText}>VIEW</Text>
      </TouchableOpacity>
    </ImageBackground>
  )
}
const styles = StyleSheet.create({
  title: {
    fontSize: 60,
    fontWeight: 'bold'
  },
  desc: {
    fontSize: 15,
    maxWidth: '70%'
  },
  button: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: 'black',
    paddingHorizontal: 24,
    paddingVertical: 6,
    marginVertical: 10
  },
  btnText: {
    fontWeight: 'bold'
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    alignItems: 'center',
    height: '100%',
    width: '100%'
  }
})