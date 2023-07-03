import React, { useState, useEffect } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { Camera } from "expo-camera";

import FocusedStatusBar from "../components/FocusedStatusBar";
import { COLORS, FONTS, SIZES, icons, images } from "../constants";
import { MaterialCommunityIcons, Ionicons } from "@expo/vector-icons";

const ScanScreen = ({ navigation }) => {
  const [hasPermission, setHasPermission] = useState(null);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  function onBarCodeRead(result) {
    console.log(result.data);
  }

  return (
    <View style={{ flex: 1, backgroundColor: COLORS.transparent }}>
      <FocusedStatusBar backgroundColor={COLORS.purple} />
      <Camera
        ref={(ref) => {
          this.camera = ref;
        }}
        style={{ flex: 1 }}
        captureAudio={false}
        type={Camera.Constants.Type.back}
        flashMode={Camera.Constants.FlashMode.off}
        onBarCodeScanned={onBarCodeRead}
        androidCameraPermissionOptions={{
          title: "Permission to use camera",
          message: "Camera is required for barcode scanning",
          buttonPositive: "OK",
          buttonNegative: "Cancel",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            marginTop: SIZES.padding * 4,
            paddingHorizontal: SIZES.padding * 3,
          }}
        >
          <TouchableOpacity
            style={{
              width: 45,
              alignItems: "center",
              justifyContent: "center",
            }}
            onPress={() => navigation.navigate("HomeTab")}
          >
            <Image
              source={icons.close}
              style={{
                height: 20,
                width: 20,
                tintColor: COLORS.white,
              }}
            />
          </TouchableOpacity>

          <View
            style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
          >
            <Text style={{ color: COLORS.white, ...FONTS.body3 }}>
              Scan for Payment
            </Text>
          </View>

          <TouchableOpacity
            style={{
              height: 45,
              width: 45,
              backgroundColor: COLORS.green,
              borderRadius: 10,
              alignItems: "center",
              justifyContent: "center",
            }}
            onPress={() => console.log("Info")}
          >
            <MaterialCommunityIcons
              name="information-outline"
              size={24}
              color={COLORS.white}
            />
          </TouchableOpacity>
        </View>

        <View
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Image
            source={require("../../assets/images/focus.png")}
            resizeMode="stretch"
            style={{
              marginTop: "-55%",
              width: 200,
              height: 300,
            }}
          />
        </View>

        <View
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: 220,
            padding: SIZES.padding * 3,
            borderTopLeftRadius: SIZES.radius,
            borderTopRightRadius: SIZES.radius,
            backgroundColor: COLORS.white,
          }}
        >
          <Text style={{ ...FONTS.h4 }}>Another payment methods</Text>

          <View
            style={{
              flex: 1,
              flexDirection: "row",
              alignItems: "flex-start",
              marginTop: SIZES.padding * 2,
            }}
          >
            <TouchableOpacity
              style={{
                flexDirection: "row",
                alignItems: "center",
              }}
              onPress={() => console.log("Phone Number")}
            >
              <View
                style={{
                  width: 40,
                  height: 40,
                  backgroundColor: COLORS.lightpurple,
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: 10,
                }}
              >
                <Ionicons
                  name="ios-phone-portrait-outline"
                  size={24}
                  color={COLORS.purple}
                />
              </View>
              <Text style={{ marginLeft: SIZES.padding, ...FONTS.body4 }}>
                Phone Number
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginLeft: SIZES.padding * 2,
              }}
              onPress={() => console.log("Barcode")}
            >
              <View
                style={{
                  width: 40,
                  height: 40,
                  backgroundColor: COLORS.lightGreen,
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: 10,
                }}
              >
                <MaterialCommunityIcons
                  name="barcode"
                  size={24}
                  color={COLORS.primary}
                />
              </View>
              <Text style={{ marginLeft: SIZES.padding, ...FONTS.body4 }}>
                Barcode
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Camera>
    </View>
  );
};

export default ScanScreen;
