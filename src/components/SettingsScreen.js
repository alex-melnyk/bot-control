import React, {Component} from 'react';
import {FlatList, View} from 'react-native';
import {commonStyles, listStyles} from '../commons/Styles';
import FlatListItem from "../commons/components/FlatListItem";

const listItems = [
    {},
    {},
    {},
    {},
].map((e, i) => ({...e, key: i})); // MOCKup

/**
 *
 */
class SettingsScreen extends Component {
    static navigationOptions = {
        title: 'Settings',
    };

    render() {
        return (
            <View style={commonStyles.container}>
                <FlatList
                    style={listStyles.container}
                    data={listItems}
                    renderItem={({item}) => (
                        <FlatListItem key={item.id} {...item}/>
                    )}
                />
            </View>
        );
    }
}


export default SettingsScreen;