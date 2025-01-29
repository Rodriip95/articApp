import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigation/navigation";
import { useAppSelector } from "../store/store";

const FavWidget = () => {
  const state = useAppSelector((state) => state.artworks);

  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const handlerNavigation = () => {
    navigation.navigate("FavsScreen");
  };

  return (
    <TouchableOpacity
      onPress={handlerNavigation}
      style={{
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 10,
      }}
    >
      <AntDesign name="arrowright" size={24} color="#fff" />
      <MaterialIcons name={"favorite-outline"} size={24} color="#fff" />
      {state.favs.length > 0 && <View style={styles.redPoint}></View>}
    </TouchableOpacity>
  );
};

export default FavWidget;

const styles = StyleSheet.create({
  redPoint: {
    position: "absolute",
    backgroundColor: "#e34000",
    width: 12,
    height: 12,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
    right: 4,
    top: -1,
  },
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 10,
  },
});
