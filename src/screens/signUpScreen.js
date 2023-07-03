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
import { LinearGradient } from "expo-linear-gradient";

import { COLORS, SIZES, FONTS, icons } from "../constants";
import FocusedStatusBar from "../components/FocusedStatusBar";

const SignUpScreen = ({ navigation }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [areas, setAreas] = useState([]);
  const [selectedArea, setSelectedArea] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    fetch("https://restcountries.com/v2/all")
      .then((response) => response.json())
      .then((data) => {
        let areaData = data.map((item) => {
          return {
            code: item.alpha2Code,
            name: item.name,
            callingCode: `+${item.callingCodes[0]}`,
            flag: `https://countryflagsapi.com/png/${item.alpha2Code}`,
          };
        });

        setAreas(areaData);

        if (areaData.length > 0) {
          let defaultData = areaData.filter((a) => a.code == "US");

          if (defaultData.length > 0) {
            setSelectedArea(defaultData[0]);
          }
        }
      });
  }, []);

  function renderAreaCodesModal() {
    const renderItem = ({ item }) => {
      return (
        <TouchableOpacity
          style={{ padding: SIZES.padding, flexDirection: "row" }}
          onPress={() => {
            setSelectedArea(item);
            setModalVisible(false);
          }}
        >
          <Image
            source={{ uri: item.flag }}
            style={{
              width: 30,
              height: 30,
              marginRight: 10,
            }}
          />
          <Text style={{ ...FONTS.body4 }}>{item.name}</Text>
        </TouchableOpacity>
      );
    };

    return (
      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <TouchableWithoutFeedback onPress={() => setModalVisible(false)}>
          <View
            style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
          >
            <View
              style={{
                height: 400,
                width: SIZES.width * 0.8,
                backgroundColor: COLORS.lightGray,
                borderRadius: SIZES.base,
                elevation: 7,
              }}
            >
              <FlatList
                data={areas}
                renderItem={renderItem}
                keyExtractor={(item) => item.code}
                showsVerticalScrollIndicator={false}
                style={{
                  padding: SIZES.padding * 2,
                  marginBottom: SIZES.padding * 2,
                }}
              />
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    );
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : null}
      style={{ flex: 1 }}
    >
      <FocusedStatusBar backgroundColor={COLORS.purple} />
      <LinearGradient
        colors={[COLORS.white, COLORS.white]}
        style={{ flex: 1, paddingHorizontal: SIZES.padding2 }}
      >
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
            <Text style={{ ...FONTS.h1 }}>Create your</Text>
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
            {/* Full Name */}
            <View style={{ marginTop: SIZES.padding * 2 }}>
              <Text style={{ color: COLORS.black, ...FONTS.body3 }}>
                Full Name
              </Text>
              <TextInput
                style={{
                  marginVertical: SIZES.padding,
                  borderBottomWidth: 1,
                  height: 40,
                  ...FONTS.body3,
                }}
                placeholder="Enter Full Name"
                selectionColor={COLORS.purple}
              />
            </View>

            {/* Phone Number */}
            <View style={{ marginTop: SIZES.padding * 2 }}>
              <Text style={{ color: COLORS.black, ...FONTS.body3 }}>
                Phone Number
              </Text>

              <View style={{ flexDirection: "row" }}>
                {/* Country Code */}
                <TouchableOpacity
                  style={{
                    width: 100,
                    height: 50,
                    marginHorizontal: 5,
                    borderBottomWidth: 1,
                    flexDirection: "row",
                    ...FONTS.body2,
                  }}
                  onPress={() => setModalVisible(true)}
                >
                  <View style={{ justifyContent: "center" }}>
                    <Image
                      source={icons.down}
                      style={{
                        width: 10,
                        height: 10,
                      }}
                    />
                  </View>
                  <View style={{ justifyContent: "center", marginLeft: 5 }}>
                    <Image
                      source={{ uri: selectedArea?.flag }}
                      resizeMode="contain"
                      style={{
                        width: 30,
                        height: 30,
                      }}
                    />
                  </View>

                  <View style={{ justifyContent: "center", marginLeft: 5 }}>
                    <Text style={{ ...FONTS.body3 }}>
                      {selectedArea?.callingCode}
                    </Text>
                  </View>
                </TouchableOpacity>

                {/* Phone Number */}
                <TextInput
                  style={{
                    flex: 1,
                    marginVertical: SIZES.padding,
                    borderBottomWidth: 1,
                    height: 40,
                    ...FONTS.body3,
                  }}
                  placeholder="Enter Phone Number"
                  selectionColor={COLORS.purple}
                />
              </View>
            </View>

            {/* Password */}
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

            <View style={{ marginTop: SIZES.padding * 2 }}>
              <Text style={{ color: COLORS.black, ...FONTS.body3 }}>
                Confirm Password
              </Text>
              <TextInput
                style={{
                  marginVertical: SIZES.padding,
                  borderBottomWidth: 1,
                  height: 40,
                  ...FONTS.body3,
                }}
                placeholder="Enter Password"
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
              <Text style={{ color: COLORS.white, ...FONTS.h4 }}>Sign Up</Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              marginTop: SIZES.padding,
              marginBottom: SIZES.padding2,
            }}
          >
            <Text style={{ ...FONTS.body4 }}>Already have an account?</Text>
            <TouchableOpacity
              onPress={() => navigation.navigate("SignIn")}
              style={{ marginLeft: SIZES.base }}
            >
              <Text style={{ ...FONTS.h6, color: COLORS.purple }}>Sign In</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </LinearGradient>
      {renderAreaCodesModal()}
    </KeyboardAvoidingView>
  );
};

export default SignUpScreen;
