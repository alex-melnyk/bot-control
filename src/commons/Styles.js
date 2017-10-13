import {Platform, StyleSheet, PixelRatio} from 'react-native';

const common = {
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#101010'
    },
    statusBar: {
        backgroundColor: '#2F2F2F',
        height: Platform.OS === 'ios' ? 0 : 24
    }
};

const home = {
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#101010',
        justifyContent: 'center',
        alignItems: 'center'
    },
    controlButton: {
        margin: PixelRatio.getPixelSizeForLayoutSize(3),
        padding: PixelRatio.getPixelSizeForLayoutSize(10),

        justifyContent: 'center',
        alignItems: 'center',

        borderRadius: 8,

        backgroundColor: '#2F2F2F'
    },
    controlButtonContent: {
        color: '#009BFF'
    }
};

const header = {
    header: {
        backgroundColor: '#2F2F2F'
    },
    headerTitle: {
        color: '#F0F0F0'
    }
};

const tabs = {
    tab: {
        borderTopColor: '#202020',
        backgroundColor: '#2F2F2F'
    }
};

export const commonStyles = StyleSheet.create(common);
export const headerStyles = StyleSheet.create(header);
export const tabsStyles = StyleSheet.create(tabs);
export const homeStyles = StyleSheet.create(home);
