import React from 'react';
import { StyleSheet, Text, View, Image, TouchableHighlight } from 'react-native';
import {Swipeable, GestureHandlerRootView} from 'react-native-gesture-handler';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Colors from '../../config/colors';
import AppText from '../AppText';

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
                            <AppText numberOfLines={1} style={styles.username}>{props.title}</AppText>
                            <AppText numberOfLines={1} style={styles.listings}>{props.subtitle} Listings</AppText>
                        </View>
                        {props.chevron ? <MaterialCommunityIcons style={styles.chevron} name="chevron-right" size={30} color={Colors.medium} /> : null}
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
        flex: 1
    },
    username: {
        fontSize: 18,
        fontWeight: '500',
    },
    listings: {
        marginTop: 7,
        fontSize: 15,
        color: Colors.medium
    },
    chevron: {
        paddingRight: 20,
    }

})