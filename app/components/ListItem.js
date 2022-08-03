import React from 'react';
import { StyleSheet, Text, View, Image, TouchableHighlight } from 'react-native';
import {Swipeable, GestureHandlerRootView} from 'react-native-gesture-handler';

import Colors from '../config/colors';
import AppText from './AppText';

function ListItem(props) {
    return (
        <GestureHandlerRootView>
            <Swipeable renderRightActions={props.renderRightActions}>
                <TouchableHighlight 
                    onPress={props.onPress}
                    underlayColor={Colors.light}
                >

                    <View style={styles.container}>
                        <Image source={props.image} style={styles.avatar} />
                        <View style={styles.textContainer}>
                            <AppText style={styles.username}>{props.title}</AppText>
                            <AppText style={styles.listings}>{props.subtitle} Listings</AppText>
                        </View>
                    </View>
                </TouchableHighlight>
            </Swipeable>
        </GestureHandlerRootView>
    );
}

export default ListItem;

const styles = StyleSheet.create({

    container: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        height: 100,
        paddingLeft: 30,
        backgroundColor: Colors.white,
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
        color: Colors.medium
    }
})