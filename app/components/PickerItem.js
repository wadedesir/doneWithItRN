import React from 'react';
import { TouchableOpacity, StyleSheet, View } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import AppText from './AppText';
import defaultStyles from '../config/styles';

function PickerItem({ label, onPress, color, name }) {
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => onPress()} style={{...styles.icon, backgroundColor: color}}>
                <MaterialCommunityIcons name={name} size={40} color="white"/>
            </TouchableOpacity >
            <AppText style={defaultStyles.text}>{label}</AppText>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        marginHorizontal: 10,
        marginVertical: 10,
    },
    icon: {
        width: 75,
        height: 75,
        borderRadius: 50,
        backgroundColor: 'red',
        margin: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        // textAlign: 'center',
    },

})
export default PickerItem;