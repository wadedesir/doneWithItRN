import { StyleSheet, Text, View, ImageBackground, Image } from 'react-native';

const WelcomeScreen = () => {
  return (
    <View style={styles.container}>
        <ImageBackground source={require('../assets/background.jpg')} style={styles.background}>
            <Image source={require('../assets/logo-red.png')} style={styles.logo} />
            <Text style={styles.title}>
                Sell what You Don't Need
            </Text>
        </ImageBackground>

        <View style={styles.redBox}>
        </View>
        <View style={styles.blueBox}>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    background: {
        height: '100%',
        width: '100%',
        alignItems: 'center',
        position: 'absolute',
    },
    redBox: {
        backgroundColor: '#fc5c65',
        height: 65,
        width: '100%',
    },
    blueBox: {
        backgroundColor: '#4ECDC4',
        height: 65,
        width: '100%',
    },
    logo: {
        width: 100,
        height: 100,
        top: 100,
    },
    title: {
        top: 100,
    }
});

export default WelcomeScreen;