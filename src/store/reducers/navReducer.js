import {BaseNavigator} from '../../navigation';

const initialState = BaseNavigator.router.getStateForAction(
    BaseNavigator.router.getActionForPathAndParams('Base')
);

/**
 * Application reducer.
 */
export default (state = initialState, action) => {
    const nextState = BaseNavigator.router.getStateForAction(action, state);

    // Simply return the original `state` if `nextState` is null or undefined.
    return nextState || state;
};