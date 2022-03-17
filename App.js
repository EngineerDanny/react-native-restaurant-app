import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import Home from "./screens/Home";

export default function App() {
  return (
    <SafeAreaView>
      <Home />
    </SafeAreaView>
  );
}

