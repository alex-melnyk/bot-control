import {connect} from 'react-redux';
import {NavigationActions} from "react-navigation";
import SettingsScreen from '../components/SettingsScreen';
import * as AppSettingsActions from "../store/actions/appSettingsActions";

export default connect((state) => ({
    ...state.app,
    ...state.appSettings,
}), (dispatch) => ({
    onServerAddressEdit: () => {
        dispatch(NavigationActions.navigate({
            routeName: 'SettingsServerAddress'
        }));
    },
    onAutoConnectChanged: (value) => {
        dispatch(AppSettingsActions.updateAutoConnectAction(value));
    }
}))(SettingsScreen);