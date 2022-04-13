import React from 'react';
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native';

import colors from '../config/colors';

const background = require('../assets/background.jpg');
const logo = require('../assets/logo-red.png');

export default function WelcomeScreen() {
    return (
        <ImageBackground
            resizeMode="cover"
            source={background}
            style={styles.background}
        >
            <View style={styles.logoContainer}>
                <Image source={logo} style={styles.logo} />
                <Text>
                    Sell What You Don't Need
                </Text>
            </View>
            
            <View style={styles.registerButton} />
            <View style={styles.loginButton} />

        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    logo: {
        height: 100,
        width: 100,
    },
    logoContainer: {
        position: 'absolute',
        top: 70,
        alignItems: 'center',
    },
    loginButton: {
        width: '100%',
        height: 70,
        backgroundColor: colors.primary
    },
    registerButton: {
        width: '100%',
        height: 70,
        backgroundColor: colors.secondary
    },
    text: {
        color: 'black',
        textAlign: 'center',
    },
});