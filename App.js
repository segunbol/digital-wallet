import React from "react";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { useFonts } from "expo-font";

import TabNavigation from "./src/navigation/tabNavigation";
import { SignUpScreen } from "./src/screens";
import SignInScreen from "./src/screens/signInScreen";

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    border: "transparent",
  },
};

const Stack = createStackNavigator();

import { createDrawerNavigator } from '@react-navigation/drawer';

import Sidebar from "./src/components/SideBar";

const Drawer = createDrawerNavigator();

const App = () => {
  const [loaded] = useFonts({
        "Poppins-Black": require("./assets/fonts/Poppins-ExtraBold.ttf"),
        "Poppins-Bold": require("./assets/fonts/Poppins-Bold.ttf"),
        "Poppins-Regular": require("./assets/fonts/Poppins-Regular.ttf"),
      });
   
      if (!loaded) {
        return null;
      }
   
    return (
        <NavigationContainer>
            <Drawer.Navigator
                drawerContent={(props) => <Sidebar {...props} />}
            >
                <Drawer.Screen name="SignIn" component={SignInScreen} />
                <Drawer.Screen name="SignUp" component={SignUpScreen} />
                <Drawer.Screen name="Home" component={TabNavigation} />
            </Drawer.Navigator>
        </NavigationContainer>
    );
}

export default App;