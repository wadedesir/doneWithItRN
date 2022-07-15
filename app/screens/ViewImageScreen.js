import { StyleSheet, SafeAreaView, Text, View, Image } from 'react-native';

const ViewImageScreen = () => {
  return (
    <View style={styles.container}>
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.redBox}>
            </View>
            <View style={styles.blueBox}>
            </View>
        </SafeAreaView>
        <Image source={require('../assets/chair.jpg')} style={styles.chair} />
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
        alignItems: 'center',
        justifyContent: 'center',
    },
    safeArea: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '90%',
        position: 'absolute',
        top: 0,
    },
    redBox: {
        backgroundColor: '#fc5c65',
        height: 50,
        width: 50,
    },
    blueBox: {
        backgroundColor: '#4ECDC4',
        height: 50,
        width: 50,
    },
    chair: {
        width: '100%',
        height: '60%',
        resizeMode: 'contain',
    }

});

export default ViewImageScreen;