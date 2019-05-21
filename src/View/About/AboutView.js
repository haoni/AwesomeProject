// src/Page2.js

import React from 'react';
import { View, Text } from 'react-native';

const AboutView = () => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>About</Text>
  </View>
);

AboutView.navigationOptions = {
  //Este é o titulo que irá aparecer na barra de navegação para esta view.
  title: 'About title',
}


export default AboutView;