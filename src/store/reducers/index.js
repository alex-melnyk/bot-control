import {combineReducers} from 'redux';
import app from './appReducer';
import appSettings from './appSettingsReducer';

export default combineReducers({
    app,
    appSettings
});

