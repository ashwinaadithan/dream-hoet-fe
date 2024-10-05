import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Button,
} from "react-native";

const RegisterScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [dob, setDob] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [otp, setOtp] = useState("");
  const [otpSent, setOtpSent] = useState(false);

  const handleSendOtp = () => {
    // Logic to send OTP to phone number
    setOtpSent(true);
    alert("OTP sent to " + phoneNumber);
  };

  const handleSubmit = () => {
    // Logic to handle registration
    alert("Registration Submitted!");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Register</Text>

      {/* Email Input */}
      <View style={styles.inputContainer}>
        <Text>Email</Text>
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
          placeholder="Enter your email"
        />
      </View>

      {/* Password Input */}
      <View style={styles.inputContainer}>
        <Text>Password</Text>
        <TextInput
          style={styles.input}
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          placeholder="Enter your password"
        />
      </View>

      {/* Date of Birth Input */}
      <View style={styles.inputContainer}>
        <Text>Date of Birth (D/M/Y)</Text>
        <TextInput
          style={styles.input}
          value={dob}
          onChangeText={setDob}
          placeholder="DD/MM/YYYY"
          keyboardType="numeric"
        />
      </View>

      {/* Phone Number Input with Send OTP Button */}
      <View style={styles.inputContainerRow}>
        <TextInput
          style={[styles.input, { flex: 1 }]}
          value={phoneNumber}
          onChangeText={setPhoneNumber}
          placeholder="Enter your phone number"
          keyboardType="phone-pad"
        />
        <TouchableOpacity style={styles.otpButton} onPress={handleSendOtp}>
          <Text style={styles.otpButtonText}>Send OTP</Text>
        </TouchableOpacity>
      </View>

      {/* OTP Input */}
      {otpSent && (
        <View style={styles.inputContainer}>
          <Text>Enter OTP</Text>
          <TextInput
            style={styles.input}
            value={otp}
            onChangeText={setOtp}
            keyboardType="numeric"
            placeholder="Enter 6-digit OTP"
            maxLength={6}
          />
        </View>
      )}

      {/* Submit Button */}
      <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
        <Text style={styles.submitButtonText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f5f5f5",
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  inputContainer: {
    marginBottom: 20,
  },
  inputContainerRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    borderRadius: 5,
    flex: 1,
  },
  otpButton: {
    backgroundColor: "#007BFF",
    padding: 10,
    marginLeft: 10,
    borderRadius: 5,
  },
  otpButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  submitButton: {
    backgroundColor: "#28a745",
    paddingVertical: 15,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  submitButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default RegisterScreen;
