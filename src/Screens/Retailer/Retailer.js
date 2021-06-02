import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View, Text, ImageBackground, Image, TouchableOpacity } from 'react-native';
export default function Retailer(props) {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("./../../img/backgroundImg.jpeg")}
        style={styles._image}
      >
        <StatusBar style="auto" />
        <Text style={styles._heading}>ARE YOU A</Text>
        <TouchableOpacity style={styles._Register_btn} onPress={() => props.navigation.navigate("Home")}>
          <Text style={styles._Register_btn_txt}>Retailer</Text>
          <Image source={require('./../../img/shop.png')} style={styles._shop} />
        </TouchableOpacity>
        <Text style={styles._heading2}>OR</Text>
        <TouchableOpacity style={styles._Register_btn} onPress={() => props.navigation.navigate("Home")}>
          <Text style={styles._Register_btn_txt}>Customer</Text>
          <Image source={require('./../../img/Customer.png')} style={styles.Customer} />
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

  _heading: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 25,
    letterSpacing: 1,
    marginTop: 150
  },
  _heading2: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 25,
    letterSpacing: 1,
    marginTop: 50
  },
  _Register_btn: {
    backgroundColor: "#00aad1",
    width: "80%",
    alignItems: "center",
    alignSelf: "center",
    borderRadius: 10,
    marginTop: 50,
    flexDirection:"row",
    padding:5,
    alignItems:"center",
    justifyContent:"space-around"
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
  },
  _shop:{
      width:30,
      height:30
  },
  Customer:{
      height:50,
      width:50
  }
});
