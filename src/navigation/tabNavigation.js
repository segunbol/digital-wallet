import React from "react";
import { View, Image, TouchableOpacity, StyleSheet } from "react-native";
import {
  createBottomTabNavigator,
  BottomTabBar,
} from "@react-navigation/bottom-tabs";
import {
  AntDesign,
  Octicons,
  MaterialCommunityIcons,
  Feather,
} from "@expo/vector-icons";

import {
  HomeScreen,
  ScanScreen,
  HistoryScreen,
  ProfileScreen,
} from "../screens";
import { COLORS, icons } from "../constants";

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        style: {
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          backgroundColor: "transparent",
          elevation: 0,
        },
      }}
    >
      <Tab.Screen
        name="HomeTab"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <AntDesign
              name="home"
              size={24}
              style={{
                color: focused ? COLORS.purple : COLORS.gray,
              }}
            />
          ),
        }}
      />

      <Tab.Screen
        name="HistoryTab"
        component={HistoryScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Octicons
              name="history"
              size={24}
              style={{
                color: focused ? COLORS.purple : COLORS.gray,
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Scan"
        component={ScanScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <MaterialCommunityIcons
              name="qrcode-scan"
              size={24}
              style={{
                color: focused ? COLORS.purple : COLORS.gray,
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="User"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Feather
              name="user"
              size={24}
              style={{
                color: focused ? COLORS.purple : COLORS.gray,
              }}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigation;
