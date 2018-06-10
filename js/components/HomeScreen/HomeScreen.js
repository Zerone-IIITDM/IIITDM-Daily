import React, { Component } from 'react';
import { View, Text, Platform, StyleSheet, Image } from 'react-native';

export default class Homescreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.instiLogo}>
                </View>
                <View style={styles.headerHome}>
                    <Text style={{color:'#3f2663', fontSize:18}}>Design{" "}</Text>
                    <Text style={{color:'#00a85e', fontSize:18}}>Create{" "}</Text>
                    <Text style={{color:'#5c5a5f', fontSize:18}}>Innovate</Text>
                </View>
                <View style={styles.underHeaderHome}>
                    <Text>An insititute of National Importance specialized in IT Enabled Design and Manufacturing</Text>
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
    },
    headerHome: {
        flexDirection:'row',
    },
    underHeaderHome: {
        flex:0.1,
        width:250,
        justifyContent:'center',
        alignItems:'center',
    }
});