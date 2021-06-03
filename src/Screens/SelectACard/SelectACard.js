import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View, Text, ImageBackground, Image, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons, Feather } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
export default function SelectACard(props) {
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
                    <Text style={styles._heading}>Select a Card</Text>

                    {/* <==========================> --- <==========================> */}
                    <View style={styles._Card7}>
                        <TouchableOpacity onPress={() => props.navigation.navigate("Swap")}>
                            <LinearGradient
                                // Button Linear Gradient
                                end={[1.0, 0.5]}
                                start={[0.0, 0.5]}
                                locations={[0.0, 1.0]}
                                colors={['#A18D33', '#2F2600']}
                                style={{ borderRadius: 10, paddingVertical: 20, paddingHorizontal: 20, height: 180 }}>
                                <View style={styles._Card_header}>
                                    <Text style={styles._card_price}>$4500.89</Text>
                                    <View style={styles._card_second_post}>
                                        <Image source={require('./../../img/DodgeSmallIcon.png')} style={styles.DodgeSmallIcon} />
                                        <Text style={styles._Card_icon_text}>DOGE</Text>
                                    </View>
                                </View>
                                <View style={styles._sim_main}>
                                    <Image source={require('./../../img/sim.png')} style={styles.sim} />
                                    <Image source={require('./../../img/DodgeBigIcon.png')} style={styles.DodgeBigIcon} />
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
                    <View style={styles._Card7}>
                        <TouchableOpacity onPress={() => props.navigation.navigate("Swap")}>
                            <LinearGradient
                                // Button Linear Gradient
                                end={[1.0, 0.5]}
                                start={[0.0, 0.5]}
                                locations={[0.0, 1.0]}
                                colors={['#D99400', '#DBB96F']}
                                style={{ borderRadius: 10, paddingVertical: 20, paddingHorizontal: 20, height: 180 }}>
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
                    </View>

                    {/* <==========================> --- <==========================> */}
                    <View style={styles._Card7}>
                        <TouchableOpacity onPress={() => props.navigation.navigate("Swap")}>
                            <LinearGradient
                                end={[1.0, 0.5]}
                                start={[0.0, 0.5]}
                                locations={[0.0, 1.0]}
                                colors={['#3EC4EE', '#FF9FB6']}
                                style={{ borderRadius: 10, paddingVertical: 20, paddingHorizontal: 20, height: 180 }}>
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
                    <View style={styles._Card7}>
                        <TouchableOpacity onPress={() => props.navigation.navigate("Swap")}>
                            <LinearGradient
                                end={[1.0, 0.5]}
                                start={[0.0, 0.5]}
                                locations={[0.0, 1.0]}
                                colors={['#1B63CE', '#1B63CE']}
                                style={{ borderRadius: 10, paddingVertical: 20, paddingHorizontal: 20, height: 180 }}>
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
                </ScrollView>
                {/* ===============> Tab Bar <============= */}
                <View style={styles._tab_bar_main}>
                    <View style={styles._tabs_show_main}>
                        <TouchableOpacity style={styles._tabs} onPress={() => props.navigation.navigate("Swap")}>
                            <Ionicons name="swap-horizontal" size={24} color="#667d83" />
                            <Text style={styles._tabs_text}>Swap</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles._tabs} onPress={() => props.navigation.navigate("Home")}>
                            <Feather name="home" size={34} color="#667d83" />
                            <Text style={styles._tabs_text}>Home</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles._tabs} onPress={() => props.navigation.navigate("SelectACard")}>
                            <Feather name="credit-card" size={24} color="white" />
                            <Text style={styles.active}></Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles._line}></View>
                </View>
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
    _Card7: {
        height: 190,
        marginTop: 15,
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
        fontSize: 18,
        fontStyle: "italic"
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

    card5Img: {
        width: 30,
        height: 30,
        marginRight: 10
    },
    card41Img: {
        width: 100,
        height: 100
    },
    _tab_bar_main: {
        backgroundColor: "#042b64"
    },
    _tabs_show_main: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        width: "90%",
        alignSelf: "center",
        paddingVertical: 10
    },
    _tabs_text: {
        color: "#667d83"
    },
    _tabs: {
        alignItems: "center",
        justifyContent: "center",
        width: "30%"
    },
    _line: {
        backgroundColor: "white",
        width: "50%",
        height: 5,
        alignSelf: "center",
        borderRadius: 20,
        marginBottom: 10
    },
    active: {
        backgroundColor: "#0D89B7",
        width: 5,
        height: 5,
        borderRadius: 5 / 2,
        marginTop: 5
    },
    cardiSmallIcon: {
        width: 18,
        height: 23,
        marginRight: 10
    },
    bitcoinBigIcon: {
        width: 70,
        height: 86
    },
    DodgeSmallIcon: {
        width: 19,
        height: 19,
        marginRight: 10
    },
    DodgeBigIcon: {
        width: 100,
        height: 100
    },
    poundSmallLogo: {
        width: 39,
        height: 39,
    },
    poundBigIcon: {
        width: 40,
        height: 90
    },
});
