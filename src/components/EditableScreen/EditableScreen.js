import Constants from "expo-constants";
import React from 'react';
import { StyleSheet, Text, TouchableHighlight, View } from "react-native";
import globalStyles from '../../modules/globalStyles';
import { goBack } from '../../modules/Navigation/StackNavigation';
import ButtonClose from '../Buttons/ButtonClose';

export default EditableScreen = ({
  isEditing = false,
  onDeleteButtonPress,
  onEditPress,
  onCancelPress,
  children,
  buttons = []
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <ButtonClose
          size={30}
          style={styles.closeButton}
          onPress={() => { goBack() }}
        />
        {!!isEditing
          ? <TouchableHighlight
            style={styles.headerButton}
            onPress={onCancelPress}
          >
            <Text style={styles.headerButtonText}>Cancel</Text>
          </TouchableHighlight>
          : <TouchableHighlight
            style={styles.headerButton}
            onPress={onEditPress}
          >
            <Text style={styles.headerButtonText}>Edit</Text>
          </TouchableHighlight>
        }
      </View>
      {children}
      {!!isEditing &&
        <View style={styles.footer}>
          {!!onDeleteButtonPress &&
            <TouchableHighlight
              style={styles.footerButton}
              onPress={onDeleteButtonPress}
            >
              <Text style={styles.footerButtonText}>Delete</Text>
            </TouchableHighlight>
          }
          {!!buttons && !!buttons.length > 0 &&
            !!buttons.map(button => button)
          }
        </View>
      }
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: 'black',
    height: '100%',
    width: '100%',
  },
  header: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingVertical: 7,
  },
  closeButton: {
    ...globalStyles('fontWhite'),
  },
  headerButton: {
    marginLeft: 'auto',
    padding: 5
  },
  headerButtonText: {
    ...globalStyles('fontWhite'),
  },
  footer: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    width: '100%',
    backgroundColor: 'black'
  },
  footerButton: {
    padding: 15,
    borderColor: 'white',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  footerButtonText: {
    ...globalStyles('fontWhite'),
  },
})