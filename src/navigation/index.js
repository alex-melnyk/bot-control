import React, {Component} from 'react';
import {connect} from 'react-redux';
import {AppState, NetInfo, View} from 'react-native';
import {addNavigationHelpers, StackNavigator} from 'react-navigation';
import RootNavigator from './rootNavigation';
import {flowStyles, headerStyles} from "../commons/Styles"
import StatusBar from '../commons/components/StatusBar';
import * as AppActions from "../store/actions/appActions";

/**
 *
 */
export const BaseNavigator = StackNavigator({
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
class AppNavigatorWrapper extends Component {
    state = {
        appState: AppState.currentState
    };

    render() {
        return (
            <View style={flowStyles.container}>
                <StatusBar/>
                <BaseNavigator
                    navigation={addNavigationHelpers({
                        dispatch: this.props.dispatch,
                        state: this.props.nav
                    })}
                />
            </View>
        );
    }

    componentDidMount() {
        AppState.addEventListener('change', this.appStateChanged);
        NetInfo.isConnected.addEventListener('connectionChange', this.connectionChanged);
    }

    componentWillUnmount() {
        AppState.removeEventListener('change', this.appStateChanged);
        NetInfo.isConnected.removeEventListener('connectionChange', this.connectionChanged);
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

    /**
     *
     * @param connected
     */
    connectionChanged = (connected) => {
        if (connected) {
            this.props.dispatch(AppActions.networkReachableAction());
        } else {
            this.props.dispatch(AppActions.networkUnreachableAction());
        }
    };
}

export default connect((state) => ({
    ...state.app,
    nav: state.nav
}))(AppNavigatorWrapper);