import { StyleSheet, SafeAreaView, Text, View, Image } from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons';

import colors from '../config/colors';

const ViewImageScreen = (props) => {
  return (
    <View style={styles.container}>
        <SafeAreaView style={styles.safeArea}>
            <MaterialCommunityIcons name="close"  style={styles.closeButton} />
            <MaterialCommunityIcons  name="trash-can-outline" style={styles.trashButton} />
        </SafeAreaView>
        <Image source={props.image} style={styles.item} />
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
    closeButton: {
        fontSize: 35,
        color: colors.white,
    },
    trashButton: {
        color: colors.white,
        fontSize: 35,
    },
    item: {
        width: '100%',
        height: '60%',
        resizeMode: 'contain',
    }

});

export default ViewImageScreen;