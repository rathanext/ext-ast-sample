import React from "react";

import { TransitionPresets } from "@react-navigation/stack";
import { createStackNavigator } from "@react-navigation/stack";
import Homepage from "./Home";
import Nasadata from "./Nasadata";

const HomeStack = createStackNavigator();

const Home = ({ navigation }: any) => {
  return (
    <HomeStack.Navigator
      initialRouteName="home"
      screenOptions={({ route, navigation }) => ({
        headerShown: false,
        gestureEnabled: true,
        ...TransitionPresets.SlideFromRightIOS,
      })}
    >
      <HomeStack.Screen name="home" component={Homepage} />
      <HomeStack.Screen name="Nasa" component={Nasadata} />
    </HomeStack.Navigator>
  );
};

export default Home;
