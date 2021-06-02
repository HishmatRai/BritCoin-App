import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View, Text, ImageBackground, ScrollView, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
export default function Overview(props) {
    return (
        <View style={styles.container}>

            {/* <==========================> --- <==========================> */}
            <ImageBackground
                source={require("./../../img/backgroundImg.jpeg")}
                style={styles._image}
            >

                {/* <==========================> --- <==========================> */}
                <StatusBar style="auto" />
                <View style={{ height: 30 }}></View>

                {/* <==========================> --- <==========================> */}
                <ScrollView>
                    <View style={{ padding: 20 }}>
                        <Text style={styles._heading}>Overview</Text>
                        {/* <==========================> --- <==========================> */}
                        <TouchableOpacity>
                            <LinearGradient
                                // Button Linear Gradient
                                end={[1.0, 0.5]}
                                start={[0.0, 0.5]}
                                locations={[0.0, 1.0]}
                                colors={['#D99400', '#DBB96F']}
                                style={{ borderRadius: 10, borderWidth: 2, borderColor: 'black', paddingVertical: 20, paddingHorizontal: 20, height: 180 }}>
                                <View style={styles._Card_header}>
                                    <Text style={styles._card_price}>$4500.89</Text>
                                    <View style={styles._card_second_post}>
                                        <Image source={require('./../../img/cardiSmallIcon.png')} style={styles.cardiSmallIcon} />
                                        <Text style={styles._Card_icon_text}>BTC</Text>
                                    </View>
                                </View>
                                <View style={styles._sim_main}>
                                    <Image source={require('./../../img/sim.png')} style={styles.sim} />
                                    <Image source={require('./../../img/bitcoinBigIcon.png')} style={styles.bitcoinBigIcon} />
                                    <TouchableOpacity>
                                        <Ionicons name="ios-add-circle-outline" size={50} color="white" />
                                    </TouchableOpacity>
                                </View>
                                <View style={styles._Card_text}>
                                    <Text style={styles._ibn_num}>**** **** *** </Text>
                                    <Text style={styles._ibn_num}>ad1707ao</Text>
                                </View>
                            </LinearGradient>
                        </TouchableOpacity>

                        {/* <==========================> --- <==========================> */}
                        <TouchableOpacity style={styles._face_id_btn}>
                            <Image source={require('./../../img/qrscaner.png')} style={styles.qrscaner} />
                        </TouchableOpacity>
                        <Text style={styles._face_id_heading}>Face  ID</Text>
                        <View style={styles._card_main}>

                            {/* <==========================> --- <==========================> */}
                            <View>
                                <TouchableOpacity>
                                    <LinearGradient
                                        end={[1.0, 0.5]}
                                        start={[0.0, 0.5]}
                                        locations={[0.0, 1.0]}
                                        colors={['#4E4E4E', '#4B4B4B']}
                                        style={{ borderRadius: 10, borderWidth: 2, borderColor: 'white', paddingVertical: 20, paddingHorizontal: 20, height: 180 }}>
                                        <View style={styles._Card_header}>
                                            <Text style={styles._card_price}>$4500.89</Text>
                                            <View style={styles._card_second_post}>
                                                <Image source={require('./../../img/xrpSmallIcon.png')} style={styles.xrpSmallIcon} />
                                                <Text style={styles._Card_icon_text}>XRP</Text>
                                            </View>
                                        </View>
                                        <View style={styles._sim_main}>
                                            <Image source={require('./../../img/sim.png')} style={styles.sim} />
                                            <Image source={require('./../../img/xrpSmallIcon.png')} style={styles.xrpBigIcon} />
                                            <TouchableOpacity>
                                                <Ionicons name="ios-add-circle-outline" size={50} color="white" />
                                            </TouchableOpacity>
                                        </View>
                                        <View style={styles._Card_text}>
                                            <Text style={styles._ibn_num}>**** **** *** </Text>
                                            <Text style={styles._ibn_num}>ad1707ao</Text>
                                        </View>
                                    </LinearGradient>
                                </TouchableOpacity>
                            </View>

                            {/* <==========================> --- <==========================> */}
                            <View style={styles._Card2}>
                                <TouchableOpacity>
                                    <LinearGradient
                                        end={[1.0, 0.5]}
                                        start={[0.0, 0.5]}
                                        locations={[0.0, 1.0]}
                                        colors={['#3EC4EE', '#FF9FB6']}
                                        style={{ borderRadius: 10, borderWidth: 2, borderColor: 'white', paddingVertical: 20, paddingHorizontal: 20, height: 180 }}>
                                        <View style={styles._Card_header}>
                                            <Text style={styles._card_price}>$4500.89</Text>
                                            <View style={styles._card_second_post}>
                                                <Image source={require('./../../img/EthSmallIcon.png')} style={styles.EthSmallIcon} />
                                                <Text style={styles._Card_icon_text}>ETH</Text>
                                            </View>
                                        </View>
                                        <View style={styles._sim_main}>
                                            <Image source={require('./../../img/sim.png')} style={styles.sim} />
                                            <Image source={require('./../../img/card3.png')} style={styles.bitcoinBigIcon} />
                                            <TouchableOpacity>
                                                <Ionicons name="ios-add-circle-outline" size={50} color="white" />
                                            </TouchableOpacity>
                                        </View>
                                        <View style={styles._Card_text}>
                                            <Text style={styles._ibn_num}>**** **** *** </Text>
                                            <Text style={styles._ibn_num}>ad1707ao</Text>
                                        </View>
                                    </LinearGradient>
                                </TouchableOpacity>
                            </View>

                            {/* <==========================> --- <==========================> */}
                            <View style={styles._Card2}>
                                <TouchableOpacity>
                                    <LinearGradient
                                        end={[1.0, 0.5]}
                                        start={[0.0, 0.5]}
                                        locations={[0.0, 1.0]}
                                        colors={['#1B63CE', '#1B63CE']}
                                        style={{ borderRadius: 10, borderWidth: 2, borderColor: 'white', paddingVertical: 20, paddingHorizontal: 20, height: 180 }}>
                                        <View style={styles._Card_header}>
                                            <Text style={styles._card_price}>$4500.89</Text>
                                            <View style={styles._card_second_post}>
                                                <Image source={require('./../../img/poundSmallLogo.png')} style={styles.poundSmallLogo} />
                                                <Text style={styles._Card_icon_text}>BRIT</Text>
                                            </View>
                                        </View>
                                        <View style={styles._sim_main}>
                                            <Image source={require('./../../img/sim.png')} style={styles.sim} />
                                            <Image source={require('./../../img/card4.png')} style={styles.poundBigIcon} />
                                            <TouchableOpacity>
                                                <Ionicons name="ios-add-circle-outline" size={50} color="white" />
                                            </TouchableOpacity>
                                        </View>
                                        <View style={styles._Card_text}>
                                            <Text style={styles._ibn_num}>**** **** *** </Text>
                                            <Text style={styles._ibn_num}>ad1707ao</Text>
                                        </View>
                                    </LinearGradient>
                                </TouchableOpacity>
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
        textAlign: "center",
        marginBottom: 30
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

    _sim_main: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    sim: {
        width: 43,
        height: 34
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
    qrscaner: {
        width: 120,
        height: 120,
        alignSelf: "center",
        position: "relative",
        zIndex: 1
    },
    _face_id_btn: {
        backgroundColor: "#C5C5C5",
        width: 200,
        height: 200,
        alignSelf: "center",
        marginTop: 50,
        opacity: .5,
        position: "relative",
        zIndex: -1,
        alignItems: "center",
        justifyContent: "center"
    },
    _face_id_heading: {
        color: "white",
        textAlign: "center",
        fontSize: 20,
        fontWeight: "bold"
    },
    xrpSmallIcon: {
        width: 20,
        height: 20,
        marginRight: 10
    },
    xrpBigIcon: {
        width: 93,
        height: 82
    },
    EthSmallIcon: {
        width: 14,
        height: 23,
        marginRight: 10
    },
    bitcoinBigIcon: {
        width: 70,
        height: 86
    },
    _Card2: {
        marginTop: -130,
    },
    poundSmallLogo: {
        width: 39,
        height: 39,

    },
    poundBigIcon: {
        width: 30,
        height: 70
    },
});
