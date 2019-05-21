import React from 'react';
import {View, Text} from 'react-native';

function firstComponent(props){
    return (
        <View>
            <Text style={props.style}>{ props.value }</Text>
        </View>
    );
};

export default firstComponent;