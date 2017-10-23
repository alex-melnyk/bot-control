import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {FlatList, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {homeStyles} from '../commons/Styles';

export const ARROW_DIR_U = 'up';
export const ARROW_DIR_L = 'left';
export const ARROW_DIR_R = 'right';
export const ARROW_DIR_D = 'down';
export const ARROW_DIR_S = 'stop';

/**
 *
 */
class HomeScreen extends Component {
    static navigationOptions = {
        title: 'Home',
    };

    state = {
        processing: false
    };

    render() {
        const {processing} = this.state;
        const {connected} = this.props;
        const robotStatus = false;

        return (
            <FlatList
                contentContainerStyle={[homeStyles.container, {marginTop: 26}]}
                data={[
                    {id: 'STATUSES'},
                    {id: 'CONTROLS'}
                ]}
                keyExtractor={(item) => item.id}
                renderItem={({item}) => {
                    switch (item.id) {
                        case 'STATUSES':
                            return this.renderStatus(connected, robotStatus);
                        case 'CONTROLS':
                            return this.renderButtonsControl();
                        default:
                            return null;
                    }
                }}
                // refreshing={processing}
                // onRefresh={() => {
                //     this.setState({
                //         processing: true
                //     });
                //     setTimeout(() => {
                //         this.setState({
                //             processing: false
                //         });
                //     }, 2000);
                // }}
            />
        );
    }

    renderStatus = (serverStatus, robotStatus) => (
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
    );

    renderButtonsControl = () => (
        <View style={homeStyles.controlsWrapper}>
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
                    style={homeStyles.controlButtonBg}
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

    arrowButtonClicked = (direction) => {
        this.props.sendCommand(direction);
    };
}

HomeScreen.propTypes = {
    sendCommand: PropTypes.func.isRequired
};


export default HomeScreen;