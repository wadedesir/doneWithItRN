import React from 'react';
import { FlatList, SafeAreaView, StyleSheet, StatusBar } from 'react-native';

import ListItem from '../components/ListItem';

const messages = [
    { 
        id: '1',
        title: 'T1',
        description: 'D1',
        image: require("../assets/chair.jpg"),
    },
    { 
        id: '2',
        title: 'T2',
        description: 'D2',
        image: require('../assets/mosh.jpg'),
    },
]
function MessagesScreen(props) {
    return (
        <SafeAreaView>
            <FlatList 
                data={messages}
                keyExtractor={(message) => message.id.toString()}
                renderItem={({ item }) => 
                    <ListItem 
                        title={item.title}
                        subtitle={item.description}
                        image={item.image}
                    />
                }
            />
        </SafeAreaView>

    );
}

const styles = StyleSheet.create({
    screen: {
    }
})

export default MessagesScreen;