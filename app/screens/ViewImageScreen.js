import React from 'react';
import { Image, StyleSheet, View } from 'react-native';

const image = require('./assets/chair.jpg');

export default function ViewImageScreen() {
    return (
        <View style={styles.background}>
            <View style={styles.topContainer}>
                <View style={styles.box1} />
                <View style={styles.box2} />
            </View>
            <View style={styles.imageContainer}>
                <Image resizeMode='contain' source={image} style={styles.image} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    background: {
        paddingTop: 20,
        backgroundColor: '#000',
        flex: 1,
    },
    box1: {
        height: 50,
        width: 50,
        backgroundColor: '#fc5c65'
    },
    box2: {
        height: 50,
        width: 50,
        backgroundColor: '#4ecdc4'
    },
    image: {
        height: '85%',
        width: '100%',
    },
    imageContainer: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    topContainer: {
        width: '100%',
        paddingStart: 20,
        paddingEnd: 20,
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
});