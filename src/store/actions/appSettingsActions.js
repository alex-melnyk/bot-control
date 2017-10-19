export const ACTION_APP_SETTINGS_UPDATE_SERVER_ADDRESS = 'ACTION_APP_SETTINGS_UPDATE_SERVER_ADDRESS';
export const ACTION_APP_SETTINGS_UPDATE_AUTO_CONNECT = 'ACTION_APP_SETTINGS_UPDATE_AUTO_CONNECT';

/**
 * Update settings serverAddress value.
 *
 * @param serverAddress new value.
 */
export function updateServerAddressAction(serverAddress) {
    return {
        type: ACTION_APP_SETTINGS_UPDATE_SERVER_ADDRESS,
        payload: {serverAddress}
    };
}

/**
 * Update settings autoConnect value.
 *
 * @param autoConnect new value.
 */
export function updateAutoConnectAction(autoConnect) {
    return {
        type: ACTION_APP_SETTINGS_UPDATE_AUTO_CONNECT,
        payload: {autoConnect}
    };
}