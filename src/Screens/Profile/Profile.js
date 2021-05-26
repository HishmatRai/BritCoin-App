import { StatusBar } from 'expo-status-bar';
import { MaterialIcons, AntDesign, Ionicons,Feather,FontAwesome5 } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, View, Text, ImageBackground, Image, TouchableOpacity, ScrollView } from 'react-native';
export default function Profile(props) {
    return (
        <View style={styles.container}>
            <ImageBackground
                source={require("./../../img/backgroundImg.jpeg")}
                style={styles._image}
            >
                <StatusBar style="auto" />
                <Image source={require('./../../img/profile.png')} style={styles.profile} />
                <Text style={styles._heading}>PETER SMITH</Text>
                <ScrollView>
                    <View style={{ padding: 20 }}>
                        <Text style={styles._title}>Personal Details</Text>
                        <TouchableOpacity style={styles._seating_title_main}>
                            <View style={styles._icon_main}>
                                <MaterialIcons name="privacy-tip" size={24} color="white" />
                            </View>
                            <Text style={styles._setting_title}>Privacy & Security</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles._seating_title_main}>
                            <View style={styles._icon_main}>
                                <AntDesign name="filetext1" size={24} color="white" />
                            </View>
                            <Text style={styles._setting_title}>Legal Documents</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles._seating_title_main}>
                            <View style={styles._icon_main}>
                                <Ionicons name="help-circle-outline" size={24} color="white" />
                            </View>
                            <Text style={styles._setting_title}>Help Centre</Text>
                        </TouchableOpacity>
                        <Text style={styles._title}>Join our Community</Text>
                        <TouchableOpacity style={styles._seating_title_main}>
                            <View style={styles._icon_main}>
                            <Feather name="twitter" size={24} color="white" />
                            </View>
                            <Text style={styles._setting_title}>Twitter</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles._seating_title_main}>
                            <View style={styles._icon_main}>
                            <FontAwesome5 name="telegram-plane" size={24} color="white" />
                            </View>
                            <Text style={styles._setting_title}>Telegram</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles._seating_title_main}>
                            <View style={styles._icon_main}>
                            <AntDesign name="instagram" size={24} color="white" />
                            </View>
                            <Text style={styles._setting_title}>Instagram</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles._seating_title_main}>
                            <View style={styles._icon_main}>
                            <Ionicons name="logo-reddit" size={24} color="white" />
                            </View>
                            <Text style={styles._setting_title}>Reddit</Text>
                        </TouchableOpacity>
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
    profile: {
        width: 120,
        height: 120,
        alignItems: "center",
        justifyContent: "center",
        alignSelf: "center",
        marginTop: 100,
        borderRadius: 120 / 2
    },
    _heading: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center",
        fontSize: 25,
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
    _title: {
        color: "white",
        fontWeight: "bold",
        fontSize: 20,
        letterSpacing: 1,
        marginTop: 20
    },
    _seating_title_main: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 20
    },
    _icon_main: {
        backgroundColor: "#102564",
        width: 40,
        height: 40,
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center"
    },
    _setting_title: {
        color: "white",
        fontWeight: "bold",
        paddingLeft: 10,
        fontSize: 15,
        letterSpacing: 0.5
    }
});
