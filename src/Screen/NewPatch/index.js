import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import * as Progress from 'react-native-progress';

export default function Index({navigation}) {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={styles.logoContainer}>
                    <Image source={require('../../Assets/Images/Logo.png')} style={styles.logo} />
                </View>
                <View style={styles.headingContainer}>
                    <Text style={styles.heading}>PATCH COLLECTION</Text>
                </View>
                <View style={styles.boxContainer}>
                    <View style={styles.boxProgressContainer}>
                        <Progress.Bar progress={0.6} width={110} height={10} color="red" unfilledColor="white" />
                        <Text style={styles.progressText}>6/21</Text>
                    </View>
                </View>
                <View style={styles.patchBoxContainer}>
                    {
                        arr.map((e, i) => {
                            return (
                                <TouchableOpacity key={i} style={styles.patchBox} onPress={() => navigation.navigate('GeminiCollection')}>
                                    <Image source={require("../../Assets/Images/img.png")} style={styles.patchBoxImage} />
                                    <Text style={styles.progressText}>ARES 1</Text>
                                </TouchableOpacity>
                            )
                        })
                    }
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
        marginTop: 25
    },
    logo: {
        width: 120,
        height: 70
    },
    headingContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10
    },
    heading: {
        color: "#fff",
        fontSize: 18
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
        fontSize: 18,
        fontWeight: "300",
        marginLeft: 10
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
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        marginVertical: 20,
        flexWrap: 'wrap'
    },
    patchBox: {
        width: "30%",
        backgroundColor: '#777777',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 5,
        marginVertical: 5
    },
    patchBoxImage: {
        width: 80,
        height: 80
    },


})