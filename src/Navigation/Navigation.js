import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SplashScreen, Home, Select, Retailer, Profile, Overview, Receive, SelectACard2, SelectACard, Swap,TermenalHomeScreen } from './../Screens/index'
const Stack = createStackNavigator();
function StackNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen name="SplashScreen" component={SplashScreen} options={{ headerShown: false }} /> */}
        {/* <Stack.Screen name="Select" component={Select} options={{ headerShown: false }} /> */}
        {/* <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} /> */}
        {/* <Stack.Screen name="Overview" component={Overview} options={{ headerShown: false }} /> */}
        {/* <Stack.Screen name="Receive" component={Receive} options={{ headerShown: false }} /> */}
        {/* <Stack.Screen name="SelectACard2" component={SelectACard2} options={{ headerShown: false }} /> */}
        {/* <Stack.Screen name="SelectACard" component={SelectACard} options={{ headerShown: false }} /> */}
        {/* <Stack.Screen name="Swap" component={Swap} options={{ headerShown: false }} /> */}
        {/* <Stack.Screen name="Retailer" component={Retailer} options={{ headerShown: false }} /> */}
        {/* <Stack.Screen name="Profile" component={Profile} options={{ headerShown: false }} /> */}
        <Stack.Screen name="TermenalHomeScreen" component={TermenalHomeScreen} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default StackNavigation;