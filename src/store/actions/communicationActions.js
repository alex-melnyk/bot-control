export const ACTION_COMM_CONNECT = 'ACTION_COMM_CONNECT';
export const ACTION_COMM_CONNECTED = 'ACTION_COMM_CONNECTED';
export const ACTION_COMM_DISCONNECTED = 'ACTION_COMM_DISCONNECTED';
export const ACTION_COMM_MESSAGE = 'ACTION_COMM_MESSAGE';

/**
 * Connect to server.
 */
export function connectAction() {
    return {type: ACTION_COMM_CONNECT};
}

/**
 * Notify when WS connected.
 */
export function connectedAction() {
    return {type: ACTION_COMM_CONNECTED};
}

/**
 * Notify when WS message receive.
 */
export function messageReceiveAction(message) {
    const data = JSON.parse(message);

    return {
        type: ACTION_COMM_MESSAGE,
        payload: {data}
    };
}

/**
 * Notify when WS closed.
 */
export function disconnectedAction() {
    return {type: ACTION_COMM_DISCONNECTED};
}