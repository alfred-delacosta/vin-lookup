import { Stack, useLocalSearchParams } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function Details() {
    const params = useLocalSearchParams();
    const vehicleImage = require('../assets/images/vehicle_sketch.png');
  
  return (
    <>
        <Stack.Screen options={{ title: "Vehicle Details"}} />
        <View style={styles.container}>
            <View style={styles.card}>
                <Text style={styles.textBox}>{params.model}</Text>
                <Text style={{ textAlign: "center", fontSize: 24}}>{params.make}</Text>
                <Text style={{ textAlign: "center", fontSize: 24}}>{params.manufacturer}</Text>
                <Text style={{ textAlign: "center", fontSize: 24}}>{params.year}</Text>
                <Text style={{ textAlign: "center", fontSize: 24}}>{params.bodyClass}</Text>
                <Text style={{ textAlign: "center", fontSize: 24}}>{params.trim}</Text>
                <Text style={{ textAlign: "center", fontSize: 24}}>{params.vin}</Text>
            </View>
        </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "column",
  },
  card: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    width: "100%",
  },
  textBox: {
    width: "50%",
    fontSize: 24,
    textAlign: "center",
  },
});
