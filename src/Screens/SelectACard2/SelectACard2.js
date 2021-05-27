import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View, Text, ImageBackground, Image, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
export default function SelectACardTwo(props) {
    return (
        <View style={styles.container}>
            <ImageBackground
                source={require("./../../img/backgroundImg.jpeg")}
                style={styles._image}
            >
                <StatusBar style="auto" />
                <View style={{ height: 30 }}></View>
                <ScrollView>
                    <Text style={styles._heading}>Select a Card</Text>
                    <View style={styles._Card4}>
                        <View style={styles._Card_header}>
                            <Text style={styles._card_price}>$4500.89</Text>
                            <View style={styles._card_second_post}>
                                <Image source={require('./../../img/card2.png')} style={styles.card1Img} />
                                <Text style={styles._Card_icon_text}>BTC</Text>
                            </View>
                        </View>
                        <View style={styles._sim_main}>
                            <Image source={require('./../../img/sim.png')} style={styles.sim} />
                            <Image source={require('./../../img/card2.png')} style={styles.card4Img} />
                            <TouchableOpacity>
                                <Ionicons name="ios-add-circle-outline" size={50} color="white" />
                            </TouchableOpacity>
                        </View>
                        <View style={styles._Card_text}>
                            <Text style={styles._ibn_num}>**** **** *** </Text>
                            <Text style={styles._ibn_num}>ad1707ao</Text>
                        </View>
                    </View>
                    <TouchableOpacity style={styles._Register_btn}>
                        <Text style={styles._Register_btn_txt}>Click to add amount</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles._Register_btn}>
                        <Text style={styles._Register_btn_txt}>Price equivalent</Text>
                    </TouchableOpacity>
                    <View style={styles._buttons_main}>
                        <TouchableOpacity style={styles._scan_btn} onPress={() => props.navigation.navigate("Receive")}>
                            <Text style={styles._scan_btn_text}>Scan</Text>
                        </TouchableOpacity>
                        <Text style={styles._or}>or</Text>
                        <TouchableOpacity  style={styles._scan_btn}>
                            <Text style={styles._scan_btn_text}>Address</Text>
                        </TouchableOpacity>
                    </View>
                        <TouchableOpacity style={styles._Register_btn2}>
                        <Text style={styles._Register_btn_txt2}>Send</Text>
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
    _heading: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center",
        fontSize: 20,
        letterSpacing: 1,
        marginTop: 50
    },
    sub_Heading: {
        color: "black",
        textAlign: "center",
        fontSize: 15,
        letterSpacing: 1,
        marginTop: 20
    },
    _Register_btn: {
        backgroundColor: "#092763",
        width: "90%",
        alignSelf: "center",
        borderRadius: 10,
        marginTop: 20,
        paddingHorizontal: 10
    },
    _Register_btn_txt: {
        color: "white",
        fontSize: 15,
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
    },
    _Card4: {
        backgroundColor: "#212a33",
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 20,
        height: 190,
        marginTop: 15,
        borderWidth: 1,
        borderColor: 'white',
        width: "90%",
        alignSelf: "center"
    },
    _Card_header: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    _card_price: {
        color: "white",
        fontWeight: "bold",
        letterSpacing: 1,
        fontSize: 18
    },
    _card_second_post: {
        flexDirection: "row",
        alignItems: "center",
    },
    card1Img: {
        width: 30,
        height: 40,
        marginRight: 10
    },
    _Card_icon_text: {
        color: "white",
        fontSize: 18
    },
    _sim_main: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    sim: {
        width: 71,
        height: 50
    },
    card4Img: {
        width: 70,
        height: 100
    },
    _Card_text: {
        flexDirection: "row",
        alignItems: "center"
    },
    _ibn_num: {
        color: "white"
    },
    _buttons_main: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        width: "90%",
        alignSelf: "center",
        marginTop:20
    },
    _scan_btn:{
        borderColor:"#092763",
        borderWidth:1,
        borderRadius:10,
        width:"30%",
        padding:10,
        alignSelf:"center",
        alignItems:"center",
        justifyContent:"center"
    },
    _scan_btn_text:{
        color:"white",
        fontWeight:"bold",
        letterSpacing:1,
        fontSize:18
    },
    _or:{
        color:"white",
        fontWeight:"bold",
        letterSpacing:1,
        fontSize:18
    },
    _Register_btn2: {
        backgroundColor: "#092763",
        width: "90%",
        alignSelf: "center",
        borderRadius: 10,
        marginTop: 20,
        paddingHorizontal: 10
    },
    _Register_btn_txt2: {
        color: "white",
        fontSize: 15,
        letterSpacing: 1,
        paddingTop: 10,
        paddingBottom: 10,
        textAlign:"center",
        fontWeight:"bold"
    },
});
