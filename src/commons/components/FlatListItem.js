import React, {Component} from 'react';
import {Text, View} from "react-native";
import {listStyles} from '../Styles';
import Icon from 'react-native-vector-icons/FontAwesome';

class FlatListItem extends Component {
    state = {

    };

    render() {
        const {icon} = this.props;

        return (
            <View style={listStyles.row}>
                {this.props.icon && <Icon name="" />}
                <Text style={listStyles.rowText}>Text</Text>
                <Text style={listStyles.rowSubtext}>Sub-text</Text>
            </View>
        );
    }
}

export default FlatListItem;