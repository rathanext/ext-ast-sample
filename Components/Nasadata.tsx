import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";

const Nasadata = ({ route, navigation }: any) => {
  console.log(route.params.data);
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={{ marginTop: 20, marginLeft: 20 }}
        onPress={() => {
          navigation.goBack();
        }}
      >
        <Text testID="name" style={{ color: "#000" }}>
          Go Back
        </Text>
      </TouchableOpacity>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          marginTop: 50,
        }}
      >
        <Text style={styles.nasaText}>Name: {route.params.data.name}</Text>
        <Text style={styles.nasaText}>
          Nasa Jpl Url:
          {route.params.data.nasa_jpl_url}
        </Text>
        <Text style={styles.nasaText}>
          Nasa Potential:
          {route.params.data.is_potentially_hazardous_asteroid ? "Yes" : "No"}
          {/* {route.params.data.near_earth_objects[0]
          .is_potentially_hazardous_asteroid
          ? "True"
          : "false"} */}
        </Text>
      </View>
      {/* {route.params.data.is_potentially_hazardous_asteroid ? (
        <Text style={styles.nasaText}>
          Potential:
          {route.params.data.is_potentially_hazardous_asteroid
            ? "True"
            : "False"}
        </Text>
      ) : (
        <Text style={styles.nasaText}>
          Potential:
          {route.params.data.near_earth_objects[0]
            .is_potentially_hazardous_asteroid
            ? "True"
            : "False"}
        </Text>
      )} */}
    </View>
  );
};

export default Nasadata;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  nasaText: {
    fontSize: 24,
  },
});
