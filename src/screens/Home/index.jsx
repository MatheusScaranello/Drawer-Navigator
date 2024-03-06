import React from "react";
import { Text, View } from "react-native";

import styles from "./styles";

export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello, I am your Home!</Text>
    </View>
  );
}
