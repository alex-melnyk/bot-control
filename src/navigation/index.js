import React, {Component} from 'react';
import {connect} from 'react-redux';
import {AppState, NetInfo, View} from 'react-native';
import {StackNavigator} from 'react-navigation';
import RootNavigator from './rootNavigation';
import {flowStyles, headerStyles} from "../commons/Styles"
import StatusBar from '../commons/components/StatusBar';
import * as AppActions from "../store/actions/appActions";

/**
 *
 */
const BaseNavigator = StackNavigator({
    Base: {
        screen: RootNavigator,
        navigationOptions: () => ({
            headerStyle: headerStyles.header,
            headerTitleStyle: headerStyles.headerTitle,
        })
    }
}, {
    cardStyle: flowStyles.container,
    headerMode: 'none'
});

/**
 * Common navigator component.
 */
class CommonNavigator extends Component {
    state = {
        appState: AppState.currentState
    };

    render() {
        return (
            <View style={flowStyles.container}>
                <StatusBar />
                <BaseNavigator {...this.props} />
            </View>
        );
    }

    componentDidMount() {
        AppState.addEventListener('change', this.appStateChanged);
        NetInfo.isConnected.addEventListener('connectionChange', this.props.onConnectionChanged);
    }

    componentWillUnmount() {
        AppState.removeEventListener('change', this.appStateChanged);
        NetInfo.isConnected.removeEventListener('connectionChange', this.props.onConnectionChanged);
    }

    /**
     *
     * @param nextAppState
     */
    appStateChanged = (nextAppState) => {
        if (this.state.appState.match(/inactive|background/) && nextAppState === 'active') {
            console.log('App has come to the foreground!')
        }

        this.setState({appState: nextAppState});
    };
}

export default connect(
    (state) => ({
        ...state.app
    }),
    (dispatch) => ({
        onConnectionChanged: (connected) => {
            if (connected) {
                dispatch(AppActions.networkReachableAction());
            } else {
                dispatch(AppActions.networkUnreachableAction());
            }
        }
    }),
)(CommonNavigator);