import {LIST_ITEM_ACCESSORY_SWITCH} from "../components/FlatListItem";

export const MI_SETTINGS_SERVER_ADDRESS = 'MI_SETTINGS_SERVER_ADDRESS';
export const MI_SETTINGS_AUTO_CONNECT = 'MI_SETTINGS_AUTO_CONNECT';

export const items = [
    {
        id: MI_SETTINGS_SERVER_ADDRESS,
        icon: 'server',
        text: 'Server address'
    }, {
        id: MI_SETTINGS_AUTO_CONNECT,
        icon: 'plug',
        text: 'Auto connect',
        accessory: LIST_ITEM_ACCESSORY_SWITCH
    }
];

/**
 * Menu key's extractor.
 *
 * @param item menu item object.
 */
export const keyExtractor = (item) => ({
    ...item,
    key: `settings_item_${item.id}`
});