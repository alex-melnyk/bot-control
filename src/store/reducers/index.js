import {combineReducers} from 'redux';
import app from './appReducer';
import appSettings from './appSettingsReducer';
import nav from './navReducer';
import tabs from './tabsReducer';

export default combineReducers({
    app,
    appSettings,
    nav,
    tabs
});

