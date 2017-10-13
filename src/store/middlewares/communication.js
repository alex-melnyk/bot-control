import {SERVER_ADDRESS} from "../../commons/Constants";
import * as CommunicationActions from "../actions/communicationActions";
import * as AppActions from "../actions/appActions";

let ws = null;

/**
 * Middleware for communication through WebSocket.
 */
export default (store) => (next) => (action) => {
    const {dispatch} = store;
    const state = store.getState();

    switch (action.type) {
        case AppActions.ACTION_APP_NETWORK_REACHABLE:
            dispatch(CommunicationActions.connectAction());
            break;
        case AppActions.ACTION_APP_NETWORK_UNREACHABLE:
            ws = null;
            break;
        case CommunicationActions.ACTION_COMM_CONNECT:
            ws = connectWebSocket(
                (e) => dispatch(CommunicationActions.connectedAction(e)),
                (e) => dispatch(CommunicationActions.messageReceiveAction(e.data)),
                (e) => console.log('ERROR', e),
                (e) => dispatch(CommunicationActions.disconnectedAction(e)),
            );
            break;
    }

    return next(action);
};

/**
 * Create WebSocket connection.
 *
 * @param onopen open handler function.
 * @param onmessage message handler function.
 * @param onerror error handler function.
 * @param onclose close handler function.
 * @returns {WebSocket} new WebSocket connection object.
 */
function connectWebSocket(onopen, onmessage, onerror, onclose) {
    const ws = new WebSocket(`wss://${SERVER_ADDRESS}`);
    ws.onopen = onopen;
    ws.onmessage = onmessage;
    ws.onerror = onerror;
    ws.onclose = onclose;
    return ws;
}