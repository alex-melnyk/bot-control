import React from 'react';
import {View, StatusBar} from 'react-native';
import {commonStyles} from "../Styles"

export default (props) => {
    return (
        <View style={[commonStyles.statusBar]}>
            <StatusBar
                translucent={true}
                barStyle="light-content"
            />
        </View>
    );
};