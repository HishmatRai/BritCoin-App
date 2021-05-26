import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import StackNavigation from './src/Navigation/Navigation'
export default function App(props) {
  return (
    <View style={styles.container}>
      <StackNavigation/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
