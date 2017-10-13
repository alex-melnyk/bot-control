import {Platform, StyleSheet, PixelRatio} from 'react-native';

export const COLOR_CONTAINER_BACKGROUND = '#222222';
export const COLOR_HEADER_BACKGROUND = '#2F2F2F';
export const COLOR_HEADER_BORDER = '#383838';
export const COLOR_ELEMENT_INACTIVE = '#A6A6A6';
export const COLOR_ELEMENT_HIGHLIGHT = '#3BA3F8';

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
        color: COLOR_ELEMENT_HIGHLIGHT
    }
};

const header = {
    header: {
        backgroundColor: COLOR_HEADER_BACKGROUND
    },
    headerTitle: {
        color: '#F0F0F0'
    }
};

const tabs = {
    tab: {
        borderTopColor: COLOR_HEADER_BORDER,
        backgroundColor: COLOR_HEADER_BACKGROUND
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
