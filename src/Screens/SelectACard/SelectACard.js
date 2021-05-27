import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View, Text, ImageBackground, Image, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
export default function SelectACard(props) {
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
                                <Image source={require('./../../img/card1.png')} style={styles.card1Img} />
                                <Text style={styles._Card_icon_text}>XRP</Text>
                            </View>
                        </View>
                        <View style={styles._sim_main}>
                            <Image source={require('./../../img/sim.png')} style={styles.sim} />
                            <Image source={require('./../../img/card1.png')} style={styles.card4Img} />
                            <TouchableOpacity>
                                <Ionicons name="ios-add-circle-outline" size={50} color="white" />
                            </TouchableOpacity>
                        </View>
                        <View style={styles._Card_text}>
                            <Text style={styles._ibn_num}>**** **** *** </Text>
                            <Text style={styles._ibn_num}>ad1707ao</Text>
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
                    <View style={styles._Card6}>
                        <View style={styles._Card_header}>
                            <Text style={styles._card_price}>$4500.89</Text>
                            <View style={styles._card_second_post}>
                                <Image source={require('./../../img/card3.png')} style={styles.card1Img} />
                                <Text style={styles._Card_icon_text}>ETH</Text>
                            </View>
                        </View>
                        <View style={styles._sim_main}>
                            <Image source={require('./../../img/sim.png')} style={styles.sim} />
                            <Image source={require('./../../img/card3.png')} style={styles.card4Img} />
                            <TouchableOpacity>
                                <Ionicons name="ios-add-circle-outline" size={50} color="white" />
                            </TouchableOpacity>
                        </View>
                        <View style={styles._Card_text}>
                            <Text style={styles._ibn_num}>**** **** *** </Text>
                            <Text style={styles._ibn_num}>ad1707ao</Text>
                        </View>
                    </View>
                    <View style={styles._Card7}>
                        <View style={styles._Card_header}>
                            <Text style={styles._card_price}>$4500.89</Text>
                            <View style={styles._card_second_post}>
                                <Image source={require('./../../img/card5.png')} style={styles.card5Img} />
                                <Text style={styles._Card_icon_text}>BRIT</Text>
                            </View>
                        </View>
                        <View style={styles._sim_main}>
                            <Image source={require('./../../img/sim.png')} style={styles.sim} />
                            <Image source={require('./../../img/card5.png')} style={styles.card41Img} />
                            <TouchableOpacity>
                                <Ionicons name="ios-add-circle-outline" size={50} color="white" />
                            </TouchableOpacity>
                        </View>
                        <View style={styles._Card_text}>
                            <Text style={styles._ibn_num}>**** **** *** </Text>
                            <Text style={styles._ibn_num}>ad1707ao</Text>
                        </View>
                    </View>
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
    _Card5: {
        backgroundColor: "#5d5347",
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
    _Card6: {
        backgroundColor: "#2f2f2f",
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
    _Card7: {
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

    card5Img: {
        width: 30,
        height: 30,
        marginRight: 10
    },
    card41Img: {
        width: 100,
        height: 100
    },


});
