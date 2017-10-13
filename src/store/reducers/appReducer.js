import * as AppActions from '../actions/appActions';
import * as CommunicationActions from "../actions/communicationActions";

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
                network: true,
                waiting: false
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
                connected: true
            };
        case CommunicationActions.ACTION_COMM_DISCONNECTED:
            return {
                ...state,
                connected: false
            };
        default:
            return state;
    }
};