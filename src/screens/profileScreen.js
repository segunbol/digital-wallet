import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  KeyboardAvoidingView,
  TextInput,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { COLORS, SIZES, FONTS, icons } from "../constants";
import FocusedStatusBar from "../components/FocusedStatusBar";

const ProfileScreen = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  return (
    <KeyboardAvoidingView
      style={{
        padding: SIZES.padding2,
        height: "100%",
        backgroundColor: COLORS.white,
      }}
    >
      <FocusedStatusBar backgroundColor={COLORS.purple} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ flex: 1, marginTop: SIZES.h1 }}>
          <Text style={{ ...FONTS.h2, textAlign: "center" }}>Profile</Text>
        </View>
        <View
          style={{
            marginTop: SIZES.h1,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <View>
            <Image
              source={require("../../assets/images/profile.jpg")}
              resizeMode="contain"
              style={{ width: 100, height: 100, borderRadius: 100 }}
            />
            <TouchableOpacity
              style={{ position: "absolute", right: 0, bottom: 0 }}
            >
              <MaterialCommunityIcons
                name="camera-flip"
                size={16}
                color={COLORS.white}
                style={{
                  backgroundColor: COLORS.black,
                  padding: SIZES.base,
                  borderRadius: 100,
                }}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            marginTop: SIZES.padding * 3,
          }}
        >
          <View style={{ marginTop: SIZES.padding * 2 }}>
            <Text style={{ color: COLORS.black, ...FONTS.h5 }}>Full Name</Text>
            <TextInput
              style={{
                marginVertical: SIZES.padding,
                borderBottomWidth: 1,
                height: 40,
                ...FONTS.body3,
              }}
              placeholder="Reynan Decena"
              selectionColor={COLORS.purple}
            />
          </View>

          <View style={{ marginTop: SIZES.padding * 2 }}>
            <Text style={{ color: COLORS.black, ...FONTS.h5 }}>
              Phone Number
            </Text>
            <TextInput
              style={{
                marginVertical: SIZES.padding,
                borderBottomWidth: 1,
                height: 40,
                ...FONTS.body3,
              }}
              placeholder="+63 9665349297"
              selectionColor={COLORS.purple}
            />
          </View>

          <View style={{ marginTop: SIZES.padding * 2 }}>
            <Text style={{ color: COLORS.black, ...FONTS.h5 }}>
              Email Address
            </Text>
            <TextInput
              style={{
                marginVertical: SIZES.padding,
                borderBottomWidth: 1,
                height: 40,
                ...FONTS.body3,
              }}
              placeholder="reynandecena1984@gmail.com"
              selectionColor={COLORS.purple}
            />
          </View>

          <View style={{ marginTop: SIZES.padding * 2 }}>
            <Text style={{ color: COLORS.black, ...FONTS.h5 }}>Password</Text>
            <TextInput
              style={{
                marginVertical: SIZES.padding,
                borderBottomWidth: 1,
                height: 40,
                ...FONTS.body3,
              }}
              placeholder="********"
              secureTextEntry={!showPassword}
            />
            <TouchableOpacity
              style={{
                position: "absolute",
                right: 0,
                bottom: 10,
                height: 30,
                width: 30,
              }}
              onPress={() => setShowPassword(!showPassword)}
            >
              <Image
                source={showPassword ? icons.disable_eye : icons.eye}
                style={{
                  height: 20,
                  width: 20,
                  tintColor: COLORS.secondary,
                }}
              />
            </TouchableOpacity>
          </View>

          <View style={{ marginTop: SIZES.padding * 2 }}>
            <Text style={{ color: COLORS.black, ...FONTS.h5 }}>
              Confirm Password
            </Text>
            <TextInput
              style={{
                marginVertical: SIZES.padding,
                borderBottomWidth: 1,
                height: 40,
                ...FONTS.body3,
              }}
              placeholder="********"
              secureTextEntry={!showConfirmPassword}
            />
            <TouchableOpacity
              style={{
                position: "absolute",
                right: 0,
                bottom: 10,
                height: 30,
                width: 30,
              }}
              onPress={() => setShowConfirmPassword(!showConfirmPassword)}
            >
              <Image
                source={showConfirmPassword ? icons.disable_eye : icons.eye}
                style={{
                  height: 20,
                  width: 20,
                  tintColor: COLORS.secondary,
                }}
              />
            </TouchableOpacity>
          </View>
          <View style={{ marginTop: SIZES.padding2 }}>
            <TouchableOpacity
              style={{
                height: 55,
                backgroundColor: COLORS.purple,
                borderRadius: SIZES.base,
                alignItems: "center",
                justifyContent: "center",
              }}
              onPress={() => navigation.navigate("Home")}
            >
              <Text style={{ color: COLORS.white, ...FONTS.h5 }}>
                Update Profile
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default ProfileScreen;
