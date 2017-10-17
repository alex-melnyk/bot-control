export const ACTION_APP_SETTINGS_UPDATE_SERVER_ADDRESS = 'ACTION_APP_SETTINGS_UPDATE_SERVER_ADDRESS';

/**
 * Update settings serverAddress value.
 *
 * @param value new server address.
 */
export const updateServerAddress = (serverAddress) => ({
    type: ACTION_APP_SETTINGS_UPDATE_SERVER_ADDRESS,
    payload: {serverAddress}
});