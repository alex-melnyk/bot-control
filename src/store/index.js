import {AsyncStorage} from 'react-native';
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
    storage: AsyncStorage,
    whitelist: ['appSettings']
}, () => {
    console.log('Rehidration complete!')
});

export default appStore;