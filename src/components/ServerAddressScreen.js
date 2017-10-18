import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Button, Text, TextInput, View} from 'react-native';
import {commonStyles} from '../commons/Styles';
import * as AppSettingsActions from "../store/actions/appSettingsActions";

const MI_SERVER_ADDRESS = 'MI_SERVER_ADDRESS';

/**
 *
 */
class ServerAddressScreen extends Component {
    componentDidMount() {
        this.props.navigation.setParams({
            serverAddress: this.props.serverAddress
        });
    }

    render() {
        const {params} = this.props.navigation.state;
        const serverAddress = params ? params.serverAddress : this.props.serverAddress;

        return (
            <View style={commonStyles.container}>
                <Text
                    style={commonStyles.textFieldTip}
                >
                    Enter server address:
                </Text>
                <TextInput
                    style={commonStyles.textField}
                    value={serverAddress}
                    onChangeText={this.props.onUpdateValue}
                />
            </View>
        );
    }
}

ServerAddressScreen.propTypes = {
    onUpdateValue: PropTypes.func.isRequired,
    onSave: PropTypes.func.isRequired,
    dispatch: PropTypes.func
};

ServerAddressScreen.navigationOptions = ({navigation}) => ({
    title: 'Server address',
    headerRight: (
        <Button
            title="Done"
            onPress={() => {
                // this.props.onSave(this.state.value);
                navigation.dispatch(AppSettingsActions.updateServerAddressAction(navigation.state.params.serverAddress));
                navigation.goBack();
            }}
        />
    )
});

export default ServerAddressScreen;