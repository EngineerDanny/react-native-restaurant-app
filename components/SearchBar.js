import React from "react";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";

import Ionicons from "react-native-vector-icons/Ionicons";
import AntDesign from "react-native-vector-icons/AntDesign";
import { View, Text, TouchableOpacity } from "react-native";

export default function SearchBar() {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "center",
        margin: 15,
      }}
    >
      <GooglePlacesAutocomplete
        placeholder="Search"
        onPress={(data, details = null) => {
          // 'details' is provided when fetchDetails = true
          console.log(data, details);
        }}
        query={{
          key: "YOUR API KEY",
          language: "en",
        }}
        renderLeftButton={() => (
          <View
            style={{
              marginLeft: 10,
            }}
          >
            <Ionicons name="location" size={17} color="black" />
          </View>
        )}
        renderRightButton={() => (
          <View
            style={{
              marginRight: 10,
            }}
          >
            <TouchableOpacity>
              <AntDesign name="search1" size={17} color="black" />
            </TouchableOpacity>
          </View>
        )}
        styles={{
          textInput: {
            backgroundColor: "#eee",
            borderRadius: 13,
            fontWeight: "600",
            marginTop: 4,
          },
          textInputContainer: {
            backgroundColor: "#eee",
            borderRadius: 13,
            flexDirection: "row",
            alignItems: "center",
            marginRight: 10,
          },
        }}
      />
    </View>
  );
}
