import React, {Component} from 'react';
import PropTypes from "prop-types";
import {FlatList, View} from 'react-native';
import {commonStyles, listStyles} from '../commons/Styles';
import FlatListItem from "../commons/components/FlatListItem";
import * as SettingsMenu from '../commons/menu/settings';

/**
 * Settings list screen.
 */
class SettingsScreen extends Component {
    static navigationOptions = {
        title: 'Settings',
    };

    render() {
        const items = SettingsMenu.items
            .map((item) => ({
                ...item,
                key: `settings_item_${item.id}`
            }))
            .map(this.mapToSettings);

        return (
            <View style={commonStyles.container}>
                <FlatList
                    style={listStyles.container}
                    data={items.map(this.mapToSettings)}
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

    mapToSettings = (item) => {
        switch (item.id) {
            case SettingsMenu.MI_SETTINGS_SERVER_ADDRESS:
                return {
                    ...item,
                    subtext: this.props.serverAddress
                };
            case SettingsMenu.MI_SETTINGS_AUTO_CONNECT:
                return {
                    ...item,
                    switchValue: this.props.autoConnect
                };
            default:
                return item;
        }
    };

    handleSelect = ({data, switchValue}) => {
        switch (data.id) {
            case SettingsMenu.MI_SETTINGS_SERVER_ADDRESS:
                this.props.onServerAddressEdit();
                break;
            case SettingsMenu.MI_SETTINGS_AUTO_CONNECT:
                this.props.onAutoConnectChanged(switchValue);
                break;
        }
    };
}

SettingsScreen.propTypes = {
    onServerAddressEdit: PropTypes.func.isRequired,
    onAutoConnectChanged: PropTypes.func.isRequired
};

export default SettingsScreen;