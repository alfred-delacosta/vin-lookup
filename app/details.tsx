import { Stack, useLocalSearchParams } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";

export default function Details() {
    const params = useLocalSearchParams();
    const vehicleImage = require('../assets/images/vehicle_sketch.png');

    function createPressableText(text: any) {
        return (
            <Pressable style={({ pressed }) => [
                    {
                        transform: pressed ? [{scale: 1.3}] : [{scale: 1}],
                        backgroundColor: pressed ? "rgba(90, 90, 90, 0.05)" : "#fff"
                    }
                ]}>
                    {text}
            </Pressable>
        )
    }
  
  return (
    <>
        <Stack.Screen options={{ title: "Vehicle Details"}} />
        <View style={styles.container}>
            <View style={styles.card}>
                <Text style={{ textAlign: "center", fontSize: 20, color: "#0064e7ff"}}>Click and hold to copy any of the text.</Text>
                {createPressableText(<Text style={[styles.text, styles.textSpacing]} selectable={true}>{params.model}</Text>)}
                {createPressableText(<Text style={[styles.text, styles.textSpacing]} selectable={true}>{params.make}</Text>)}
                {createPressableText(<Text style={[styles.text, styles.textSpacing]} selectable={true}>{params.manufacturer}</Text>)}
                {createPressableText(<Text style={[styles.text, styles.textSpacing]} selectable={true}>{params.year}</Text>)}
                {createPressableText(<Text style={[styles.text, styles.textSpacing]} selectable={true}>{params.bodyClass}</Text>)}
                {createPressableText(<Text style={[styles.text, styles.textSpacing]} selectable={true}>{params.trim}</Text>)}
                {createPressableText(<Text style={[styles.text, styles.textSpacing]} selectable={true}>{params.vin}</Text>)}
                <Text style={{ textAlign: "center", fontSize: 20, color: "#0064e7ff"}}>Swipe down to return to the search screen.</Text>
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
    backgroundColor: "#fff",
    width: "100%",
  },
  textSpacing: {
    marginTop: 8,
    padding: 20
  },
  text: {
    textAlign: "center",
    fontSize: 18,
    fontWeight: "600"
  }
});
