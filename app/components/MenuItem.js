import React from 'react';
import { StyleSheet, Text, View, Image, TouchableHighlight } from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons';

import Colors from '../config/colors';
import AppText from './AppText';

function MenuItem({color, icon, title, onPress}) {
    return (
        <TouchableHighlight 
            onPress={onPress}
            underlayColor={Colors.light}
        >
            <View style={styles.container}>
                <View style={{...styles.menuIcon, backgroundColor: Colors[color]}} >
                    <MaterialCommunityIcons name={icon} size={20} color={Colors.white} />
                </View>
                <AppText style={styles.username}>{title}</AppText>
            </View>
        </TouchableHighlight>
    );
}

export default MenuItem;

const styles = StyleSheet.create({

    container: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        height: 70,
        paddingLeft: 15,
        backgroundColor: Colors.white,
    },
    menuIcon: {
        width: 45,
        height: 45,
        marginRight: 15,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    username: {
        fontSize: 18,
        fontWeight: '500',
    },
})