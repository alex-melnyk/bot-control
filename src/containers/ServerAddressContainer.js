import {connect} from 'react-redux';
import {NavigationActions} from 'react-navigation';
import ServerAddressScreen from '../components/ServerAddressScreen';
import * as AppSettingsActions from "../store/actions/appSettingsActions";

export default connect((state) => ({
    ...state.app,
    ...state.appSettings,
}), (dispatch, props) => ({
    onSave: (serverAddress) => {
        dispatch(AppSettingsActions.updateServerAddress(serverAddress));
        props.navigation.dispatch(NavigationActions.back());
    }
}))(ServerAddressScreen);