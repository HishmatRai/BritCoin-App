import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {SplashScreen,Home,Select,Retailer,Profile} from './../Screens/index'
const Stack = createStackNavigator();
function StackNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="SplashScreen" component={SplashScreen}  options={{ headerShown: false }}/>
        <Stack.Screen name="Select" component={Select}  options={{ headerShown: false }}/>
        {/* <Stack.Screen name="Home" component={Home}  options={{ headerShown: false }}/> */}
        {/* <Stack.Screen name="Retailer" component={Retailer}  options={{ headerShown: false }}/> */}
        {/* <Stack.Screen name="Profile" component={Profile}  options={{ headerShown: false }}/> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default StackNavigation;