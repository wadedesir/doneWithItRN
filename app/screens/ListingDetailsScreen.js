import { StyleSheet, Text, Image, View } from 'react-native';

import colors from '../config/colors';
import ListItem from '../components/lists/ListItem';

const ListingDetailsScreen = (props) => {
    return (
        <View style={styles.container}>
            <Image source={props.image} style={styles.image} />
            <Text style={styles.title}>{props.title}</Text>
            <Text style={styles.subtitle}>{props.subtitle}</Text>
           
           <View style={styles.listContainer}>
                <ListItem 
                    image={props.avatar} 
                    title={props.username}
                    subtitle={props.listings}
                />
           </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    image: {
        width: '100%',
        height: 300,
    },
    title: {
        marginTop: 20,
        marginLeft: 30,
        fontSize: 23,
    },
    subtitle: {
        marginLeft: 30,
        marginTop: 10,
        fontSize: 20,
        color: colors.secondary
    },
    listContainer: {
        marginTop: 40,
    }
    
} );

export default ListingDetailsScreen;