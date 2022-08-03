import React from 'react';
import { StyleSheet, View } from 'react-native';
import Constants from 'expo-constants';

function Screen({ children, style }) {
    return (
    <View style={{...styles.container, ...style}}>
        {children}
    </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingTop: Constants.statusBarHeight,
        flex: 1,
    }
})

export default Screen;