import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Text, View, Switch, TouchableOpacity} from "react-native";
import {listStyles} from '../Styles';
import Icon from 'react-native-vector-icons/FontAwesome';

export const LIST_ITEM_ACCESSORY_NONE = 'none';
export const LIST_ITEM_ACCESSORY_DISCLOSURE = 'disclosure';
export const LIST_ITEM_ACCESSORY_SWITCH = 'switch';

/**
 *
 */
class FlatListItem extends Component {
    state = {
        switchValue: !!this.props.checked
    };

    // HANDLERS
    handleAccessoryCheck = () => {
        this.handlePressed();
    };

    handlePressed = () => {
        if (this.props.accessory === LIST_ITEM_ACCESSORY_SWITCH) {
            this.setState({
                switchValue: !this.state.switchValue
            });
        }

        if (this.props.onSelect) {
            this.props.onSelect({
                data: this.props.data
            });
        }
    };

    render() {
        const {
            accessory,
            icon,
            text,
            subtext
        } = this.props;

        return (
            <TouchableOpacity
                style={listStyles.row}
                onPress={this.handlePressed}
            >
                <View style={listStyles.rowWrapper}>
                    {
                        icon &&
                        <FlatListItemIcon name={icon} />
                    }
                    <View style={listStyles.rowTextWrapper}>
                        <Text style={listStyles.rowText}>{text}</Text>
                        {
                            subtext &&
                            <Text style={listStyles.rowSubtext}>{subtext}</Text>
                        }
                    </View>
                    {
                        accessory !== LIST_ITEM_ACCESSORY_NONE &&
                        <FlatListItemAccessory
                            type={accessory}
                            checked={this.state.switchValue}
                            onCheck={this.handleAccessoryCheck}
                        />
                    }
                </View>
            </TouchableOpacity>
        );
    }
}

FlatListItem.propTypes = {
    icon: PropTypes.string,
    text: PropTypes.string.isRequired,
    subtext: PropTypes.string,
    accessory: PropTypes.oneOf([
        LIST_ITEM_ACCESSORY_NONE,
        LIST_ITEM_ACCESSORY_DISCLOSURE,
        LIST_ITEM_ACCESSORY_SWITCH
    ]),
    listStyles: PropTypes.object,
    onSelect: PropTypes.func
};

FlatListItem.defaultProps = {
    accessory: LIST_ITEM_ACCESSORY_DISCLOSURE
};


/**
 * Icon part.
 */
const FlatListItemIcon = (props) => (
    <View style={listStyles.leftIconWrapper}>
        <Icon
            style={listStyles.leftIcon}
            name={props.name}
            size={props.size || 24}
        />
    </View>
);

FlatListItemIcon.propTypes = {
    name: PropTypes.string.isRequired,
    size: PropTypes.number
};


/**
 * Accessory part.
 */
const FlatListItemAccessory = (props) => {
    let Accessory = null;

    switch (props.type) {
        case LIST_ITEM_ACCESSORY_DISCLOSURE:
            Accessory = (
                <Icon
                    style={listStyles.accessoryDisclosure}
                    size={props.iconSize || 24}
                    name={props.iconName || 'angle-right'}
                />
            );
            break;
        case LIST_ITEM_ACCESSORY_SWITCH:
            Accessory = (
                <Switch
                    style={listStyles.accessorySwitch}
                    value={props.checked}
                    onValueChange={props.onCheck}
                />
            );
            break;
    }

    return (
        <View
            style={listStyles.accessory}
            children={Accessory}
        />
    );
};

FlatListItemAccessory.propTypes = {
    type: PropTypes.oneOf([
        LIST_ITEM_ACCESSORY_DISCLOSURE,
        LIST_ITEM_ACCESSORY_SWITCH
    ]),
    iconName: PropTypes.string,
    iconSize: PropTypes.number,
    onCheck: PropTypes.func
};

export default FlatListItem;