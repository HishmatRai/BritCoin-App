import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View,Text,ImageBackground } from 'react-native';
export default function Home(props) {
  return (
    <View style={styles.container}>
         <ImageBackground
        source={require("./../../img/backgroundImg.jpeg")}
        style={styles._image}
      >
      <StatusBar style="auto" />
      <Text>fsdfs</Text>
      <Text>fsdfs</Text>
      <Text>fsdfs</Text>
      <Text>fsdfs</Text>
      <Text>fsdfs</Text>
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
});
