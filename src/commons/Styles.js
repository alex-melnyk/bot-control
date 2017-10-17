import {Platform, StyleSheet, PixelRatio} from 'react-native';

export const COLOR_CONTAINER_BACKGROUND = '#0D0D0D';
export const COLOR_HEADER_BACKGROUND = '#181818';
export const COLOR_HEADER_BORDER = '#313131';
export const COLOR_TEXT_DEFAULT = '#FFFFFF';
export const COLOR_TAB_INACTIVE = '#808080';
export const COLOR_TAB_HIGHLIGHT = '#FF9500';
export const COLOR_FL_ITEM_BACKGROUND = '#171717';

const flow = {
    container: {
        flex: 1,
        backgroundColor: COLOR_CONTAINER_BACKGROUND
    }
};

const common = {
    container: {
        flex: 1,
        flexDirection: 'column',
        // backgroundColor: COLOR_CONTAINER_BACKGROUND
    },
    statusBar: {
        backgroundColor: COLOR_HEADER_BACKGROUND,
        height: Platform.OS === 'ios' ? 0 : 24
    },
    textField: {
        marginHorizontal: 10,
        paddingVertical: 10,
        color: 'white',
        borderBottomWidth: 1,
        borderBottomColor: COLOR_HEADER_BORDER,
    },
    textFieldTip: {
        margin: 10,
        marginBottom: 0,
        color: 'gray'
    },
};

const header = {
    header: {
        backgroundColor: COLOR_HEADER_BACKGROUND,
        borderBottomColor: COLOR_HEADER_BORDER,
        borderBottomWidth: 0.5
    },
    headerTitle: {
        color: '#F0F0F0',
        fontSize: 13
    }
};

const tabs = {
    tab: {
        margin: 0,
        padding: 0,

        // height: 50,
        backgroundColor: COLOR_HEADER_BACKGROUND,
        borderTopColor: COLOR_HEADER_BORDER,
        borderTopWidth: 0.5
    },
    tabIcon: {
        margin: 0,
        padding: 0,

        // width: 26,
        // height: 26
    },
    tabLabel: {
        margin: 0,
        padding: 0,

        fontSize: 12
    }
};

const home = {
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    controlButton: {
        margin: PixelRatio.getPixelSizeForLayoutSize(3),
        padding: PixelRatio.getPixelSizeForLayoutSize(10),

        justifyContent: 'center',
        alignItems: 'center',

        borderRadius: 8,

        backgroundColor: COLOR_HEADER_BACKGROUND
    },
    controlButtonContent: {
        color: COLOR_TEXT_DEFAULT
    }
};

const list = {
    container: {
        flex: 1,
        flexDirection: 'column'
    },
    row: {
        paddingLeft: 10,
        borderBottomColor: COLOR_HEADER_BORDER,
        borderBottomWidth: 0.5,
        backgroundColor: COLOR_FL_ITEM_BACKGROUND,
    },
    rowWrapper: {
        height:  70,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    },
    leftIconWrapper: {
        marginRight: 10,
        padding: 5,
        // borderRadius: 5,
        // backgroundColor: '#000',
    },
    leftIcon: {
        color: 'white'
    },
    rowTextWrapper: {
        flex: 1,
        flexDirection: 'column'
    },
    rowText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'white'
    },
    rowSubtext: {
        color: 'white'
    },
    accessory: {
        paddingRight: 10
    },
    accessoryDisclosure: {
        color: 'gray'
    },
    accessorySwitch: {
    }
};

export const flowStyles = StyleSheet.create(flow);
export const commonStyles = StyleSheet.create(common);
export const headerStyles = StyleSheet.create(header);
export const tabsStyles = StyleSheet.create(tabs);
export const homeStyles = StyleSheet.create(home);
export const listStyles = StyleSheet.create(list);
