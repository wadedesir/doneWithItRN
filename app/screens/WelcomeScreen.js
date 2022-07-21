import { StyleSheet, Text, View, ImageBackground, Image } from 'react-native';

import AppButton from '../components/AppButton';

const WelcomeScreen = () => {
  return (
    <View style={styles.container}>
        <ImageBackground source={require('../assets/background.jpg')} style={styles.background} blurRadius="10">
            <Image source={require('../assets/logo-red.png')} style={styles.logo} />
            <Text style={styles.tagline}>
                Sell what You Don't Need
            </Text>
        </ImageBackground>

        <View style={styles.buttons}>
            <AppButton color="primary" title="Login" />
            <AppButton color="secondary" title="Register" />
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
    logo: {
        width: 100,
        height: 100,
        top: 100,
    },
    tagline: {
        top: 120,
        fontSize: 25,
        fontWeight: '600',
    },
    buttons: {
        width: '100%',
        padding: 20,
    }

});

export default WelcomeScreen;