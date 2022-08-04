import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import logo from "./assets/logo.png";
import MyComponent from "./MyComponent";

export default function App() {
  return (
    <View style={styles.container}>
      <MyComponent />

      <Image source={logo} style={styles.image} />

      <TouchableOpacity
        onPress={() => alert("Hello, world!")}
        style={styles.button}
      >
        <Text style={styles.textButton}>Clique aqui para ver uma mensagem</Text>
      </TouchableOpacity>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 300,
    height: 150,
  },
  button: {
    backgroundColor: "#ff0000",
    borderRadius: 4,
    padding: 16,
    margin: 32,
  },
  textButton: {
    color: "#fff",
    fontSize: 18,
  },
});
