import React from 'react';
import { StyleSheet, Text, View } from "react-native";

export default function MyComponent() {
  return (
    <View style={styles.containerMyComponent}>
      <Text style={styles.title}>Digital House</Text>
      <Text style={styles.text}>
        Transforme a sua carreira com quem acredita e apoia sua jornada!
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  containerMyComponent: {
    backgroundColor: "#eee",
    borderRadius: 18,
    padding: 32,
    margin: 32,
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
  },
  text: {
    color: "#131313",
    fontSize: 18,
  },
});