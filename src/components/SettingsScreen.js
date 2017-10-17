import React, {Component} from 'react';
import PropTypes from "prop-types";
import {FlatList, View} from 'react-native';
import {commonStyles, listStyles} from '../commons/Styles';
import FlatListItem from "../commons/components/FlatListItem";

const MI_SERVER_ADDRESS = 'MI_SERVER_ADDRESS';

/**
 * Settings list screen.
 */
class SettingsScreen extends Component {
    static navigationOptions = {
        title: 'Settings',
    };

    handleSelect = ({data}) => {
        console.log(data.id);

        switch (data.id) {
            case MI_SERVER_ADDRESS:
                this.props.onServerAddressEdit();
                break;
        }
    };

    render() {
        const listItems = [
            {
                id: MI_SERVER_ADDRESS,
                icon: 'server',
                text: 'Server address',
                subtext: this.props.serverAddress
            }
        ].map((e, i) => ({...e, key: `settings_item_${i}`})); // MOCKup

        return (
            <View style={commonStyles.container}>
                <FlatList
                    style={listStyles.container}
                    data={listItems}
                    renderItem={({item}) => (
                        <FlatListItem
                            {...item}
                            data={item}
                            onSelect={this.handleSelect}
                        />
                    )}
                />
            </View>
        );
    }
}

SettingsScreen.propTypes = {
    onServerAddressEdit: PropTypes.func.isRequired
};

export default SettingsScreen;