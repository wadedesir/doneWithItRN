import React, { useState } from 'react';
import { FlatList, SafeAreaView, StyleSheet, View } from 'react-native';

import ListItem from '../components/ListItem';
import Screen from '../components/Screen';
import Colors from '../config/colors';
import ListItemSeparator from '../components/ListItemSeparator';
import ListItemDeleteAction from '../components/ListItemDeleteAction';

const initialMessages = [
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
function MessagesScreen() {
    const [messages, setMessages] = useState(initialMessages);
    const [refreshing, setRefreshing] = useState(false);

    const handleDelete = (message) => {
       setMessages(messages.filter(m => m.id !== message.id))
    }

    return (
        <Screen>
            <FlatList 
                data={messages}
                keyExtractor={(message) => message.id.toString()}
                renderItem={({ item }) => 
                    <ListItem 
                        title={item.title}
                        subtitle={item.description}
                        image={item.image}
                        onPress={() => console.log('Item pressed', item)}
                        renderRightActions={() => <ListItemDeleteAction onPress={() => handleDelete(item)}/>}
                    />
                }

                ItemSeparatorComponent={ListItemSeparator}
                refreshing={refreshing}
                onRefresh={ () => {
                    setMessages([
                        { 
                            id: 'test',
                            title: 'test1',
                            description: 'test1',
                            image: require("../assets/chair.jpg"),
                        }
                    ])
                }}
            />
        </Screen>

    );
}

const styles = StyleSheet.create({
  
})

export default MessagesScreen;