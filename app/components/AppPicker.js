import React from 'react';
import { View, TextInput, StyleSheet, TouchableWithoutFeedback, Modal, Button, FlatList } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import defaultStyles from '../config/styles';
import AppText from './AppText';
import Screen from './Screen';
import PickerItem from './PickerItem';

function AppPicker({ icon, items, selectedItem, placeholder, onSelectItem, width, ...otherProps }) {
const [modalVisible, setModalVisible] = React.useState(false);

    return (
        <>
            <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
                <View style={{...styles.container, ...width}}>
                    {icon && <MaterialCommunityIcons name={icon} size={20} color={defaultStyles.colors.medium} style={styles.icon}/>}
                    {selectedItem ? <AppText style={styles.text}>{selectedItem.label}</AppText> : <AppText style={styles.placeholder}>{placeholder}</AppText>}
                    <MaterialCommunityIcons name="chevron-down" size={20} color={defaultStyles.colors.medium} style={styles.icon}/>
                </View>
            </TouchableWithoutFeedback>
            <Modal visible={modalVisible} animationType="slide">
                <Screen>
                    <Button title="Close" onPress={() => setModalVisible(false)}/>
                    <View style={styles.itemList}>
                        <FlatList 
                            contentContainerStyle={styles.itemList}
                            data={items}
                            keyExtractor={(item) => item.id.toString()}
                            renderItem={({ item }) => (
                                <PickerItem label={item.label} name={item.icon} color={item.color} onPress={() => {
                                    setModalVisible(false);
                                    onSelectItem(item)
                                }} />
                            )}
                        />
                    </View>
                </Screen>
            </Modal>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: defaultStyles.colors.light,
        borderRadius: 25,
        flexDirection: 'row',
    },
    icon: {
        marginRight: 10,
    },
    placeholder: {
        color: defaultStyles.colors.medium,
        flex: 1
    },
    text: {
        flex: 1,
        ...defaultStyles.text,
    },
    itemList: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        paddingHorizontal: 5,
    }
})

export default AppPicker;