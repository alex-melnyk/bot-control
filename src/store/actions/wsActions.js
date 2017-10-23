import * as CommunicationActions from "./communicationActions";

export const TYPE_DEVICE_ROBOT = 'ROBOT';
export const ACTION_WS_SET_NAME = 'SET_NAME';
export const ACTION_WS_SEND_COMMAND = 'SEND_COMMAND';

/**
 * Send initialize message to server.
 */
export function initializeAction() {
    return CommunicationActions.sendMessageAction({
        name: ACTION_WS_SET_NAME,
        data: 'MOBILE'
    });
}

/**
 * Send stop action.
 */
export function sendCommandStopAction() {
    return CommunicationActions.sendMessageAction({
        name: ACTION_WS_SEND_COMMAND,
        to: TYPE_DEVICE_ROBOT,
        data: 0
    });
}

/**
 * Send move forward action.
 */
export function sendCommandMoveForwardAction() {
    return CommunicationActions.sendMessageAction({
        name: ACTION_WS_SEND_COMMAND,
        to: TYPE_DEVICE_ROBOT,
        data: 1
    });
}

/**
 * Send move left action.
 */
export function sendCommandMoveLeftAction() {
    return CommunicationActions.sendMessageAction({
        name: ACTION_WS_SEND_COMMAND,
        to: TYPE_DEVICE_ROBOT,
        data: 3
    });
}

/**
 * Send move right action.
 */
export function sendCommandMoveRightAction() {
    return CommunicationActions.sendMessageAction({
        name: ACTION_WS_SEND_COMMAND,
        to: TYPE_DEVICE_ROBOT,
        data: 2
    });
}

/**
 * Send move right action.
 */
export function sendCommandMoveBackAction() {
    return CommunicationActions.sendMessageAction({
        name: ACTION_WS_SEND_COMMAND,
        to: TYPE_DEVICE_ROBOT,
        data: 4
    });
}