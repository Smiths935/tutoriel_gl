import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import SpalshScreen from "../src/screen/SpalshScreen";
import Login from "../src/screen/Login";
import Register from "../src/screen/Register";
import Onboard from "../src/screen/Onboard";
import Intro from "../src/screen/Intro";
import ParticipeReunion from "../src/screen/ParticipeReunion";
import VerificationEmail from "../src/screen/VerificationEmail";
import Home from "../src/screen/Home";

const Stack = createNativeStackNavigator();

const NavigationStack = () => {
  return (
    <NavigationContainer >
      <Stack.Navigator initialRouteName="SpalshScreen" screenOptions={{headerShown:false}}>
        <Stack.Screen component={SpalshScreen} name="SpalshScreen"/>
        <Stack.Screen component={Login} name="Login"/>
        <Stack.Screen component={Register} name="Register"/>
        <Stack.Screen component={Onboard} name="Onboard"/>
        <Stack.Screen component={Intro} name="Intro"/>
        <Stack.Screen component={ParticipeReunion} name="ParticipeReunion"/>
        <Stack.Screen component={VerificationEmail} name="VerificationEmail"/>
        <Stack.Screen component={Home} name="Home"/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default NavigationStack;

const styles = StyleSheet.create({});
