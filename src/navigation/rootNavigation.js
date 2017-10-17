import React from 'react';
import {TabNavigator} from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';
import {COLOR_TAB_HIGHLIGHT, COLOR_TAB_INACTIVE, tabsStyles} from "../commons/Styles"
import HomeContainer from '../containers/HomeContainer';
import SettingsNavigator from '../navigation/settingsNavigator';

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
                    size={22}
                />
            )
        }
    },
    Settings: {
        screen: SettingsNavigator,
        navigationOptions: {
            tabBarLabel: 'Settings',
            tabBarIcon: ({tintColor}) => (
                <Icon
                    style={{padding: 0, margin: 0}}
                    name="cog"
                    color={tintColor}
                    size={22}
                />
            )
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
        tabStyle: {
            margin: 0,
            padding: 0
        },
        iconStyle: tabsStyles.tabIcon,
        labelStyle: tabsStyles.tabLabel
    }
});