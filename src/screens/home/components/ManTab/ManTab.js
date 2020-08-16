import React from 'react';
import { StyleSheet } from 'react-native';
import Scrollpage from '../Scrollpage';
import ManCollection from './ManCollection';
import ManNewIn from './ManNewIn';

const newin_img = 'https://static.zara.net/photos///2020/I/0/2/p/6861/456/983/72/w/560/6861456983_1_1_1.jpg?ts=1595526513573'
const collection_img = 'https://static.zara.net/photos///2020/I/0/2/p/5559/178/800/72/w/560/5559178800_1_1_1.jpg?ts=1595581192240'

export default ManTab = ({ navigation }) => {

  return (
    <Scrollpage pageNum={3} style={styles.container}>
      <ManNewIn
        navigation={navigation}
        imgUri={newin_img}
      ></ManNewIn>
      <ManCollection
        navigation={navigation}
        title="COLLECTION"
        description="Discover this weeks pieces from our latest collection."
        imgUri={collection_img}
      />
    </Scrollpage>

  )
}

const styles = StyleSheet.create({
  container: {
    //  height:'100%'
  },
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10
  },
})