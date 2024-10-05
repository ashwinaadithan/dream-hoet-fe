import React from "react";
import { Image, View, StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import FontAwesome from "@expo/vector-icons/FontAwesome";

// Import screens
import HomeScreen from "./index";
import VideoScreen from "./VideoScreen";
import ChatScreen from "./ChatScreen";
import TabFourScreen from "./four";
import ProfileScreen from "./ProfileScreen";

// Create Bottom Tabs Navigator
const Tab = createBottomTabNavigator();

function TabNavigation() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          height: 60, // Adjust tab bar height
          borderTopColor: "transparent",
          paddingBottom: 10, // Reduce padding
        },
        tabBarShowLabel: false, // Hide labels globally
        headerShown: false, // Hide the header for the tabs
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome name="home" color={color} size={24} />
          ),
        }}
      />
      <Tab.Screen
        name="Video"
        component={VideoScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome name="video-camera" color={color} size={24} />
          ),
        }}
      />
      <Tab.Screen
        name="Add"
        component={TabFourScreen}
        options={{
          tabBarIcon: () => (
            <View
              style={{
                position: "relative",
                bottom: 10,
                width: 70,
                height: 70,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image
                source={require("@/assets/images/navAdd.png")}
                style={{ width: 50, height: 50 }}
                resizeMode="contain"
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Chat"
        component={ChatScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome name="comment" color={color} size={24} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: () => (
            <View style={{ justifyContent: "center", alignItems: "center" }}>
              <Image
                source={require("@/assets/images/profileIcon.png")}
                style={{
                  width: 24,
                  height: 24,
                  borderRadius: 12, // Circular profile image
                }}
                resizeMode="contain"
              />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default TabNavigation;
