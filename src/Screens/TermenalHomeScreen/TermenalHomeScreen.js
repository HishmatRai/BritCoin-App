import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View, Text, ImageBackground, ScrollView, TouchableOpacity, Image } from 'react-native';
import { Ionicons, Feather, MaterialIcons, FontAwesome5, Entypo } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
export default function TermenalHomeScreen(props) {
    return (
        <View style={styles.container}>

            {/* <==========================> --- <==========================> */}
            <ImageBackground
                source={require("./../../img/backgroundImg.jpeg")}
                style={styles._image}
            >

                {/* <==========================> --- <==========================> */}
                <StatusBar style="auto" />

                {/* <==========================> --- <==========================> */}
                <ScrollView>
                    <View style={{ padding: 20 }}>

                        {/* <==========================> --- <==========================> */}
                        <View style={styles._header_main}>
                            <TouchableOpacity>
                                <Entypo name="menu" size={24} color="white" />
                            </TouchableOpacity>
                            <Image source={require('./../../img/FinalLogoCoin1.png')} style={styles.FinalLogoCoin1} />
                            <Text style={styles._user_name}>Payment Terminal</Text>
                            <TouchableOpacity>
                                <Ionicons name="settings-outline" size={24} color="white" />
                            </TouchableOpacity>

                        </View>

                        {/* <==========================> --- <==========================> */}
                        <Text style={styles._heading}>Today’s Sales</Text>
                        <Text style={styles._price}>$ 1.369</Text>

                    </View>
                    {/* <==========================> --- <==========================> */}
                    <View style={styles._card_main}>
                        <View style={styles._card}>
                            <TouchableOpacity style={styles._Card_btn}>
                                <Image source={require('./../../img/bitcoinBigIcon.png')} style={styles.bitcoinBigIcon} />
                                <Text style={styles._btc_heading}>BTC</Text>
                                <Text style={styles._Card_price}>0.003713</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles._Card_btn}>
                                <Image source={require('./../../img/Vectopaymentterminal1r.png')} style={styles.Vectopaymentterminal1r} />
                                <Text style={styles._btc_heading}>XRP</Text>
                                <Text style={styles._Card_price}>2354.43</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles._card}>
                            <TouchableOpacity style={styles._Card_btn}>
                                <Image source={require('./../../img/card3.png')} style={styles.bitcoinBigIcon} />
                                <Text style={styles._btc_heading}>ETH</Text>
                                <Text style={styles._Card_price}>0.129563</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles._Card_btn}>
                                <Image source={require('./../../img/card4.png')} style={styles.Vectopaymentterminal1r} />
                                <Text style={styles._btc_heading}>BRIT</Text>
                                <Text style={styles._Card_price}>252.573</Text>
                            </TouchableOpacity>
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

    FinalLogoCoin1: {
        width: 27,
        height: 27,
        borderRadius: 27 / 2
    },
    _header_main: {
        paddingTop: 20,
        marginTop: 20,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    _user_name: {
        color: 'white',
        marginLeft: 10,
        fontSize: 15,
        fontWeight: "bold",
        letterSpacing: 0.5
    },

    _heading: {
        color: 'white',
        marginTop: 30,
        fontSize: 16,
        letterSpacing: 0.5,
        textAlign: "center"
    },
    _price: {
        color: 'white',
        marginTop: 10,
        fontSize: 80,
        fontWeight: "bold",
        letterSpacing: 2,
        textAlign: "center"
    },
    _card_main: {
        marginTop: 20
    },
    _card: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    _Card_btn: {
        backgroundColor: "#122866",
        width: "50%",
        alignItems: "center",
        justifyContent: "center",
        borderColor: "#122866",
        borderWidth: 1,
        opacity: 0.5,
        height: 150
    },
    bitcoinBigIcon: {
        width: 30,
        height: 40
    },
    _btc_heading: {
        color: "white",
        fontSize: 16
    },
    _Card_price: {
        color: "white",
        fontSize: 16,
        fontStyle: "italic"
    },
    Vectopaymentterminal1r: {
        width: 28,
        height: 30
    }
});
