import React from 'react';
import {View, Text, Button } from 'react-native';

const DashBoardView = ({navigation}) => (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>DashBoard</Text>
        <Button title="Chart Detail" onPress={() => navigation.navigate('ChartDetail') }/>
    </View>
);

DashBoardView.navigationOptions  = {
    title: 'DashBoard title'
}

export default DashBoardView;