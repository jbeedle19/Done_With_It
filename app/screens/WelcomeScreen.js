import React from 'react';
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native';

const background = require('../assets/background.jpg');
const logo = require('../assets/logo-red.png');

export default function WelcomeScreen() {
    return (
        <ImageBackground
            resizeMode="cover"
            source={background}
            style={styles.image}
        >
            <View>
                <Image source={logo} style={styles.logo} />
                <Text>
                    Sell What You Don't Need
                </Text>
            </View>
            <View style={{ width: '100%' }}>
                <View style={styles.register} />
                <View style={styles.login} />
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    image: {
        flex: 1,
        
    },
    logo: {
        height: 100,
        width: 100,
    },
    text: {
        color: 'black',
        textAlign: 'center',
    },
    login: {
        width: '100%',
        height: 50,
        backgroundColor: '#4ecdc4'
    },
    register: {
        width: '100%',
        height: 50,
        backgroundColor: '#fc5c65'
    }
});