import {connect} from 'react-redux';
import {NavigationActions} from "react-navigation";
import SettingsScreen from '../components/SettingsScreen';

export default connect((state) => ({
    ...state.app,
    ...state.appSettings,
}), (dispatch, props) => ({
    onServerAddressEdit: () => {
        props.navigation.dispatch(NavigationActions.navigate({
            routeName: 'SettingsServerAddress'
        }));
    }
}))(SettingsScreen);