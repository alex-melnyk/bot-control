import {SERVER_ADDRESS} from "../../commons/Constants";
import * as CommunicationActions from "../actions/communicationActions";
import * as AppActions from "../actions/appActions";

let ws = null;

/**
 * Middleware for communication through WebSocket.
 */
export default (store) => (next) => (action) => {
    const state = store.getState();
    const {dispatch} = store;
    const {app} = state;

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
                (e) => dispatch(CommunicationActions.errorAction(e)),
                (e) => dispatch(CommunicationActions.disconnectedAction(e)),
            );
            break;
        case CommunicationActions.ACTION_COMM_MESSAGE_SEND:
            if (ws && app.connected) {
                ws.send(action.payload.data);
            }
            break;
        case CommunicationActions.ACTION_COMM_ERROR:
            console.log('Error:', action.payload.event);
            break;
        case CommunicationActions.ACTION_COMM_DISCONNECTED:
            if (ws) {
                ws.close();
            }

            ws = null;

            setTimeout(() => dispatch(CommunicationActions.connectAction()), 3000);
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
    const wsaddress = `ws://${SERVER_ADDRESS}`;
    console.log('WebSocket Address:', wsaddress);

    const ws = new WebSocket(wsaddress);
    ws.onopen = onopen;
    ws.onmessage = onmessage;
    ws.onerror = onerror;
    ws.onclose = onclose;
    return ws;
}