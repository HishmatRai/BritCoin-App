import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, View, Text, ImageBackground, Image, TouchableOpacity, ScrollView, Modal, TouchableHighlight } from 'react-native';
import { Ionicons, Feather } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { BlurView } from 'expo-blur';
export default function Swap(props) {
    const [modalVisible, setModalVisible] = useState(false);
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
                    <Text style={styles._heading}>Swap</Text>

                    {/* <==========================> --- <==========================> */}
                    <View style={styles._Card7}>
                        <TouchableOpacity>
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
                    <Text style={styles._card_Des}>1 BTC = 452,4756 XRP</Text>
                    <Ionicons name="swap-vertical-outline" size={34} color="white" style={{ alignSelf: "center", marginHorizontal: 10 }} />
                    <View style={styles._Card7}>
                        <TouchableOpacity>
                            <LinearGradient
                                end={[1.0, 0.5]}
                                start={[0.0, 0.5]}
                                locations={[0.0, 1.0]}
                                colors={['#4E4E4E', '#4B4B4B']}
                                style={{ borderRadius: 10, paddingVertical: 20, paddingHorizontal: 20, height: 180 }}>
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

                    {/* <==========================> --- <==========================> */}
                    <Text style={styles._card_Des}>1 BTC = 452,4756 XRP</Text>
                    <TouchableOpacity style={styles._swap_btn} onPress={() => {
                        setModalVisible(true);
                    }}>
                        <Text style={styles._swap_btn_text}>Swap</Text>
                    </TouchableOpacity>
                    <View style={{ marginBottom: 50 }}></View>
                </ScrollView>
                {/* ===============> Tab Bar <============= */}
                <View style={styles._tab_bar_main}>
                    <View style={styles._tabs_show_main}>
                        <TouchableOpacity style={styles._tabs} onPress={() => props.navigation.navigate("Swap")}>
                            <Ionicons name="swap-horizontal" size={24} color="white" />
                            <Text style={styles.active}></Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles._tabs} onPress={() => props.navigation.navigate("Home")}>
                            <Feather name="home" size={34} color="#667d83" />
                            <Text style={styles._tabs_text}>Home</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles._tabs} onPress={() => props.navigation.navigate("SelectACard")}>
                            <Feather name="credit-card" size={24} color="#667d83" />
                            <Text style={styles._tabs_text}>Transactions</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles._line}></View>
                </View>

                {/* <==========================> --- <==========================> */}

                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                        Alert.alert('Modal has been closed.');
                    }}>
                    <BlurView intensity={100} style={[StyleSheet.absoluteFill, styles.nonBlurredContent]}>
                        <View style={styles.centeredView} onPress={() => {
                            setModalVisible(!modalVisible);
                        }}>
                            <View style={styles.modalView}>
                                <TouchableHighlight
                                    onPress={() => {
                                        setModalVisible(!modalVisible);
                                    }}>
                                    <Ionicons name="checkmark-sharp" size={54} color="white" />
                                </TouchableHighlight>
                                <Text style={styles.modalText}>Swap Complete</Text>
                            </View>
                        </View>
                    </BlurView>
                </Modal>
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
    _card_Des: {
        backgroundColor: "#092763",
        width: "50%",
        alignSelf: "center",
        marginTop: 20,
        color: "white",
        textAlign: "center",
        borderRadius: 5
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
    _swap_btn: {
        backgroundColor: "#092763",
        width: "90%",
        alignSelf: "center",
        marginTop: 30,
        borderRadius: 10
    },
    _swap_btn_text: {
        color: "white",
        textAlign: "center",
        fontWeight: "bold",
        letterSpacing: 1,
        fontSize: 20,
        paddingVertical: 10
    },
    active: {
        backgroundColor: "#0D89B7",
        width: 5,
        height: 5,
        borderRadius: 5 / 2,
        marginTop: 5
    },
    _Card7: {
        height: 190,
        marginTop: 15,
        width: "90%",
        alignSelf: "center"
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
    xrpSmallIcon: {
        width: 20,
        height: 20,
        marginRight: 10
    },
    xrpBigIcon: {
        width: 93,
        height: 82
    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
    },
    modalView: {
        width: 200,
        height: 200,
        backgroundColor: '#072450',
        borderRadius: 200 / 2,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    modalText: {
        // marginBottom: 15,
        textAlign: 'center',
        color: "white",
        fontSize: 25
    },
});
