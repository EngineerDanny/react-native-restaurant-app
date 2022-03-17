import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import HeaderTabs from "../components/HeaderTabs";
import SearchBar from "../components/SearchBar";
import FoodCategories from "../components/FoodCategories";


export default function Home() {
  return (
    <View>
      <HeaderTabs />
      <SearchBar/>

      <FoodCategories/>
    </View>
  );
}
