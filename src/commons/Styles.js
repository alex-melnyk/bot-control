import {Platform, StyleSheet, PixelRatio} from 'react-native';

export const COLOR_CONTAINER_BACKGROUND = '#0D0D0D';
export const COLOR_HEADER_BACKGROUND = '#181818';
export const COLOR_HEADER_BORDER = '#313131';
export const COLOR_TEXT_DEFAULT = '#FFFFFF';
export const COLOR_TAB_INACTIVE = '#808080';
export const COLOR_TAB_HIGHLIGHT = '#FF9500';

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
    }
};

const header = {
    header: {
        backgroundColor: COLOR_HEADER_BACKGROUND,
        borderBottomColor: COLOR_HEADER_BORDER,
        borderBottomWidth: 1
    },
    headerTitle: {
        color: '#F0F0F0',
        fontSize: PixelRatio.getPixelSizeForLayoutSize(6)
    }
};

const tabs = {
    tab: {
        backgroundColor: COLOR_HEADER_BACKGROUND,
        borderTopColor: COLOR_HEADER_BORDER,
        borderTopWidth: 1
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
        flex: 1,
        flexDirection: 'row',

    },
    rowText: {
        color: 'white'
    },
    rowSubtext: {
        color: 'white'
    }
};

export const flowStyles = StyleSheet.create(flow);
export const commonStyles = StyleSheet.create(common);
export const headerStyles = StyleSheet.create(header);
export const tabsStyles = StyleSheet.create(tabs);
export const homeStyles = StyleSheet.create(home);
export const listStyles = StyleSheet.create(list);
