import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import CountryPicker, { CountryCode } from "react-native-country-picker-modal";

const LoginScreen = () => {
  const [input, setInput] = useState(""); // For either email or phone number
  const [password, setPassword] = useState("");
  const [countryCode, setCountryCode] = useState<CountryCode>("IN"); // Default country code

  const handleLogin = () => {
    // Implement your login logic here
    alert("Login successful!");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>

      {/* Input for Email or Mobile Number */}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Email or Mobile Number</Text>
        <View style={styles.row}>
          {input.length > 0 && /^\d+$/.test(input) && (
            <CountryPicker
              countryCode={countryCode}
              withFlag
              withCallingCode
              withFilter={true} // Enable search
              onSelect={(country) => setCountryCode(country.cca2)}
            />
          )}
          <TextInput
            style={[
              styles.input,
              input.length > 0 && /^\d+$/.test(input) ? { flex: 1 } : {},
            ]} // Adjust width if phone number is detected
            placeholder="Enter email or mobile number"
            value={input}
            keyboardType={
              input.length > 0 && /^\d+$/.test(input)
                ? "phone-pad"
                : "email-address"
            } // Use phone keyboard for numbers
            onChangeText={setInput}
          />
        </View>
      </View>

      {/* Password Input */}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Password</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your password"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
      </View>

      {/* Login Button */}
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    justifyContent: "center",
    backgroundColor: "#f9f9f9",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 40,
  },
  inputContainer: {
    marginBottom: 20,
  },
  label: {
    marginBottom: 5,
    color: "#333",
    fontSize: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 10,
    backgroundColor: "#fff",
    width: "100%",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  button: {
    backgroundColor: "#FF0000", // Red background for login button
    paddingVertical: 15,
    borderRadius: 30,
    alignItems: "center",
    marginTop: 30,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
  },
});

export default LoginScreen;
