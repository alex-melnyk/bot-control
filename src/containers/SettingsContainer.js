import {connect} from 'react-redux';
import SettingsScreen from '../components/SettingsScreen';

export default connect((state) => ({
    ...state.app
}), (props) => ({

}))(SettingsScreen);