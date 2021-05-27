import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View, Text, ImageBackground, ScrollView, TouchableOpacity, Image } from 'react-native';
import { Ionicons, Feather, MaterialIcons, FontAwesome5 } from '@expo/vector-icons';
export default function Home(props) {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("./../../img/backgroundImg.jpeg")}
        style={styles._image}
      >
        <StatusBar style="auto" />
        <ScrollView>
          <View style={{ padding: 20 }}>
            <View style={styles._header_main}>
              <View style={styles._profile_main}>
                <TouchableOpacity onPress={() => props.navigation.navigate("Profile")}>
                <Image source={require('./../../img/profile.png')} style={styles.profile} />
                </TouchableOpacity>
                <Text style={styles._user_name}>My Account </Text>
              </View>
              <View style={styles._notification_main}>
                <Ionicons name="swap-horizontal" size={24} color="white" />
                <Text style={styles._currency}>GBP/USD</Text>
                <TouchableOpacity>
                  <Ionicons name="notifications-outline" size={24} color="white" />
                </TouchableOpacity>
              </View>
            </View>
            <Text style={styles._heading}>Total balance</Text>
            <Text style={styles._price}>$ 1.369</Text>
            <View style={styles._buttons_main}>
              <TouchableOpacity style={styles._send_btn}>
                <Feather name="send" size={20} color="white" />
                <Text style={styles._send_btn_txt}>Send</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles._receive_btn}>
                <MaterialIcons name="call-received" size={20} color="white" />
                <Text style={styles._receive_btn_txt}>Receive</Text>
              </TouchableOpacity>
            </View>

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

              <View style={styles._Card4}>
                <View style={styles._Card_header}>
                  <Text style={styles._card_price}>$4500.89</Text>
                  <View style={styles._card_second_post}>
                    <Image source={require('./../../img/card4.png')} style={styles.card1Img} />
                    <Text style={styles._Card_icon_text}>ETH</Text>
                  </View>
                </View>
                <View style={styles._sim_main}>
                  <Image source={require('./../../img/sim.png')} style={styles.sim} />
                  <Image source={require('./../../img/card4.png')} style={styles.card4Img} />
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

            <View style={styles.loginLogo_main}>
            <Image source={require('./../../img/loginLogo.png')} style={styles.loginLogo} />
            <Text style={styles.loginLogo_heading}>BRITCOIN WALLF</Text>
            </View>
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
              <Feather name="home" size={34} color="white" />
            </TouchableOpacity>
            <TouchableOpacity style={styles._tabs}>
              <Feather name="credit-card" size={24} color="#667d83" />
              <Text style={styles._tabs_text}>Transactions</Text>
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
    paddingTop:30

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
  profile: {
    width: 40,
    height: 40,
    borderRadius: 40 / 2
  },
  _header_main: {
    paddingTop: 20,
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  _profile_main: {
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
  _notification_main: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  _currency: {
    color: 'white',
    fontSize: 15,
    fontWeight: "bold",
    letterSpacing: 0.5,
    paddingLeft: 5,
    paddingRight: 5
  },
  _heading: {
    color: 'white',
    marginTop: 10,
    fontSize: 18,
    fontWeight: "bold",
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
  _buttons_main: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "80%",
    alignSelf: "center",
    marginTop: 30
  },
  _send_btn: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#234a6b",
    width: "40%",
    borderRadius: 5,
    paddingVertical: 5
  },
  _send_btn_txt: {
    color: "white",
    fontWeight: "bold",
    paddingLeft: 10
  },
  _receive_btn: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#315922",
    width: "40%",
    borderRadius: 5,
    paddingVertical: 5
  },
  _receive_btn_txt: {
    color: "white",
    fontWeight: "bold",
    paddingLeft: 10
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
    marginTop: -135,
    borderWidth: 1,
    borderColor: 'white'
  },
  _sim_main:{
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"space-between"
  },
  sim:{
    width:71,
    height:50
  },
  card4Img:{
    width:70,
    height:100
  },
  _Card_text:{
    flexDirection:"row",
    alignItems:"center"
  },
  _ibn_num:{
color:"white"
  },
  loginLogo:{
    width:50,
    height:50
  },
  loginLogo_main:{
    flexDirection:"row",
    alignItems:"center",
    width:"70%",
    alignSelf:"center",
    marginTop:30
  },
  loginLogo_heading:{
    color:"white",
    fontWeight:"bold",
    letterSpacing:1,
    paddingLeft:10,
    fontSize:20
  }
});
