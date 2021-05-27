import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View, Text, ImageBackground, ScrollView, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
export default function Overview(props) {
    return (
        <View style={styles.container}>
            <ImageBackground
                source={require("./../../img/backgroundImg.jpeg")}
                style={styles._image}
            >
                <StatusBar style="auto" />
                <View style={{ height: 30 }}></View>
                <ScrollView>
                    <View style={{ padding: 20 }}>
                        <Text style={styles._heading}>Overview</Text>
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

                            <Image source={require('./../../img/qrscaner.png')} style={styles.qrscaner} />
                        <View style={styles._card_main}>
                            <View style={styles._Card1}>
                                <View style={styles._Card_header}>
                                    <Text style={styles._card_price}>$4500.89</Text>
                                    <View style={styles._card_second_post}>
                                        <Image source={require('./../../img/card1.png')} style={styles.card1Img} />
                                        <Text style={styles._Card_icon_text}>XRP</Text>
                                    </View>
                                </View>
                            </View>
                            <View style={styles._Card2}>
                                <View style={styles._Card_header}>
                                    <Text style={styles._card_price}>$4500.89</Text>
                                    <View style={styles._card_second_post}>
                                        <Image source={require('./../../img/card2.png')} style={styles.card1Img} />
                                        <Text style={styles._Card_icon_text}>BTC</Text>
                                    </View>
                                </View>
                            </View>
                            <View style={styles._Card3}>
                                <View style={styles._Card_header}>
                                    <Text style={styles._card_price}>$4500.89</Text>
                                    <View style={styles._card_second_post}>
                                        <Image source={require('./../../img/card3.png')} style={styles.card1Img} />
                                        <Text style={styles._Card_icon_text}>ETH</Text>
                                    </View>
                                </View>
                            </View>
                            <View style={styles._Card5}>
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
                        </View>
                    </View>
                </ScrollView>
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
        color: 'white',
        marginTop: 10,
        fontSize: 20,
        fontWeight: "bold",
        letterSpacing: 1,
        textAlign: "center"
    },
    _card_main: {
        marginTop: 50
    },
    _Card1: {
        backgroundColor: "#242d33",
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 20,
        height: 200
    },
    _Card_header: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    card1Img: {
        width: 30,
        height: 40,
        marginRight: 10
    },
    _card_second_post: {
        flexDirection: "row",
        alignItems: "center",
    },
    _card_price: {
        color: "white",
        fontWeight: "bold",
        letterSpacing: 1,
        fontSize: 18
    },
    _Card_icon_text: {
        color: "white",
        fontSize: 18
    },
    _Card1: {
        backgroundColor: "#242d33",
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 20,
        height: 190,
        borderWidth: 1,
        borderColor: 'white'
    },
    _Card2: {
        backgroundColor: "#554d42",
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 20,
        height: 190,
        marginTop: -135,
        borderWidth: 1,
        borderColor: 'white'
    },
    _Card3: {
        backgroundColor: "#353535",
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 20,
        height: 190,
        marginTop: -135,
        borderWidth: 1,
        borderColor: 'white'
    },
    _Card4: {
        backgroundColor: "#212a33",
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 20,
        height: 190,
        marginTop: 35,
        borderWidth: 1,
        borderColor: 'white'
    },
    _Card5: {
        backgroundColor: "#212a33",
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 20,
        height: 190,
        marginTop: -135,
        borderWidth: 1,
        borderColor: 'white'
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
    qrscaner:{
        width:280,
        height:280,
        alignSelf:"center",
        marginTop:30
    }
});
