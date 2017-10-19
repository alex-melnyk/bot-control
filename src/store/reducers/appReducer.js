import * as AppActions from '../actions/appActions';
import * as CommunicationActions from "../actions/communicationActions";
import * as AppSettingsActions from "../actions/appSettingsActions";

const initialState = {
    network: false,
    waiting: true,
    connected: false
};

/**
 * Application reducer.
 */
export default (state = initialState, action) => {
    switch (action.type) {
        case AppActions.ACTION_APP_NETWORK_REACHABLE:
            return {
                ...state,
                network: true
            };
        case AppActions.ACTION_APP_NETWORK_UNREACHABLE:
            return {
                ...state,
                network: false
            };
        case AppActions.ACTION_APP_WAIT_NETWORK_REACHABLE:
            return {
                ...state,
                waiting: true
            };
        case CommunicationActions.ACTION_COMM_CONNECTED:
            return {
                ...state,
                connected: true,
                waiting: false
            };
        case CommunicationActions.ACTION_COMM_DISCONNECT:
            return {
                ...state,
                connected: false
            };
        case AppSettingsActions.ACTION_APP_SETTINGS_UPDATE_AUTO_CONNECT:
            return {
                ...state,
                waiting: !action.payload.autoConnect ? false : state.waiting
            };
        default:
            return state;
    }
};