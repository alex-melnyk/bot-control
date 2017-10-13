export const ACTION_APP_NETWORK_REACHABLE = 'ACTION_APP_NETWORK_REACHABLE';
export const ACTION_APP_NETWORK_UNREACHABLE = 'ACTION_APP_NETWORK_UNREACHABLE';
export const ACTION_APP_WAIT_NETWORK_REACHABLE = 'ACTION_APP_WAIT_NETWORK_REACHABLE';

/**
 *
 */
export function networkReachableAction() {
    return {type: ACTION_APP_NETWORK_REACHABLE};
}

/**
 *
 */
export function networkUnreachableAction() {
    return {type: ACTION_APP_NETWORK_UNREACHABLE};
}

/**
 *
 */
export function waitNetworkReachableAction() {
    return {type: ACTION_APP_WAIT_NETWORK_REACHABLE};
}