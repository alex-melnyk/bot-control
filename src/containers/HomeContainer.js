import {connect} from 'react-redux';
import HomeScreen from '../components/HomeScreen';

export default connect((state) => ({
    ...state.app
}), (props) => ({

}))(HomeScreen);