import {StackNavigator} from "react-navigation";
import {flowStyles, headerStyles} from '../commons/Styles';
import SettingsContainer from "../containers/SettingsContainer";
import ServerAddressContainer from "../containers/ServerAddressContainer";

/**
 *
 */
const SettingsNavigator = StackNavigator({
    Settings: {
        screen: SettingsContainer,
        navigationOptions: () => ({
            headerStyle: headerStyles.header,
            headerTitleStyle: headerStyles.headerTitle,
        })
    },
    SettingsServerAddress: {
        screen: ServerAddressContainer,
        navigationOptions: () => ({
            headerStyle: headerStyles.header,
            headerTitleStyle: headerStyles.headerTitle,
        })
    }
}, {
    cardStyle: flowStyles.container
});

export default SettingsNavigator;