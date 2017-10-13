import React, {Component} from 'react';
import {TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {homeStyles} from '../commons/Styles';

const ARROW_DIR_U = 'up';
const ARROW_DIR_L = 'left';
const ARROW_DIR_R = 'right';
const ARROW_DIR_D = 'down';
const ARROW_DIR_S = 'stop';

/**
 *
 */
class HomeScreen extends Component {
    static navigationOptions = {
        title: 'Home',
    };

    render() {
        const serverStatus = this.props.connected;
        const robotStatus = false;

        return (
            <View style={homeStyles.container}>
                <View style={{flexDirection: 'row', marginBottom: 50}}>
                    <Icon
                        name="server"
                        size={30}
                        style={{color: serverStatus ? '#9BFF00' : '#FF0000', marginRight: 5}}
                    />
                    <Icon
                        name="android"
                        size={30}
                        style={{color: robotStatus ? '#9BFF00' : '#FF0000', marginLeft: 5}}
                    />
                </View>

                <TouchableOpacity
                    style={homeStyles.controlButton}
                    onPress={() => this.arrowButtonClicked(ARROW_DIR_U)}
                >
                    <Icon
                        name="chevron-up"
                        size={30}
                        style={homeStyles.controlButtonContent}
                    />
                </TouchableOpacity>
                <View style={{flexDirection: 'row'}}>
                    <TouchableOpacity
                        style={homeStyles.controlButton}
                        onPress={() => this.arrowButtonClicked(ARROW_DIR_L)}
                    >
                        <Icon
                            name="chevron-left"
                            size={30}
                            style={homeStyles.controlButtonContent}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={homeStyles.controlButton}
                        onPress={() => this.arrowButtonClicked(ARROW_DIR_S)}
                    >
                        <Icon
                            name="square"
                            size={30}
                            style={[homeStyles.controlButtonContent, {color: '#FF9B00'}]}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={homeStyles.controlButton}
                        onPress={() => this.arrowButtonClicked(ARROW_DIR_R)}
                    >
                        <Icon
                            name="chevron-right"
                            size={30}
                            style={homeStyles.controlButtonContent}
                        />
                    </TouchableOpacity>
                </View>
                <TouchableOpacity
                    style={homeStyles.controlButton}
                    onPress={() => this.arrowButtonClicked(ARROW_DIR_D)}
                >
                    <Icon
                        name="chevron-down"
                        size={30}
                        style={homeStyles.controlButtonContent}
                    />
                </TouchableOpacity>
            </View>
        );
    }

    arrowButtonClicked = (direction) => {

    };
}


export default HomeScreen;