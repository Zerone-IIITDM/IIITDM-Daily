import React, { Component } from 'react';
import { View, Text, Platform, StyleSheet, Image } from 'react-native';

export default class Homescreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.instiLogo}>

                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    instiLogo: {
        flex:0.1,
        width:75,
        borderColor:'black',
        borderWidth: 2
    }
});