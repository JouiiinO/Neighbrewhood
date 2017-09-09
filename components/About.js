import React from 'react';
import {
  Text,
  View,
  Button,
  TouchableOpacity,
  StyleSheet,
  Linking
} from 'react-native';

import { NavigationActions } from 'react-navigation'

import {
  greenColor,
  mainFont
} from '../assets/styles.js';

import Ico_close from '../assets/ico-close.js';

class AboutScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => {this.props.navigation.dispatch(NavigationActions.back())}}
          style={styles.iconClose}
        >
          <View>
            <Ico_close />
          </View>
        </TouchableOpacity>
        <Text style={styles.text}>App created by Julien Jounieau (<Text style={styles.linkText} onPress={()=>{ Linking.openURL('https://www.linkedin.com/in/julienjounieau/')}}>LinkedIn</Text>).</Text>
        <Text style={styles.text}>No commercial purpose, the idea is more to give the possibility for anyone to access something better than a bubbleless flat lager :)</Text>
        <Text style={styles.text}>Data from <Text style={styles.linkText} onPress={()=>{ Linking.openURL('http://www.brewerydb.com/')}}>BreweryDB</Text>.</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  iconClose: {
    position: 'absolute',
    right: 20,
    top: 20,
    zIndex: 5,
    width: 24,
    height: 24,
    borderRadius: 50,
    backgroundColor: greenColor
  },
  container: {
    padding: 20,
    alignItems: 'flex-start',
    justifyContent: 'center',
    flex: 1,
    backgroundColor: '#fff'
  },
  text: {
    fontFamily: mainFont,
    color: '#515151',
    fontSize: 14,
    marginBottom: 10
  },
  linkText: {
    color: '#6B6FEB'
  }
});

module.exports = AboutScreen;
