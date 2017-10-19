import * as AppSettingsActions from "../actions/appSettingsActions";

const initialState = {
    serverAddress: 'labrabot.melnyk.io',
    autoConnect: true
};

/**
 * Application reducer.
 */
export default (state = initialState, action) => {
    switch (action.type) {
        case AppSettingsActions.ACTION_APP_SETTINGS_UPDATE_SERVER_ADDRESS:
        case AppSettingsActions.ACTION_APP_SETTINGS_UPDATE_AUTO_CONNECT:
            return {
                ...state,
                ...action.payload
            };
        default:
            return state;
    }
};