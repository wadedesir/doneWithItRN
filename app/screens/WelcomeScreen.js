import { StyleSheet, Text, View, ImageBackground, Image } from 'react-native';

import Button from '../components/button';

const WelcomeScreen = () => {
  return (
    <View style={styles.container}>
        <ImageBackground source={require('../assets/background.jpg')} style={styles.background} blurRadius="10">
            <Image source={require('../assets/logo-red.png')} style={styles.logo} />
            <Text style={styles.title}>
                Sell what You Don't Need
            </Text>
        </ImageBackground>

        <Button color="primary" text="Login" />
        <Button color="secondary" text="Register" />
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
    title: {
        top: 120,
        fontSize: 25,
        fontWeight: '600',
    }
});

export default WelcomeScreen;