import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import * as Progress from 'react-native-progress';

export default function Index() {
    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={styles.logoContainer}>
                    <Image source={require('../../Assets/Images/Logo.png')} style={styles.logo} />
                </View>
                <View style={styles.headingContainer}>
                    <Text style={styles.heading}>YOUR NEW PATCHS</Text>
                </View>
                <View style={styles.patchBoxContainer}>
                    <TouchableOpacity style={styles.patchBox}>
                        <View style={styles.boxTopContainer}>
                            <View style={styles.boxCircleRed}></View>
                            <Text style={styles.statusText}>RARE</Text>
                        </View>
                        <Image source={require("../../Assets/Images/img.png")} style={styles.patchBoxImage} />
                        <Text style={styles.progressText}>ARES 1</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.patchBox}>
                        <View style={styles.boxTopContainer}>
                            <View style={styles.boxCircleGreen}></View>
                            <Text style={styles.statusText}>UNUSUAL</Text>
                        </View>
                        <Image source={require("../../Assets/Images/img.png")} style={styles.patchBoxImage} />
                        <Text style={styles.progressText}>ARES 1</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#000',
        flex: 1
    },
    logoContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30
    },
    logo: {
        width: 90,
        height: 50
    },
    headingContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10
    },
    heading: {
        color: "#fff",
        fontSize: 20
    },
    btnContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10
    },
    btn: {
        backgroundColor: "red",
        paddingVertical: 10,
        paddingHorizontal: 13,
        borderRadius: 30
    },
    btnText: {
        color: "#fff",
        fontSize: 16
    },
    boxContainer: {
        marginVertical: 14,
        justifyContent: 'center',
        alignItems: 'center',
    },
    boxsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 10

    },
    box: {
        paddingHorizontal: 10,
        paddingVertical: 15,
        backgroundColor: '#777777',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        marginHorizontal: 10,
        marginVertical: 7,
        width: '45%'
    },
    boxProgressContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: "40%"
    },
    boxText: {
        color: "#fff",
        fontSize: 17,
        fontWeight: "300",
        marginBottom: 5
    },
    progressText: {
        color: "#fff",
        fontSize: 25,
        fontWeight: "300",
        marginLeft: 10,
        textAlign: 'center'
    },
    circleBoxContainer: {
        paddingHorizontal: 25,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10
    },
    circleTextTop: {
        fontSize: 12,
        color: 'white',
        marginTop: 5,
        textAlign: 'center'
    },
    circleTextBottom: {
        fontSize: 12,
        color: 'white',
        textAlign: 'center'
    },
    patchBoxContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
        marginVertical: 20,
        flexWrap: 'wrap'
    },
    patchBox: {
        backgroundColor: '#777777',
        borderRadius: 20,
        paddingVertical: 5,
        marginVertical: 10,
        paddingBottom: 20,
        paddingHorizontal: 10,
        paddingTop: 10
    },
    patchBoxImage: {
        width: 170,
        height: 170,
        marginHorizontal: 20,
        marginTop: 20
    },
    patchBoxImage: {
        width: 170,
        height: 170,
        marginHorizontal: 20,
        marginTop: 20
    },
    boxTopContainer: {
        flexDirection: 'row',
    },
    boxCircleRed: {
        backgroundColor: "red",
        padding: 10, marginRight: 5,
        borderRadius: 20
    },
    boxCircleGreen: {
        backgroundColor: "#00E20E",
        padding: 10, marginRight: 5,
        borderRadius: 20
    },

})