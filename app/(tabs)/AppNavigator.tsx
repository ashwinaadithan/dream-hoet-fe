import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import RegisterScreen from "./RegisterScreen";
import LoginScreen from "./LoginScreen";
import ProfileScreen from "./ProfileScreen";
import ProfileEditScreen from "./ProfileEditScreen";

const Stack = createStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LoginScreen">
        {/* Login Screen */}
        <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{ title: "Login" }}
        />
        {/* Register Screen */}
        <Stack.Screen
          name="RegisterScreen"
          component={RegisterScreen}
          options={{ title: "Register" }}
        />
        {/* Profile Screen */}
        <Stack.Screen
          name="ProfileScreen"
          component={ProfileScreen}
          options={{ title: "Profile" }}
        />
        {/* Profile Edit Screen */}
        <Stack.Screen
          name="ProfileEditScreen"
          component={ProfileEditScreen}
          options={{ title: "Edit Profile" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
