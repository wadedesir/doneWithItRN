import { StyleSheet, Text, Image, View } from 'react-native';
import colors from '../config/colors';

const ListingDetailsScreen = (props) => {
    return (
        <View style={styles.container}>
            <Image source={props.image} style={styles.image} />
            <Text style={styles.title}>{props.title}</Text>
            <Text style={styles.subtitle}>{props.subtitle}</Text>
            <View style={styles.userInfo}>
                <Image source={props.avatar} style={styles.avatar} />
                <View style={styles.textContainer}>
                    <Text style={styles.username}>{props.username}</Text>
                    <Text style={styles.listings}>{props.listings} Listings</Text>
                </View>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    image: {
        width: 400,
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
    avatar: {
        width: 70,
        height: 70,
        borderRadius: 50,
    },
    userInfo: {
        flexDirection: 'row',
        width: '100%',
        height: 100,
        marginLeft: 30,
        marginTop: 30,

    },
    textContainer: {
        marginTop: 10,
        marginLeft: 10,
    },
    username: {
        fontSize: 18,
    },
    listings: {
        marginTop: 7,
        fontSize: 15,
        color: colors.gray
    }
} );

export default ListingDetailsScreen;