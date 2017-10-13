import React from 'react';
import {TabNavigator} from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';
import {COLOR_TAB_HIGHLIGHT, COLOR_TAB_INACTIVE, tabsStyles} from "../commons/Styles"
import HomeContainer from '../containers/HomeContainer';
import SettingsContainer from '../containers/SettingsContainer';

/**
 *
 */
export default RootNavigator = TabNavigator({
    Root: {
        screen: HomeContainer,
        navigationOptions: {
            tabBarLabel: 'Home',
            tabBarIcon: ({tintColor}) => (
                <Icon
                    name="home"
                    color={tintColor}
                    size={26}
                />
            )
        }
    },
    Settings: {
        screen: SettingsContainer,
        navigationOptions: {
            tabBarLabel: 'Settings',
            tabBarIcon: ({tintColor}) => (
                <Icon
                    name="cog"
                    color={tintColor}
                    size={26}
                />)
        }
    },
}, {
    initialRouteName: 'Settings',
    tabBarPosition: 'bottom',
    tabBarOptions: {
        upperCaseLabel: false,
        inactiveTintColor: COLOR_TAB_INACTIVE,
        activeTintColor: COLOR_TAB_HIGHLIGHT,
        indicatorStyle: {
            opacity: 0
        },
        showIcon: true,
        style: tabsStyles.tab,
        iconStyle: {
            margin: 0,
            width: 26,
            height: 26
        },
        labelStyle: {
            margin: 0,
            fontSize: 12
        },
    }
});