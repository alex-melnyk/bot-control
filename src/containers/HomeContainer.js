import {connect} from 'react-redux';
import HomeScreen, {ARROW_DIR_D, ARROW_DIR_L, ARROW_DIR_R, ARROW_DIR_S, ARROW_DIR_U} from '../components/HomeScreen';
import * as WsActions from "../store/actions/wsActions";

export default connect((state) => ({
    ...state.app
}), (dispatch) => ({
    sendCommand: (direction) => {
        switch (direction) {
            case ARROW_DIR_S:
                dispatch(WsActions.sendCommandStopAction());
                break;
            case ARROW_DIR_U:
                dispatch(WsActions.sendCommandMoveForwardAction());
                break;
            case ARROW_DIR_L:
                dispatch(WsActions.sendCommandMoveLeftAction());
                break;
            case ARROW_DIR_R:
                dispatch(WsActions.sendCommandMoveRightAction());
                break;
            case ARROW_DIR_D:
                dispatch(WsActions.sendCommandMoveBackAction());
                break;
        }
    }
}))(HomeScreen);