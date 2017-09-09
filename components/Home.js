import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  StatusBar
} from 'react-native';

import {
  greenColor,
  mainFont
} from '../assets/styles.js';

import Logo from '../assets/logo.js';

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar hidden={true} />
        <View style={styles.logoContainer}>
          <Logo />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.text}>
            In the need of a fresh, tasty local beer?{"\n"}{"\n"}
            Don’t wait to be thirsty as hell and give Neighbrewhood a shot to find the best location near you!
          </Text>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Map')}
            style={styles.button}
          >
            <Text style={styles.buttonText}>Go Neighbrewhood!</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.aboutContainer} onPress={() => this.props.navigation.navigate('About')}>About</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    backgroundColor: greenColor,
    padding: 15,
  },
  textContainer: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  text: {
    fontFamily: mainFont,
    color: '#fff',
    fontSize: 18,
    padding: 0,
  },
  button: {
    marginTop: 30,
    backgroundColor: '#fff',
    borderRadius: 3,
    padding: 14,
    width: 300
  },
  buttonText: {
    textAlign: 'center',
    fontFamily: mainFont,
    fontWeight: '600',
    color: greenColor,
    fontSize: 18,
  },
  logoContainer: {
    position: 'absolute',
    top: 10
  },
  aboutContainer: {
    position: 'absolute',
    bottom: 10,
    color: '#515151',
  }
});

export default HomeScreen;
