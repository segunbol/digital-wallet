import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  SafeAreaView,
} from "react-native";

import { MaterialIcons, MaterialCommunityIcons } from "@expo/vector-icons";

import { COLORS, SIZES, FONTS } from "../constants";
import FocusedStatusBar from "../components/FocusedStatusBar";

const HistoryScreen = () => {
  return (
    <SafeAreaView
      style={{
        padding: SIZES.padding2,
        height: "100%",
        backgroundColor: COLORS.white,
      }}
    >
      <FocusedStatusBar backgroundColor={COLORS.purple} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <View style={{ flexDirection: "row" }}>
            <Image
              source={require("../../assets/images/profile.jpg")}
              resizeMode="contain"
              style={{
                width: 40,
                height: 40,
                borderRadius: SIZES.base,
                marginRight: SIZES.base,
              }}
            />
            <View>
              <Text style={{ ...FONTS.body3, color: COLORS.darkgray }}>
                Hello,
              </Text>
              <Text
                style={{
                  ...FONTS.h5,
                  color: COLORS.black,
                }}
              >
                Reynan Decena
              </Text>
            </View>
          </View>
          <TouchableOpacity>
            <MaterialIcons name="notifications-none" size={24} color="black" />
          </TouchableOpacity>
        </View>
        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
            marginTop: 32,
            backgroundColor: "#F5F5F5",
            padding: SIZES.padding2,
            borderRadius: SIZES.padding2,
          }}
        >
          <Text
            style={{
              ...FONTS.body3,
              marginTop: SIZES.base,
              textAlign: "center",
            }}
          >
            Total Balance
          </Text>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginVertical: SIZES.base,
            }}
          >
            <MaterialCommunityIcons
              name="ethereum"
              size={24}
              color={COLORS.purple}
            />
            <Text style={{ ...FONTS.h3, marginTop: SIZES.base }}>
              13.201 ETH
            </Text>
          </View>
          <Text style={{ ...FONTS.h2, color: COLORS.purple }}>$25, 906.88</Text>
        </View>

        <View
          style={{
            padding: SIZES.padding2,
            marginTop: 32,
            backgroundColor: "#F5F5F5",
            borderRadius: SIZES.padding2,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Text style={{ ...FONTS.h5 }}>Transaction History</Text>
            <TouchableOpacity>
              <MaterialCommunityIcons
                name="filter-variant"
                size={24}
                color={COLORS.black}
              />
            </TouchableOpacity>
          </View>

          <View
            style={{
              backgroundColor: COLORS.white,
              padding: SIZES.base,
              borderRadius: SIZES.base,
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: 20,
            }}
          >
            <View style={{ flexDirection: "row" }}>
              <MaterialCommunityIcons
                name="check-circle-outline"
                size={24}
                color={COLORS.primary}
              />
              <View style={{ marginLeft: SIZES.base }}>
                <Text style={{ ...FONTS.h6 }}>Received BTC</Text>
                <Text style={{ ...FONTS.body5 }}>15 Dec. 2022 3:35 PM</Text>
              </View>
            </View>
            <View>
              <Text style={{ ...FONTS.h6 }}>+0.7895 BTC</Text>
              <Text style={{ ...FONTS.body5, color: COLORS.gray }}>
                11, 420.00 USD
              </Text>
            </View>
          </View>

          <View
            style={{
              backgroundColor: COLORS.white,
              padding: SIZES.base,
              borderRadius: SIZES.base,
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: SIZES.base,
            }}
          >
            <View style={{ flexDirection: "row" }}>
              <MaterialCommunityIcons
                name="close-circle-outline"
                size={24}
                color={COLORS.red}
              />

              <View style={{ marginLeft: SIZES.base }}>
                <Text style={{ ...FONTS.h6 }}>Sent TRX</Text>
                <Text style={{ ...FONTS.body5 }}>15 Dec. 2022 3:35 PM</Text>
              </View>
            </View>
            <View>
              <Text style={{ ...FONTS.h6 }}>-0.6874 TRX</Text>
              <Text style={{ ...FONTS.body5, color: COLORS.gray }}>
                11, 420.00 USD
              </Text>
            </View>
          </View>

          <View
            style={{
              backgroundColor: COLORS.white,
              padding: SIZES.base,
              borderRadius: SIZES.base,
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: SIZES.base,
            }}
          >
            <View style={{ flexDirection: "row" }}>
              <MaterialCommunityIcons
                name="check-circle-outline"
                size={24}
                color={COLORS.primary}
              />
              <View style={{ marginLeft: SIZES.base }}>
                <Text style={{ ...FONTS.h6 }}>Received BTC</Text>
                <Text style={{ ...FONTS.body5 }}>15 Dec. 2022 3:35 PM</Text>
              </View>
            </View>
            <View>
              <Text style={{ ...FONTS.h6 }}>+0.7895 BTC</Text>
              <Text style={{ ...FONTS.body5, color: COLORS.gray }}>
                11, 420.00 USD
              </Text>
            </View>
          </View>

          <View
            style={{
              backgroundColor: COLORS.white,
              padding: SIZES.base,
              borderRadius: SIZES.base,
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: SIZES.base,
            }}
          >
            <View style={{ flexDirection: "row" }}>
              <MaterialCommunityIcons
                name="check-circle-outline"
                size={24}
                color={COLORS.primary}
              />
              <View style={{ marginLeft: SIZES.base }}>
                <Text style={{ ...FONTS.h6 }}>Received BTC</Text>
                <Text style={{ ...FONTS.body5 }}>15 Dec. 2022 3:35 PM</Text>
              </View>
            </View>
            <View>
              <Text style={{ ...FONTS.h6 }}>+0.7895 BTC</Text>
              <Text style={{ ...FONTS.body5, color: COLORS.gray }}>
                11, 420.00 USD
              </Text>
            </View>
          </View>

          <View
            style={{
              backgroundColor: COLORS.white,
              padding: SIZES.base,
              borderRadius: SIZES.base,
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: SIZES.base,
            }}
          >
            <View style={{ flexDirection: "row" }}>
              <MaterialCommunityIcons
                name="close-circle-outline"
                size={24}
                color={COLORS.red}
              />

              <View style={{ marginLeft: SIZES.base }}>
                <Text style={{ ...FONTS.h6 }}>Sent TRX</Text>
                <Text style={{ ...FONTS.body5 }}>15 Dec. 2022 3:35 PM</Text>
              </View>
            </View>
            <View>
              <Text style={{ ...FONTS.h6 }}>-0.6874 TRX</Text>
              <Text style={{ ...FONTS.body5, color: COLORS.gray }}>
                11, 420.00 USD
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HistoryScreen;
