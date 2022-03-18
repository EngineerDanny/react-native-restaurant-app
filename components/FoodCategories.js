import { View, Text, ScrollView, Image } from "react-native";
import React from "react";

export default function FoodCategories() {
  const categoryList = [
    {
      id: 1,
      name: "Bakery Items",
      image: require("../assets/images/bread.png"),
    },
    {
      id: 2,
      name: "Drinks",
      image: require("../assets/images/coffee.png"),
    },
    {
      id: 3,
      name: "Pasta",
      image: require("../assets/images/deals.png"),
    },
    {
      id: 4,
      name: "Salad",
      image: require("../assets/images/desserts.png"),
    },
    {
      id: 5,
      name: "Dessert",
      image: require("../assets/images/fast-food.png"),
    },
    {
      id: 6,
      name: "Drinks",
      image: require("../assets/images/shopping-bag.png"),
    },
    {
      id: 7,
      name: "Soft Drinks",
      image: require("../assets/images/soft-drink.png"),
    },
  ];

  return (
    <View
      style={{
        marginTop: 8,
        backgroundColor: "#fff",
        paddingVertical:15,
      }}
    >
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {categoryList.map((category, index) => {
          return (
            <View
              key={index}
              style={{
                marginLeft: 30,
                alignItems: "center",
                marginRight: categoryList.length - 1 === index ? 20 : 0,
              }}
            >
              <Image
                source={category.image}
                style={{
                  height: 30,
                  width: 50,
                  marginBottom: 5,
                }}
              />

              <Text
                style={{
                  fontWeight: "900",
                  fontSize: 14,
                }}
              >
                {category.name}
              </Text>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
}
