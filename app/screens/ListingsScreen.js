import React from 'react';
import { StyleSheet, Text, View, Image, FlatList } from 'react-native';

import Screen from '../components/Screen';
import Card from '../components/Card';

const Cards = [
    {
        image: require('../assets/jacket.jpg'),
        title: 'Red Jacket for Sale!',
        subtitle: '$100',
    },
    {
        image: require('../assets/couch.jpg'),
        title: 'Couch in great condition!',
        subtitle: '$1000',
    }
]
function ListingsScreen(props) {
    return (
        <Screen>
            <FlatList 
                data={Cards}
                keyExtractor={(card) => card.title}
                renderItem={({ item }) => <Card image={item.image} title={item.title} subtitle={item.subtitle} />}
            />
        </Screen>
    );
}

const styles = StyleSheet.create({
    
})

export default ListingsScreen;