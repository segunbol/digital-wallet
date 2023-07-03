import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Image,
  TextInput,
  Modal,
  FlatList,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
} from "react-native";

import { COLORS, SIZES, FONTS, icons } from "../constants";
import FocusedStatusBar from "../components/FocusedStatusBar";

const SignInScreen = ({ navigation }) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : null}
      style={{ flex: 1, padding: SIZES.padding2 }}
    >
      <FocusedStatusBar backgroundColor={COLORS.purple} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            marginTop: SIZES.padding2,
            height: 100,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Image
            source={require("../../assets/images/logo.png")}
            resizeMode="contain"
            style={{
              width: "60%",
            }}
          />
        </View>
        <View
          style={{
            marginTop: SIZES.padding * 3,
          }}
        >
          <Text style={{ ...FONTS.h1 }}>Login to your</Text>
          <Text style={{ ...FONTS.h1, marginVertical: SIZES.base }}>
            Account
          </Text>
          <View
            style={{
              width: 50,
              height: 2,
              backgroundColor: COLORS.purple,
            }}
          />
        </View>
        <View
          style={{
            marginTop: SIZES.padding * 3,
          }}
        >
          <View style={{ marginTop: SIZES.padding * 2 }}>
            <Text style={{ color: COLORS.black, ...FONTS.body3 }}>
              Mobile Number
            </Text>
            <TextInput
              style={{
                marginVertical: SIZES.padding,
                borderBottomWidth: 1,
                height: 40,
                ...FONTS.body3,
              }}
              placeholder="Enter mobile number"
              selectionColor={COLORS.purple}
            />
          </View>

          <View style={{ marginTop: SIZES.padding * 2 }}>
            <Text style={{ color: COLORS.black, ...FONTS.body3 }}>
              Password
            </Text>
            <TextInput
              style={{
                marginVertical: SIZES.padding,
                borderBottomWidth: 1,
                height: 40,
                ...FONTS.body3,
              }}
              placeholder="Enter Password"
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
            <Text style={{ color: COLORS.white, ...FONTS.h4 }}>Sign In</Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            marginTop: SIZES.padding,
          }}
        >
          <Text style={{ ...FONTS.body4 }}>Don't have an account?</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate("SignUp")}
            style={{ marginLeft: SIZES.base }}
          >
            <Text style={{ ...FONTS.h6, color: COLORS.purple }}>Sign Up</Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            marginTop: 50,
          }}
        >
          <Text style={{ ...FONTS.body4 }}>
            By using our services, you are agreeing to our
          </Text>
          <View style={{ flexDirection: "row" }}>
            <TouchableOpacity>
              <Text style={{ ...FONTS.h6, color: COLORS.purple }}>Terms</Text>
            </TouchableOpacity>
            <Text style={{ paddingHorizontal: 4 }}>and</Text>
            <TouchableOpacity>
              <Text style={{ ...FONTS.h6, color: COLORS.purple }}>
                Privacy Policy
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default SignInScreen;
