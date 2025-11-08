import Ionicons from "@expo/vector-icons/Ionicons";
import { Label } from "@react-navigation/elements";
import { useRouter } from "expo-router";
import { useState } from "react";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";

interface Car {
  vin: string;
  make: string;
  manufacturer: string;
  model: string;
  year: string;
  trim: string;
  bodyClass: string;
}

export default function Index() {
  const router = useRouter();
  const [vin, setVin] = useState("");
  const [year, setYear] = useState("");

  const apiUrl = `https://vpic.nhtsa.dot.gov/api/vehicles/decodevin/${vin}?format=json&modelyear=${year}`;

  async function fetchCar() {
    if (vin === "") {
      alert("Please enter a VIN.");
      return;
    } else {
      const response = await fetch(apiUrl);
      const data = await response.json();
      console.log(data["Results"][23]["Value"])
      router.navigate({pathname: '/details', params: {
        vin: vin,
        make: data["Results"][7]["Value"],
        manufacturer: data["Results"][8]["Value"],
        model: data["Results"][9]["Value"],
        year: data["Results"][10]["Value"],
        trim: data["Results"][13]["Value"],
        bodyClass: data["Results"][23]["Value"]
      }});
    }
  }


  return (
    <View style={styles.container}>
      <Ionicons name="car-sport" size={100} />
      <Label style={styles.label}>VIN</Label>
      <TextInput style={styles.input} autoCorrect={false} value={vin} onChangeText={setVin}></TextInput>
      <Label style={styles.label}>Year</Label>
      <TextInput style={styles.input} autoCorrect={false} value={year} onChangeText={setYear}></TextInput>
      <Pressable onPress={fetchCar} style={({ pressed }) => [
        styles.button,
        {
          backgroundColor: pressed ? 'rgb(210, 230, 255)' : 'white',
          transform: pressed ? [{scale: 1.2}] : [{scale: 1}],
          transitionTimingFunction: "ease-in"
        }
      ]}>
        <Text style={{ textAlign: "center", fontSize: 18 }}>Submit</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 3,
    borderColor: "#0558b6ff",
    borderRadius: 20,
    padding: 20,
    margin: 10,
    width: "80%"
  },
  button: {
    borderWidth: 3,
    borderColor: "#0558b6ff",
    borderRadius: 20,
    padding: 20,
    margin: 10,
    width: "80%",
    backgroundColor: "#fff",
  },
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "column",
    
  },
  label: {
    fontSize: 18,
  },
  background: {
    // position: 'absolute',
    // left: 0,
    // right: 0,
    // top: 0,
    // height: "100%",
  },
});
