import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, Button } from "react-native";
export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.view3}>
        <Image
          style={{ marginTop: 50 }}
          source={require("./image/circle.png")}
        />
        <StatusBar style="auto" />
      </View>
      <View style={styles.view2}>
        <Text style={{ fontSize: 59, textAlign: "center", marginTop: 40 }}>
          GROW YOUR BUSINEE
        </Text>
      </View>
      <View style={{ flex: 1 }}>
        <Text style={{ fontSize: 18, textAlign: "center" }}>
          We will help you to grow your business using online server
        </Text>
      </View>
      <View style={styles.action}>
        <Button color="#E3C000" title="LOGIN" />
        <Button color="#E3C000" title="SIGN UP" />
      </View>
      <View style={{ flex: 1 }}>
        <Text style={{ marginTop: 30, fontSize: 20 }}>How We Work?</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#28F7AC",
    alignItems: "center",
    justifyContent: "center",
  },
  view2: {
    flex: 1,
    alignItems: "center",
    textShadowColor: "black",
    fontSize: 20,
  },
  action: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "50%",
  },
  button: {
    backgroundColor: "#E3C000",
  },
});
