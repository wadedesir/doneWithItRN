import React from 'react';

import { StyleSheet, View, FlatList } from 'react-native';

import ListItem from '../components/ListItem';
import MenuItem from '../components/MenuItem';
import Screen from '../components/Screen';
import ListItemSeparator from '../components/ListItemSeparator';

const MenuItems = [
    {
        title: 'My Listings',
        icon: 'format-list-bulleted',
        color: 'primary',
    },
    {
        title: 'My Messages',
        icon: 'email',
        color: 'secondary',
    },
]

function MyAccountScreen(props) {
    return (
        <Screen>
            <ListItem 
                image={require('../assets/mosh.jpg')}
                title="Wade Desir"
                subtitle="wadedesir@gmail.com"
            />
            <View style={styles.list}>
                <FlatList 
                    data={MenuItems}
                    keyExtractor={(menuItem) => menuItem.title}
                    renderItem={({ item }) => <MenuItem title={item.title} icon={item.icon} color={item.color} />}
                    ItemSeparatorComponent={ListItemSeparator}
                />
            </View>

            <View style={styles.logoutButton}>
                <MenuItem 
                    title="Log Out"
                    icon="logout"
                    color="yellow"
                    style={styles.logoutButton}
                    onPress={() => console.log('Logout Pressed')}
                />
            </View>
        </Screen>
    );
}

const styles = StyleSheet.create({
    container: {

    },
    list: {
        marginTop: 50,
    },
    logoutButton: {
        marginTop: 20,
    }
})

export default MyAccountScreen;

