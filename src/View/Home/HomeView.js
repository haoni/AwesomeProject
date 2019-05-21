import React from 'react';
import { View, Button, Text } from 'react-native';

const HomeView = ({ navigation }) => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>Home</Text>
    <Button title="About" onPress={() => navigation.navigate('About') }/>
    <Button title="DashBoard" onPress={() => navigation.navigate('DashBoard') }/>
  </View>
);

HomeView.navigationOptions = {
  title: 'Home title',
}

export default HomeView;