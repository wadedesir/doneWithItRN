import { StyleSheet, Text, Image, View } from 'react-native';

import colors from '../config/colors';
import AppText from './AppText';

const Card = (props) => {
    return (
        <View style={styles.container}>
            <Image source={props.image} style={styles.image} />
            <View style={styles.textContainer}>
                <AppText numberOfLines={1} style={styles.title}>{props.title}</AppText>
                <AppText numberOfLines={1} style={styles.subtitle}>{props.subtitle}</AppText>
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
        marginTop: 15,
        marginBottom: 20,
        alignSelf: 'center'
    },
    image: {
        width: '100%',
        height: 175,
    },
    textContainer: {
        marginLeft: 20, marginTop: 15,
    },
    subtitle: {
        marginBottom: 7,
        fontWeight: 'bold',
        color: colors.secondary
    }
} );

export default Card;