import * as CommunicationActions from "../actions/communicationActions";
import * as AppActions from "../actions/appActions";

let ws = null;
let waitingTimerId = null;

/**
 * Middleware for communication through WebSocket.
 */
export default (store) => (next) => (action) => {
    const state = store.getState();
    const {dispatch} = store;
    const {app, appSettings} = state;

    switch (action.type) {
        case AppActions.ACTION_APP_NETWORK_REACHABLE:
            if (app.waiting) {
                if (waitingTimerId) {
                    clearTimeout(waitingTimerId);
                    waitingTimerId = null;
                }
                dispatch(CommunicationActions.connectAction());
            }
            break;
        case AppActions.ACTION_APP_NETWORK_UNREACHABLE:
            ws = null;
            break;
        case CommunicationActions.ACTION_COMM_CONNECT:
            setImmediate(() => {
                ws = connectWebSocket(
                    appSettings.serverAddress,
                    (e) => dispatch(CommunicationActions.connectedAction(e)),
                    (e) => dispatch(CommunicationActions.messageReceiveAction(e.data)),
                    (e) => dispatch(CommunicationActions.errorAction(e)),
                    (e) => dispatch(CommunicationActions.disconnectAction(e)),
                );
            });
            break;
        case CommunicationActions.ACTION_COMM_MESSAGE_SEND:
            if (ws && app.connected) {
                ws.send(action.payload.data);
            }
            break;
        case CommunicationActions.ACTION_COMM_ERROR:
            console.log('WS ERROR:', 'AUTO-CONNECT', appSettings.autoConnect);
            if (appSettings.autoConnect) {
                dispatch(AppActions.waitNetworkReachableAction());
            }
            break;
        case CommunicationActions.ACTION_COMM_DISCONNECT:
            if (ws) {
                ws.close();
            }

            ws = null;

            if (app.waiting) {
                waitingTimerId = setTimeout(() => {
                    waitingTimerId = null;

                    console.log('TRY TO CONNECT', app.network, app.waiting);
                    if (app.network && app.waiting) {
                        dispatch(CommunicationActions.connectAction());
                    }
                }, 5000);
            }
            break;
    }

    return next(action);
};

/**
 * Create WebSocket connection.
 *
 * @param address server address.
 * @param onopen open handler function.
 * @param onmessage message handler function.
 * @param onerror error handler function.
 * @param onclose close handler function.
 * @returns {WebSocket} new WebSocket connection object.
 */
function connectWebSocket(address, onopen, onmessage, onerror, onclose) {
    const wsaddress = `wss://${address}`;

    const ws = new WebSocket(wsaddress);
    ws.onopen = onopen;
    ws.onmessage = onmessage;
    ws.onerror = onerror;
    ws.onclose = onclose;
    return ws;
}