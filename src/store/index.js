import {createStore, applyMiddleware} from 'redux';
import {persistStore} from 'redux-persist';
import thunk from 'redux-thunk';
import {createLogger} from 'redux-logger';
import reducers from './reducers';
import communication from './middlewares/communication';

const middleware = [
    communication,
    thunk,
    createLogger()
];

const appStore = createStore(
    reducers,
    {},
    applyMiddleware(...middleware)
);

persistStore(appStore, {
    whitelist: ['appSettings']
});

export default appStore;