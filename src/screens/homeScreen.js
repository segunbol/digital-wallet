import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  SafeAreaView,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import {
  MaterialIcons,
  MaterialCommunityIcons,
  FontAwesome,
  Feather,
  FontAwesome5,
  Ionicons,
} from "@expo/vector-icons";

import { COLORS, SIZES, FONTS } from "../constants";
import FocusedStatusBar from "../components/FocusedStatusBar";

const HomeScreen = () => {
  return (
    <SafeAreaView>
      <FocusedStatusBar backgroundColor={COLORS.purple} />
      <LinearGradient
        colors={[COLORS.white, COLORS.white]}
        style={{ padding: SIZES.padding2, height: "100%" }}
      >
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
              <MaterialIcons
                name="notifications-none"
                size={24}
                color="black"
              />
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
            <Text style={{ ...FONTS.h2, color: COLORS.purple }}>
              $25, 906.88
            </Text>
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
                alignItems: "center",
                justifyContent: "space-between",
                flexDirection: "row",
              }}
            >
              <TouchableOpacity style={{ alignItems: "center" }}>
                <View
                  style={{
                    borderWidth: 1,
                    borderColor: COLORS.darkgray,
                    paddingHorizontal: SIZES.base,
                    paddingVertical: SIZES.base,
                    borderRadius: SIZES.base,
                    alignItems: "center",
                    width: 46,
                  }}
                >
                  <FontAwesome name="dollar" size={18} color="black" />
                </View>
                <Text style={{ ...FONTS.h6, marginTop: SIZES.base }}>
                  Purchase
                </Text>
              </TouchableOpacity>

              <TouchableOpacity style={{ alignItems: "center" }}>
                <View
                  style={{
                    borderWidth: 1,
                    borderColor: COLORS.darkgray,
                    paddingHorizontal: SIZES.padding,
                    paddingVertical: SIZES.base,
                    borderRadius: SIZES.base,
                    alignItems: "center",
                    width: 46,
                  }}
                >
                  <Feather name="send" size={18} color="black" />
                </View>
                <Text style={{ ...FONTS.h6, marginTop: SIZES.base }}>Send</Text>
              </TouchableOpacity>

              <TouchableOpacity style={{ alignItems: "center" }}>
                <View
                  style={{
                    borderWidth: 1,
                    borderColor: COLORS.gray,
                    paddingHorizontal: SIZES.padding,
                    paddingVertical: SIZES.base,
                    borderRadius: SIZES.base,
                    alignItems: "center",
                    width: 46,
                  }}
                >
                  <MaterialCommunityIcons
                    name="call-received"
                    size={18}
                    color="black"
                  />
                </View>
                <Text style={{ ...FONTS.h6, marginTop: SIZES.base }}>
                  Receive
                </Text>
              </TouchableOpacity>

              <TouchableOpacity style={{ alignItems: "center" }}>
                <View
                  style={{
                    borderWidth: 1,
                    borderColor: COLORS.gray,
                    paddingHorizontal: SIZES.padding,
                    paddingVertical: SIZES.base,
                    borderRadius: SIZES.base,
                    alignItems: "center",
                    width: 46,
                  }}
                >
                  <FontAwesome5 name="exchange-alt" size={18} color="black" />
                </View>
                <Text style={{ ...FONTS.h6, marginTop: SIZES.base }}>
                  Exchange
                </Text>
              </TouchableOpacity>
            </View>
            <View style={{ marginTop: SIZES.h2 }}>
              <Text style={{ ...FONTS.h5 }}>My Wallets</Text>
              <TouchableOpacity
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  backgroundColor: COLORS.purple,
                  padding: SIZES.base,
                  borderRadius: SIZES.base,
                  marginTop: SIZES.padding2,
                }}
              >
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <View
                    style={{
                      backgroundColor: COLORS.lightGray,
                      borderRadius: SIZES.base,
                      padding: SIZES.base,
                      marginRight: SIZES.base,
                    }}
                  >
                    <Image
                      source={require("../../assets/images/MetaMask.png")}
                      resizeMode="contain"
                      style={{ width: 30, height: 30 }}
                    />
                  </View>
                  <View>
                    <Text style={{ ...FONTS.body4, color: COLORS.white }}>
                      MetaMask
                    </Text>
                    <View
                      style={{ flexDirection: "row", alignItems: "center" }}
                    >
                      <Text
                        style={{
                          ...FONTS.body4,
                          color: COLORS.lightGray,
                          marginRight: SIZES.base,
                        }}
                      >
                        bc1qxy2k...fgh0wth
                      </Text>
                      <TouchableOpacity>
                        <MaterialIcons
                          name="content-copy"
                          size={16}
                          color={COLORS.white}
                        />
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>

                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <MaterialCommunityIcons
                    name="ethereum"
                    size={24}
                    color={COLORS.lightGray}
                  />
                  <Text style={{ ...FONTS.h6, color: COLORS.lightGray }}>
                    2.1238
                  </Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  backgroundColor: COLORS.purple,
                  padding: SIZES.base,
                  borderRadius: SIZES.base,
                  marginTop: SIZES.padding2,
                }}
              >
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <View
                    style={{
                      backgroundColor: COLORS.lightGray,
                      borderRadius: SIZES.base,
                      padding: SIZES.base,
                      marginRight: SIZES.base,
                    }}
                  >
                    <Image
                      source={require("../../assets/images/Trust.png")}
                      resizeMode="contain"
                      style={{ width: 30, height: 30 }}
                    />
                  </View>
                  <View>
                    <Text style={{ ...FONTS.body4, color: COLORS.white }}>
                      Trust Wallet
                    </Text>
                    <View
                      style={{ flexDirection: "row", alignItems: "center" }}
                    >
                      <Text
                        style={{
                          ...FONTS.body4,
                          color: COLORS.lightGray,
                          marginRight: SIZES.base,
                        }}
                      >
                        afj34mjs...pKljNt4y
                      </Text>
                      <TouchableOpacity>
                        <MaterialIcons
                          name="content-copy"
                          size={16}
                          color={COLORS.white}
                        />
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>

                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <MaterialCommunityIcons
                    name="ethereum"
                    size={24}
                    color={COLORS.lightGray}
                  />
                  <Text style={{ ...FONTS.h6, color: COLORS.lightGray }}>
                    8.8192
                  </Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  backgroundColor: COLORS.purple,
                  padding: SIZES.base,
                  borderRadius: SIZES.base,
                  marginTop: SIZES.padding2,
                }}
              >
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <View
                    style={{
                      backgroundColor: COLORS.lightGray,
                      borderRadius: SIZES.base,
                      padding: SIZES.base,
                      marginRight: SIZES.base,
                    }}
                  >
                    <Image
                      source={require("../../assets/images/coinbase.png")}
                      resizeMode="contain"
                      style={{ width: 30, height: 30 }}
                    />
                  </View>
                  <View>
                    <Text style={{ ...FONTS.body4, color: COLORS.white }}>
                      Coinbase
                    </Text>
                    <View
                      style={{ flexDirection: "row", alignItems: "center" }}
                    >
                      <Text
                        style={{
                          ...FONTS.body4,
                          color: COLORS.lightGray,
                          marginRight: SIZES.base,
                        }}
                      >
                        afj34mjs...pKljNt4y
                      </Text>
                      <TouchableOpacity>
                        <MaterialIcons
                          name="content-copy"
                          size={16}
                          color={COLORS.white}
                        />
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>

                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <MaterialCommunityIcons
                    name="ethereum"
                    size={24}
                    color={COLORS.lightGray}
                  />
                  <Text style={{ ...FONTS.h6, color: COLORS.lightGray }}>
                    3.1425
                  </Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  backgroundColor: COLORS.purple,
                  padding: SIZES.base,
                  borderRadius: SIZES.base,
                  marginTop: SIZES.padding2,
                }}
              >
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <View
                    style={{
                      backgroundColor: COLORS.lightGray,
                      borderRadius: SIZES.base,
                      padding: SIZES.base,
                      marginRight: SIZES.base,
                    }}
                  >
                    <Image
                      source={require("../../assets/images/exodus.png")}
                      resizeMode="contain"
                      style={{ width: 30, height: 30 }}
                    />
                  </View>
                  <View>
                    <Text style={{ ...FONTS.body4, color: COLORS.white }}>
                      Exodus
                    </Text>
                    <View
                      style={{ flexDirection: "row", alignItems: "center" }}
                    >
                      <Text
                        style={{
                          ...FONTS.body4,
                          color: COLORS.lightGray,
                          marginRight: SIZES.base,
                        }}
                      >
                        afj34mjs...pKljNt4y
                      </Text>
                      <TouchableOpacity>
                        <MaterialIcons
                          name="content-copy"
                          size={16}
                          color={COLORS.white}
                        />
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>

                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <MaterialCommunityIcons
                    name="ethereum"
                    size={24}
                    color={COLORS.lightGray}
                  />
                  <Text style={{ ...FONTS.h6, color: COLORS.lightGray }}>
                    3.1425
                  </Text>
                </View>
              </TouchableOpacity>
            </View>

            <View style={{ marginTop: SIZES.h2 }}>
              <Text style={{ ...FONTS.h5 }}>Favorites</Text>
              <TouchableOpacity
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  padding: SIZES.base,
                  borderRadius: SIZES.base,
                  marginTop: SIZES.padding2,
                  backgroundColor: COLORS.lightGray,
                }}
              >
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <View
                    style={{
                      backgroundColor: COLORS.lightGray,
                      borderRadius: SIZES.base,
                      padding: SIZES.base,
                      marginRight: SIZES.base,
                    }}
                  >
                    <Image
                      source={require("../../assets/images/cardano.png")}
                      resizeMode="contain"
                      style={{ width: 30, height: 30 }}
                    />
                  </View>
                  <View>
                    <Text style={{ ...FONTS.h6, color: COLORS.black }}>
                      Cardano (ADA)
                    </Text>
                    <View style={{ flexDirection: "row" }}>
                      <Ionicons
                        name="ios-caret-down-outline"
                        size={16}
                        color={COLORS.red}
                      />
                      <Text
                        style={{
                          ...FONTS.body4,
                          color: COLORS.red,
                        }}
                      >
                        4.92%
                      </Text>
                    </View>
                  </View>
                </View>

                <View>
                  <Text style={{ ...FONTS.h6 }}>$2.9991</Text>
                  <Text style={{ ...FONTS.body5, color: COLORS.black }}>
                    11420.00
                  </Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  padding: SIZES.base,
                  borderRadius: SIZES.base,
                  marginTop: SIZES.padding2,
                  backgroundColor: COLORS.lightGray,
                }}
              >
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <View
                    style={{
                      backgroundColor: COLORS.lightGray,
                      borderRadius: SIZES.base,
                      padding: SIZES.base,
                      marginRight: SIZES.base,
                    }}
                  >
                    <Image
                      source={require("../../assets/images/tether.png")}
                      resizeMode="contain"
                      style={{ width: 30, height: 30 }}
                    />
                  </View>
                  <View>
                    <Text style={{ ...FONTS.h6, color: COLORS.black }}>
                      Tether (USDT)
                    </Text>
                    <View style={{ flexDirection: "row" }}>
                      <Ionicons
                        name="ios-caret-up-outline"
                        size={16}
                        color={COLORS.primary}
                      />
                      <Text
                        style={{
                          ...FONTS.body4,
                          color: COLORS.primary,
                        }}
                      >
                        2.05%
                      </Text>
                    </View>
                  </View>
                </View>

                <View>
                  <Text style={{ ...FONTS.h6 }}>$0.0291</Text>
                  <Text style={{ ...FONTS.body5, color: COLORS.black }}>
                    9420.00
                  </Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  padding: SIZES.base,
                  borderRadius: SIZES.base,
                  marginTop: SIZES.padding2,
                  backgroundColor: COLORS.lightGray,
                }}
              >
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <View
                    style={{
                      backgroundColor: COLORS.lightGray,
                      borderRadius: SIZES.base,
                      padding: SIZES.base,
                      marginRight: SIZES.base,
                    }}
                  >
                    <Image
                      source={require("../../assets/images/Bitcoin.png")}
                      resizeMode="contain"
                      style={{ width: 30, height: 30 }}
                    />
                  </View>
                  <View>
                    <Text style={{ ...FONTS.h6, color: COLORS.black }}>
                      Bitcoin
                    </Text>
                    <View style={{ flexDirection: "row" }}>
                      <Ionicons
                        name="ios-caret-up-outline"
                        size={16}
                        color={COLORS.primary}
                      />
                      <Text
                        style={{
                          ...FONTS.body4,
                          color: COLORS.primary,
                        }}
                      >
                        2.05%
                      </Text>
                    </View>
                  </View>
                </View>

                <View>
                  <Text style={{ ...FONTS.h6 }}>$0.0291</Text>
                  <Text style={{ ...FONTS.body5, color: COLORS.black }}>
                    9420.00
                  </Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  padding: SIZES.base,
                  borderRadius: SIZES.base,
                  marginTop: SIZES.padding2,
                  backgroundColor: COLORS.lightGray,
                }}
              >
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <View
                    style={{
                      backgroundColor: COLORS.lightGray,
                      borderRadius: SIZES.base,
                      padding: SIZES.base,
                      marginRight: SIZES.base,
                    }}
                  >
                    <Image
                      source={require("../../assets/images/dash.png")}
                      resizeMode="contain"
                      style={{ width: 30, height: 30 }}
                    />
                  </View>
                  <View>
                    <Text style={{ ...FONTS.h6, color: COLORS.black }}>
                      Dash
                    </Text>
                    <View style={{ flexDirection: "row" }}>
                      <Ionicons
                        name="ios-caret-down-outline"
                        size={16}
                        color={COLORS.red}
                      />
                      <Text
                        style={{
                          ...FONTS.body4,
                          color: COLORS.red,
                        }}
                      >
                        4.92%
                      </Text>
                    </View>
                  </View>
                </View>

                <View>
                  <Text style={{ ...FONTS.h6 }}>$2.9991</Text>
                  <Text style={{ ...FONTS.body5, color: COLORS.black }}>
                    11420.00
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </LinearGradient>
    </SafeAreaView>
  );
};

export default HomeScreen;
