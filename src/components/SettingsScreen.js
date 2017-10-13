import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {commonStyles} from '../commons/Styles';

/**
 *
 */
class SettingsScreen extends Component {
    static navigationOptions = {
        title: 'Settings',
    };

    render () {
        return (
            <View style={commonStyles.container}>
                <Text>HI!</Text>
            </View>
        );
    }
}



export default SettingsScreen;