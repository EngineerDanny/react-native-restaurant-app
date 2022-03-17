import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";

export default function HeaderTabs() {
  const [activeTab, setActiveTab] = useState("Delivery");
  const tabs = ["Delivery", "Pickup"];

  const HeaderBtn = ({ title, onPress }) => {
    return (
      <TouchableOpacity
        style={{
          backgroundColor: activeTab === title ? "#000" : "#fff",
          paddingHorizontal: 20,
          paddingVertical: 6,
          borderRadius: 20,
          margin: 1,
        }}
        onPress={onPress}
      >
        <Text
          style={{
            color: activeTab === title ? "#fff" : "#000",
            fontWeight: "800",
            fontSize: 14,
          }}
        >
          {title}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "center",
      }}
    >
      {tabs.map((tab, index) => {
        return (
          <HeaderBtn
            title={tab}
            key={index}
            onPress={() => {
              setActiveTab(tab);
            }}
            activeTab={activeTab}
          />
        );
      })}
    </View>
  );
}
