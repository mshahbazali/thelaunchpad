import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import * as Progress from 'react-native-progress';

export default function Index({navigation}) {
    const arr = [1, 2, 3, 4, 5]
    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={styles.logoContainer}>
                    <Image source={require('../../Assets/Images/Logo.png')} style={styles.logo} />
                </View>
                <View style={styles.headingContainer}>
                    <Text style={styles.heading}>PATCH COLLECTION</Text>
                </View>
                <View style={styles.btnContainer}>
                    <TouchableOpacity style={styles.btn} onPress={()=> navigation.navigate("NewPatch")}>
                        <Text style={styles.btnText}>CLAIM TODAYS</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.boxContainer}>
                    {
                        arr.map((e, i) => {
                            return (
                                <View key={i} style={styles.boxsContainer}>
                                    <TouchableOpacity style={styles.box}>
                                        <Text style={styles.boxText}>GEMINI Collection</Text>
                                        <View style={styles.boxProgressContainer}>
                                            <Progress.Bar progress={0.3} width={100} height={10} color="red" unfilledColor="white" />
                                            <Text style={styles.progressText}>6/21</Text>
                                        </View>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={styles.box}>
                                        <Text style={styles.boxText}>GEMINI Collection</Text>
                                        <View style={styles.boxProgressContainer}>
                                            <Progress.Bar progress={0.3} width={100} height={10} color="red" unfilledColor="white" />
                                            <Text style={styles.progressText}>6/21</Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            )
                        })
                    }

                </View>
                <View style={styles.circleBoxContainer}>
                    <View>
                        <Progress.Pie progress={0.9} size={50} color="white" unfilledColor="red" borderColor="white" />
                        <Text style={styles.circleTextTop}>SPECIAL</Text>
                        <Text style={styles.circleTextBottom}>EDITION</Text>
                    </View>
                    <View>
                        <Progress.Pie progress={0.6} size={50} color="white" unfilledColor="red" borderColor="white" />
                        <Text style={styles.circleTextTop}>RARE</Text>
                    </View>
                    <View>
                        <Progress.Pie progress={0.2} size={50} color="white" unfilledColor="red" borderColor="white" />
                        <Text style={styles.circleTextTop}>UNUSUAL</Text>
                    </View>
                    <View>
                        <Progress.Pie progress={0.4} size={50} color="white" unfilledColor="red" borderColor="white" />
                        <Text style={styles.circleTextTop}>COMMON</Text>
                    </View>
                </View>
                <View></View>
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
        marginVertical: 27,
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

})