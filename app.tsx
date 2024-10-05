import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import TabLayout from "./app/(tabs)/_layout"; // Correct import for TabLayout
import LoginScreen from "./app/(tabs)/LoginScreen";
import RegisterScreen from "./app/(tabs)/RegisterScreen";
import DemoPage from "./app/(tabs)/AddScreen"; // Your demo page
import ProfileEditScreen from "./app/(tabs)/ProfileEditScreen"; // Add this import

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="DemoPage">
        {/* Splash / Demo Page */}
        <Stack.Screen
          name="DemoPage"
          component={DemoPage}
          options={{ headerShown: false }}
        />
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
        {/* Main Tab Navigator */}
        <Stack.Screen
          name="TabLayout"
          component={TabLayout}
          options={{ headerShown: false }} // No header for tab layout
        />
        {/* Profile Edit Screen */}
        <Stack.Screen
          name="ProfileEdit"
          component={ProfileEditScreen}
          options={{ title: "Edit Profile" }} // Ensure the route name matches exactly
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
