import { View, Text, ScrollView } from "react-native";
import React, { useState, useEffect } from "react";
import HeaderTabs from "../components/HeaderTabs";
import SearchBar from "../components/SearchBar";
import FoodCategories from "../components/FoodCategories";
import RestaurantTile from "../components/RestaurantTIle";

export default function Home() {
  const [activeTab, setActiveTab] = useState("Delivery");

  // Get a yelp API key
  // https://www.yelp.com/developers/v3/manage_app
  const YELP_API_KEY =
    "bdRJutLhFAQJ36t7b89CWjHFBU4OKzjt9wvZzcY-nkgmvTqlNMjZWV1eG7iBQ9R74SyfxRg9LWnBAkZY06BtAZAe4d2dfX-2vuX8a1l5V7foctHfX9UKEyoM5ts3YXYx";

  const [restaurants, setRestaurants] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const searchYelp = async () => {
    const response = await fetch(
      `https://api.yelp.com/v3/businesses/search?term=${searchTerm}&location=${activeTab}`,
      {
        headers: {
          Authorization: `Bearer ${YELP_API_KEY}`,
        },
      }
    );
    const json = await response.json();
    setRestaurants(json.businesses);
  };

  useEffect(() => {
    searchYelp();
  }, [activeTab, searchTerm]);

  return (
    <View>
      <HeaderTabs activeTab={activeTab} setActiveTab={setActiveTab} />
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
