import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";

export default function RestaurantTile() {
  return (
    <TouchableOpacity
      activeOpacity={1}
      style={{
        marginTop: 8,
        paddingHorizontal: 10,
        paddingVertical: 10,
        elevation: 5,
        backgroundColor: "#fff",
      }}
    >
      <Image
        source={{
          uri: "https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        }}
        style={{
          height: 180,
          width: "100%",
        }}
      />
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          margin: 8,
        }}
      >
        <View>
          <Text
            style={{
              fontSize: 18,
              fontWeight: "bold",
            }}
          >
            Farmhouse Restaurant
          </Text>
          <Text
            style={{
              color: "grey",
            }}
          >
            40-55 • mins
          </Text>
        </View>
        <View
          style={{
            backgroundColor: "#eee",
            borderRadius: 15,
            paddingHorizontal: 10,
            paddingVertical: 5,
          }}
        >
          <Text
            style={{
              fontSize: 14,
              fontWeight: "bold",
            }}
          >
            4.5
          </Text>
        </View>
      </View>
      <TouchableOpacity>{/* Add a heart icon */}</TouchableOpacity>
    </TouchableOpacity>
  );
}
