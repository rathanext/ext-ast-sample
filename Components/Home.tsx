import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Alert,
  ActivityIndicator,
} from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
// import Toast from "react-native-simple-toast";

const apikey = "xsGe8ZVLgT5UgRs03rioYt4P86EI0E4hvYC2h49y";

const Homepage = ({ navigation }: any) => {
  const [id, setId] = React.useState<string>("");
  const [loading, setLoading] = React.useState<boolean>(false);
  const [loadingran, setLoadingRan] = React.useState<boolean>(false);

  const getNasaData = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://api.nasa.gov/neo/rest/v1/neo/${id}?api_key=${apikey}`
      );

      console.log(response.status, "response");
      if (response?.status === 404) {
        alert("Enter correct id");
      } else if (response?.status === 200) {
        const json = await response.json();
        console.log(json, "apidata");
        navigation.navigate("Nasa", { data: json });
      } else {
        alert("something went wrong");
      }
      setLoading(false);
    } catch (err) {
      console.error(err);
      alert("some error" + JSON.stringify(err));
      setLoading(false);
    }
  };

  const getRandomId = async () => {
    setLoadingRan(true);
    try {
      const response = await fetch(
        `https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=${apikey}`
      );
      const json = await response.json();
      console.log(
        json.near_earth_objects[Math.floor(Math.random() * 20)].id,
        "apidata random"
      );

      navigation.navigate("Nasa", {
        data: json.near_earth_objects[
          Math.floor(Math.random() * json.near_earth_objects.length)
        ],
      });

      setLoadingRan(false);
      //   if (json.id == id) {
      //     navigation.navigate("Nasa", { data: json });
      //   }
      //   setLoading(false);
    } catch (err) {
      console.error(err);
      setLoadingRan(false);
      //   Toast.show("Please enter correct ID", Toast.SHORT);
      //   setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.idHolder}>
        <TextInput
          style={styles.input}
          onChangeText={setId}
          keyboardType={"numeric"}
          value={id}
          placeholder={"Enter Asteroid ID"}
          testID="asteroidid"
        />
      </View>
      <View style={styles.buttonHolder}>
        {!loading ? (
          <TouchableOpacity
            testID="submit"
            onPress={() => {
              getNasaData();
            }}
            disabled={id.length <= 0 ? true : false}
            style={[
              styles.button,
              { backgroundColor: id.length > 0 ? "blue" : "grey" },
            ]}
          >
            <Text testID="submitText" style={styles.buttonText}>
              Submit
            </Text>
          </TouchableOpacity>
        ) : (
          <View>
            <ActivityIndicator size={"small"} color={"red"} />
          </View>
        )}
        {!loadingran ? (
          <TouchableOpacity
            testID="random"
            onPress={() => {
              getRandomId();
            }}
            style={[
              styles.button,
              {
                backgroundColor: "blue",
                marginLeft: 10,
              },
            ]}
          >
            <Text testID="randomText" style={styles.buttonText}>
              Random
            </Text>
          </TouchableOpacity>
        ) : (
          <View>
            <ActivityIndicator size={"small"} color={"red"} />
          </View>
        )}
      </View>
    </View>
  );
};

export default Homepage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    width: "60%",
    height: 50,
    borderWidth: 1,
    paddingLeft: 10,
  },
  idHolder: {
    width: "100%",
    alignItems: "center",
  },
  buttonHolder: { marginTop: 10, flexDirection: "row", alignItems: "center" },
  button: {
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: "#fff",
  },
});
