import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "./types"; // Adjust path to wherever RootStackParamList is defined
import React from "react";
import {
  ImageBackground,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import background from "../../assets/images/splash_top_bg.png";

type DemoPageNavigationProp = StackNavigationProp<
  RootStackParamList,
  "DemoPage"
>;

export default function AddScreen() {
  const navigation = useNavigation<DemoPageNavigationProp>();

  return (
    <ImageBackground source={background} style={styles.background}>
      <View style={styles.overlay} />

      <View style={styles.contentContainer}>
        <Text style={styles.title}>
          Find your <Text style={styles.highlight}>first</Text> demo matches
        </Text>
        <Text style={styles.subtitle}>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form.
        </Text>

        {/* Login Button */}
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("LoginScreen")}
        >
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>

        {/* Register Button */}
        <TouchableOpacity
          style={styles.registerButton}
          onPress={() => navigation.navigate("RegisterScreen")}
        >
          <Text style={styles.registerButtonText}>Register</Text>
        </TouchableOpacity>

        {/* App Version Text */}
        <Text style={styles.appVersion}>App version 1234.9</Text>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Adds a semi-transparent overlay
  },
  contentContainer: {
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 30,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
    marginBottom: 10,
  },
  highlight: {
    color: "#FF0000", // Red color for 'first'
  },
  subtitle: {
    color: "#ccc",
    fontSize: 14,
    textAlign: "center",
    marginBottom: 30,
  },
  button: {
    backgroundColor: "#333",
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 30,
    marginBottom: 20,
    width: "80%",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
  },
  registerButton: {
    backgroundColor: "#FF0000", // Red background for Register button
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 30,
    marginBottom: 20,
    width: "80%",
    justifyContent: "center",
    alignItems: "center",
  },
  registerButtonText: {
    color: "#fff",
    fontSize: 16,
  },
  appVersion: {
    color: "#ccc",
    fontSize: 12,
    marginTop: 20,
  },
});
