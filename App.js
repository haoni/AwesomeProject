/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import FirstComponent from './src/compoments/FirstComponent';
import Blink from './src/compoments/Blink'

import DefaultStyle from './src/style/DefaultStyle'

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

//type Props = {};

function App() {
  return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Agora sou um desenvolvedor IOS!</Text>
        <Text style={styles.instructions}>Já posso começar a desenvolver apps! teste</Text>
        <Text style={styles.instructions}>{instructions}</Text>
        <FirstComponent style={styles.welcome} value={'Valor passado por props!!!!'}></FirstComponent>
        <Blink style={DefaultStyle.red} value={"Blink Test!"}></Blink>
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});


export default App;