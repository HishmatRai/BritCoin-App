import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View, Text, ImageBackground, ScrollView, TouchableOpacity, Image } from 'react-native';
import { Ionicons, Feather, MaterialIcons, FontAwesome5 } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
export default function Home(props) {
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

            {/* <==========================> --- <==========================> */}
            <Text style={styles._heading}>Total balance</Text>
            <Text style={styles._price}>$ 1.369</Text>

            {/* <==========================> --- <==========================> */}
            <View style={styles._buttons_main}>
              <TouchableOpacity style={styles._send_btn}>
                <Feather name="send" size={20} color="white" />
                <Text style={styles._send_btn_txt}>Send</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles._receive_btn}>
                <Image source={require('./../../img/receiveIcon.png')} style={styles.receiveIcon} />
                <Text style={styles._receive_btn_txt}>Receive</Text>
              </TouchableOpacity>
            </View>

            {/* <==========================> --- <==========================> */}
            <View style={styles._card_main}>

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
                    colors={['#26A27B', '#3A7462']}
                    style={{ borderRadius: 10, borderWidth: 2, borderColor: 'white', paddingVertical: 20, paddingHorizontal: 20, height: 180 }}>
                    <View style={styles._Card_header}>
                      <Text style={styles._card_price}>$4500.89</Text>
                      <View style={styles._card_second_post}>
                        <Image source={require('./../../img/USDTSmallIcon.png')} style={styles.USDTSmallIcon} />
                        <Text style={styles._Card_icon_text}>USDT</Text>
                      </View>
                    </View>
                    <View style={styles._sim_main}>
                      <Image source={require('./../../img/sim.png')} style={styles.sim} />
                      <Image source={require('./../../img/USDTBigIcon.png')} style={styles.USDTBigIcon} />
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
                    colors={['#9A8030', '#674F03']}
                    style={{ borderRadius: 10, borderWidth: 2, borderColor: 'white', paddingVertical: 20, paddingHorizontal: 20, height: 180 }}>
                    <View style={styles._Card_header}>
                      <Text style={styles._card_price}>$4500.89</Text>
                      <View style={styles._card_second_post}>
                        <Image source={require('./../../img/BinanceSmallIcon.png')} style={styles.BinanceSmallIcon} />
                        <Text style={styles._Card_icon_text}>USDT</Text>
                      </View>
                    </View>
                    <View style={styles._sim_main}>
                      <Image source={require('./../../img/sim.png')} style={styles.sim} />
                      <Image source={require('./../../img/BinanceBigIcon.png')} style={styles.BinanceBigIcon} />
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
                    colors={['#4C649D', '#0033AD']}
                    style={{ borderRadius: 10, borderWidth: 2, borderColor: 'white', paddingVertical: 20, paddingHorizontal: 20, height: 180 }}>
                    <View style={styles._Card_header}>
                      <Text style={styles._card_price}>$4500.89</Text>
                      <View style={styles._card_second_post}>
                        <Image source={require('./../../img/CardmSmallIcon.png')} style={styles.CardmSmallIcon} />
                        <Text style={styles._Card_icon_text}>ADA</Text>
                      </View>
                    </View>
                    <View style={styles._sim_main}>
                      <Image source={require('./../../img/sim.png')} style={styles.sim} />
                      <Image source={require('./../../img/CardmBiticon.png')} style={styles.CardmBiticon} />
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
              {/* <==========================> --- <==========================> */}
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
              <Text style={styles.active}></Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles._tabs} onPress={() => props.navigation.navigate("SelectACard")}>
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
    paddingTop: 30

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
    fontSize: 18,
    fontStyle: "italic"
  },
  _Card1: {
    // backgroundColor: "#242d33",
    // borderRadius: 10,
    // paddingVertical: 10,
    // paddingHorizontal: 20,
    // height: 190,
    // borderWidth: 1,
    // borderColor: 'white'
  },
  _Card2: {
    marginTop: -130,
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
    alignItems: "center",
    marginTop: 10
  },
  _ibn_num: {
    color: "white"
  },
  loginLogo: {
    width: 50,
    height: 50
  },
  loginLogo_main: {
    flexDirection: "row",
    alignItems: "center",
    width: "70%",
    alignSelf: "center",
    marginTop: 30
  },
  loginLogo_heading: {
    color: "white",
    fontWeight: "bold",
    letterSpacing: 1,
    paddingLeft: 10,
    fontSize: 20
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
  EthSmallIcon: {
    width: 14,
    height: 23,
    marginRight: 10
  },
  USDTSmallIcon: {
    width: 17,
    height: 17,
    marginRight: 10
  },
  BinanceSmallIcon: {
    width: 19,
    height: 19,
    marginRight: 10
  },
  BinanceBigIcon: {
    width: 90,
    height: 90
  },
  CardmSmallIcon: {
    width: 18,
    height: 18,
    marginRight: 10
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
  poundSmallLogo: {
    width: 39,
    height: 39,

  },
  poundBigIcon: {
    width: 30,
    height: 70
  },
  active: {
    backgroundColor: "#0D89B7",
    width: 5,
    height: 5,
    borderRadius: 5 / 2,
    marginTop: 5
  }
});
