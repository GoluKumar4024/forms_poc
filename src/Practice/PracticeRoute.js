import * as React from "react";
import { Button, View } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import Screen_two from "./Screen_two";
import Screen_one from "./Screen_one";

const PracticeRoute = () => {
  const Drawer = createDrawerNavigator();

  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen
          name="Screen_one"
          component={Screen_one}
          options={{ title: "Screen One" }}
        />
        <Drawer.Screen
          name="Screen_two"
          component={Screen_two}
          options={{ title: "Screen Two" }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default PracticeRoute;
