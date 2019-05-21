import React from 'react';
import {View, Text, Button } from 'react-native'

const ChartDetailView = () => {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Some Chart Detail</Text>
            <Button title="Chart Detail" onPress={() => navigation.navigate('ChartDetail') }/>
        </View>
    );
}

ChartDetailView.navigationOptions = {
    title: 'Chart Detail title',
  }

export default ChartDetailView;