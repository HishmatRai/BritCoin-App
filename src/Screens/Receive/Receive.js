import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View, Text, ImageBackground, Image, TouchableOpacity, ScrollView } from 'react-native';
export default function Receive(props) {
    return (
        <View style={styles.container}>
            <ImageBackground
                source={require("./../../img/backgroundImg.jpeg")}
                style={styles._image}
            >
                <StatusBar style="auto" />
                <View style={{ height: 30 }}></View>
                <ScrollView>
                    <Text style={styles._heading}>Public Ethereum Wallet Address</Text>
                    <Image source={require('./../../img/qrcode.png')} style={styles.qrcode} />
                    <Text style={styles.sub_Heading}>0xde38f2f9w81j4326426Ddr4520fGjf7</Text>
                    <TouchableOpacity style={styles._Register_btn}>
                        <Text style={styles._Register_btn_txt}>Copy wallet address</Text>
                    </TouchableOpacity>
                </ScrollView>
                <View style={styles._line}></View>
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    _image: {
        flex: 1,
        resizeMode: "cover",
        height: "100%",
    },
    qrcode: {
        width: 280,
        height: 280,
        alignSelf: "center",
        marginTop: 20
    },
    _heading: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center",
        fontSize: 20,
        letterSpacing: 1,
        marginTop: 50
    },
    sub_Heading: {
        color: "white",
        textAlign: "center",
        fontSize: 20,
        letterSpacing: 1,
        marginTop: 20,
        fontWeight: "bold",
        marginHorizontal: 30
    },
    _Register_btn: {
        backgroundColor: "#092763",
        width: "80%",
        alignItems: "center",
        alignSelf: "center",
        borderRadius: 10,
        marginTop: 50
    },
    _Register_btn_txt: {
        color: "white",
        fontWeight: "bold",
        fontSize: 20,
        letterSpacing: 1,
        paddingTop: 10,
        paddingBottom: 10
    },

    _line: {
        backgroundColor: "white",
        width: "50%",
        height: 10,
        position: "absolute",
        bottom: 20,
        alignSelf: "center",
        borderRadius: 20
    }
});
