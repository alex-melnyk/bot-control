export const ACTION_COMM_CONNECT = 'ACTION_COMM_CONNECT';
export const ACTION_COMM_CONNECTED = 'ACTION_COMM_CONNECTED';
export const ACTION_COMM_ERROR = 'ACTION_COMM_ERROR';
export const ACTION_COMM_DISCONNECT = 'ACTION_COMM_DISCONNECT';
export const ACTION_COMM_MESSAGE_RECEIVE = 'ACTION_COMM_MESSAGE_RECEIVE';
export const ACTION_COMM_MESSAGE_SEND = 'ACTION_COMM_MESSAGE_SEND';

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
 * Notify when WS error.
 */
export function errorAction(event) {
    return {type: ACTION_COMM_ERROR, payload: {event}};
}

/**
 * Notify when WS message receive.
 */
export function messageReceiveAction(message) {
    const data = JSON.parse(message);

    return {
        type: ACTION_COMM_MESSAGE_RECEIVE,
        payload: {data}
    };
}

/**
 * Notify when WS closed.
 */
export function disconnectAction(data) {
    return {type: ACTION_COMM_DISCONNECT, payload: {data}};
}

/**
 * Send WS message to server.
 */
export function sendMessageAction(command) {
    const data = JSON.stringify(command);

    return {
        type: ACTION_COMM_MESSAGE_SEND,
        payload: {data}
    };
}