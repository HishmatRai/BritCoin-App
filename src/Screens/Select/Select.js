import { Video } from 'expo-av';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View, Text, ImageBackground, Image, TouchableOpacity } from 'react-native';
export default function Select(props) {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("./../../img/backgroundImg.jpeg")}
        style={styles._image}
      >
        <StatusBar style="auto" />
        <Image source={require('./../../img/loginLogo.png')} style={styles._logo} />
        <Text style={styles._heading}>PRIVATE & SECURE</Text>
        <Text style={styles.sub_Heading}>Private keys never leave your device</Text>
        <TouchableOpacity style={styles._Register_btn}>
          <Text style={styles._Register_btn_txt}>Register</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles._login_btn}>
          <Text style={styles._Register_btn_txt}>Log in</Text>
        </TouchableOpacity>
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
  _logo: {
    width: 150,
    height: 150,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    marginTop: 100
  },
  _heading: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 20,
    letterSpacing: 1,
    marginTop: 20
  },
  sub_Heading: {
    color: "white",
    textAlign: "center",
    fontSize: 15,
    letterSpacing: 1,
    marginTop: 20
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
  _login_btn:{
    width: "80%",
    alignItems: "center",
    alignSelf: "center",
    borderRadius: 10,
    marginTop: 20,
    borderWidth:1,
    borderColor:"white"
  },
  _line:{
    backgroundColor:"white",
    width:"50%",
    height:10,
    position:"absolute",
    bottom:20,
    alignSelf:"center",
    borderRadius:20
  }
});
