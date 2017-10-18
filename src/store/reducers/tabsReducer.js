import {TabsNavigator} from '../../navigation/rootNavigation';

const initialState = TabsNavigator.router.getStateForAction(
    TabsNavigator.router.getActionForPathAndParams('Root')
);

/**
 * Application reducer.
 */
export default (state = initialState, action) => {
    const nextState = TabsNavigator.router.getStateForAction(action, state);

    // Simply return the original `state` if `nextState` is null or undefined.
    return nextState || state;
};