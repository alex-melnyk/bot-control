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
    state = {
        value: this.props.serverAddress || ''
    };

    componentDidMount() {
        // this.props.navigation.setParams({_state: this.state});
    }

    render() {
        return (
            <View style={commonStyles.container}>
                <Text
                    style={commonStyles.textFieldTip}
                >
                    Enter server address:
                </Text>
                <TextInput
                    style={commonStyles.textField}
                    value={this.state.value}
                    onChangeText={(value) => this.setState({value})}
                />
            </View>
        );
    }
}

ServerAddressScreen.propTypes = {
    onSave: PropTypes.func.isRequired
};

ServerAddressScreen.navigationOptions = ({navigation}) => {
    console.log(navigation);

    return {
        title: 'Server address',
        headerRight: (
            <Button
                title="Done"
                onPress={() => {
                    // this.props.onSave(this.state.value);
                    // navigation.dispatch(AppSettingsActions.updateServerAddress(navigation.state.params._state.value));
                }}
            />
        )
    };
};


export default ServerAddressScreen;