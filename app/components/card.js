import { StyleSheet, Text, Image, View } from 'react-native';

import colors from '../config/colors';

const Card = (props) => {
    return (
        <View style={styles.container}>
            <Image source={props.image} style={styles.image} />
            <View style={styles.textContainer}>
                <Text style={styles.title}>{props.title}</Text>
                <Text style={styles.subtitle}>{props.subtitle}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 250,
        width: 340,
        backgroundColor: colors.white,
        borderRadius: 15,
        overflow: 'hidden',
    },
    image: {
        width: '100%',
        height: 175,
    },
    textContainer: {
        marginLeft: 20, marginTop: 15,
    },
    subtitle: {
        marginTop: 10,
        fontWeight: '500',
        color: colors.secondary
    }
} );

export default Card;