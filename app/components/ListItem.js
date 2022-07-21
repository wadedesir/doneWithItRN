import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

import colors from '../config/colors';
import AppText from './AppText';

function ListItem(props) {
    return (
    <View style={styles.container}>
        <Image source={props.image} style={styles.avatar} />
        <View style={styles.textContainer}>
            <AppText style={styles.username}>{props.title}</AppText>
            <AppText style={styles.listings}>{props.subtitle} Listings</AppText>
        </View>
    </View>
    );
}

export default ListItem;

const styles = StyleSheet.create({

    container: {
        flexDirection: 'row',
        width: '100%',
        height: 100,
        marginLeft: 30,
        marginVertical: 40,
    },
    avatar: {
        width: 70,
        height: 70,
        borderRadius: 50,
    },
    textContainer: {
        marginTop: 10,
        marginLeft: 10,
    },
    username: {
        fontSize: 18,
        fontWeight: '500',
    },
    listings: {
        marginTop: 7,
        fontSize: 15,
        color: colors.medium
    }
})