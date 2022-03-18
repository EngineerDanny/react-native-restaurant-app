import { View, Text, ScrollView } from "react-native";
import React, { useState } from "react";
import HeaderTabs from "../components/HeaderTabs";
import SearchBar from "../components/SearchBar";
import FoodCategories from "../components/FoodCategories";
import RestaurantTile from "../components/RestaurantTIle";

export default function Home() {
  const [activeTab, setActiveTab] = useState("Delivery");
  return (
    <View>
      <HeaderTabs />
      <SearchBar />

      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{
          backgroundColor: "#eee",
        }}
      >
        <FoodCategories />
        <RestaurantTile />
        <RestaurantTile />
        <RestaurantTile />
        <RestaurantTile />
        <RestaurantTile />
        <RestaurantTile />
        <RestaurantTile />
      </ScrollView>
    </View>
  );
}
