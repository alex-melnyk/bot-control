import * as AppSettingsActions from "../actions/appSettingsActions";
import * as Constants from "../../commons/Constants";

const initialState = {
    autoConnect: Constants.AUTO_CONNECT,
    serverAddress: Constants.SERVER_ADDRESS,
};

/**
 * Application reducer.
 */
export default (state = initialState, action) => {
    switch (action.type) {
        case AppSettingsActions.ACTION_APP_SETTINGS_UPDATE_AUTO_CONNECT:
        case AppSettingsActions.ACTION_APP_SETTINGS_UPDATE_SERVER_ADDRESS:
            return {
                ...state,
                ...action.payload
            };
        default:
            return state;
    }
};