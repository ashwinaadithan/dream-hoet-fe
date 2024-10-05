import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { launchCamera, launchImageLibrary } from "react-native-image-picker";
import CountryPicker, { CountryCode } from "react-native-country-picker-modal";

const ProfileEdit = () => {
  const [profileName, setProfileName] = useState("Dan Adams");
  const [email, setEmail] = useState("dan.adams@example.com");
  const [country, setCountry] = useState<CountryCode>("IN");
  const [mobileNumber, setMobileNumber] = useState("");
  const [profilePhoto, setProfilePhoto] = useState<string | null>(null);
  const [coverPhoto, setCoverPhoto] = useState<string | null>(null);
  const [gallery, setGallery] = useState<Array<{ uri: string; type: string }>>(
    []
  );

  const uploadFromCamera = (
    setPhoto: React.Dispatch<React.SetStateAction<string | null>>
  ) => {
    launchCamera(
      {
        mediaType: "photo",
      },
      (response) => {
        if (response?.assets?.length) {
          setPhoto(response.assets[0].uri || null);
        }
      }
    );
  };

  const uploadFromLibrary = (
    setPhoto: React.Dispatch<React.SetStateAction<string | null>>
  ) => {
    launchImageLibrary(
      {
        mediaType: "photo",
      },
      (response) => {
        if (response?.assets?.length) {
          setPhoto(response.assets[0].uri || null);
        }
      }
    );
  };

  const addToGallery = () => {
    launchImageLibrary(
      {
        mediaType: "mixed",
      },
      (response) => {
        if (response?.assets?.length) {
          const { uri, type } = response.assets[0];
          setGallery([...gallery, { uri: uri || "", type: type || "unknown" }]);
        }
      }
    );
  };

  return (
    <ScrollView style={styles.container}>
      {/* Username */}
      <View style={styles.inputGroup}>
        <Text style={styles.label}>Name</Text>
        <TextInput
          style={styles.input}
          value={profileName}
          onChangeText={setProfileName}
        />
      </View>

      {/* Email */}
      <View style={styles.inputGroup}>
        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          value={email}
          keyboardType="email-address"
          autoCapitalize="none"
          onChangeText={setEmail}
        />
      </View>

      {/* Country */}
      <View style={styles.inputGroup}>
        <Text style={styles.label}>Country</Text>
        <CountryPicker
          countryCode={country}
          withFlag
          withCountryNameButton
          withFilter={true} // Enable search functionality
          onSelect={(selectedCountry) => setCountry(selectedCountry.cca2)}
        />
      </View>

      {/* Mobile Number */}
      <View style={styles.inputGroupRow}>
        <Text style={styles.countryCode}>+91</Text>
        <TextInput
          style={styles.inputMobile}
          keyboardType="phone-pad"
          value={mobileNumber}
          onChangeText={setMobileNumber}
          placeholder="Enter mobile number"
        />
      </View>

      {/* Add Profile Photo */}
      <TouchableOpacity
        style={styles.photoButton}
        onPress={() => uploadFromLibrary(setProfilePhoto)}
      >
        <Text style={styles.photoButtonText}>Tap to Add Profile Photo</Text>
      </TouchableOpacity>

      {/* Add Cover Photo */}
      <TouchableOpacity
        style={styles.photoButton}
        onPress={() => uploadFromLibrary(setCoverPhoto)}
      >
        <Text style={styles.photoButtonText}>Tap to Add Cover Photo</Text>
      </TouchableOpacity>

      {/* Add Photo/Video to Gallery */}
      <View style={styles.buttonContainer}>
        <Button title="Add Photo/Video to Gallery" onPress={addToGallery} />
      </View>

      {/* Save Button */}
      <View style={styles.buttonContainer}>
        <Button
          title="Save Changes"
          onPress={() => alert("Profile updated!")}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#f5f5f5",
  },
  inputGroup: {
    marginBottom: 20,
  },
  inputGroupRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    color: "#333",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    borderRadius: 5,
    backgroundColor: "#fff",
    fontSize: 16,
  },
  inputMobile: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    borderRadius: 5,
    backgroundColor: "#fff",
    fontSize: 16,
  },
  countryCode: {
    fontSize: 18,
    marginRight: 10,
  },
  photoButton: {
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 5,
    padding: 15,
    backgroundColor: "#f0f0f0",
    alignItems: "center",
    marginBottom: 20,
  },
  photoButtonText: {
    color: "#999",
    fontSize: 16,
  },
  buttonContainer: {
    marginVertical: 10, // Adds space between the buttons
  },
});

export default ProfileEdit;
