import Ionicons from "@expo/vector-icons/Ionicons";
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
        <Text>
          <Ionicons name="car-sport" size={100} color={"#fff"} />
        </Text>
        <TextInput style={styles.input} placeholder="VIN" autoCorrect={false} value={vin} onChangeText={setVin}></TextInput>
        <TextInput style={styles.input} placeholder="Year" autoCorrect={false} value={year} onChangeText={setYear}></TextInput>
        <Pressable onPress={fetchCar} style={styles.button}>
          <Text style={{ textAlign: "center" }}>Submit</Text>
        </Pressable>
      </View>
  );
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: "blue",
    borderRadius: 10,
    padding: 20,
    margin: 10,
    width: "80%",
    backgroundColor: "#fff"
  },
  button: {
    backgroundColor: "#fff",
    padding: 10,
    borderColor: "#000",
    borderStyle: "solid",
    borderRadius: 10,
    borderWidth: 1,
    width: "80%",
    marginTop: 24,
  },
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "column",
    backgroundColor: "#00084d8e",
  },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: "100%",
  },
});
