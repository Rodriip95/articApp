import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import TextView from "./TextView";
import { EnumTypeText } from "../types/textEnums";

interface iErrorMsg {
  onPress: () => void;
}

const ErrorMsg = ({ onPress }: iErrorMsg) => {
  return (
    <View style={styles.container}>
      <TextView
        text="Hubo un problema al cargar las obras de arte."
        styles={{ textAlign: "center" }}
        semibold
        typeText={EnumTypeText.MIN}
      />
      <TouchableOpacity onPress={onPress}>
        <TextView text="Reintentar" styles={styles.text} semibold />
      </TouchableOpacity>
    </View>
  );
};

export default ErrorMsg;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    borderLeftWidth: 2,
    borderBottomWidth: 2,
    padding: 20,
    marginVertical: 10,
    alignItems: "center",
  },
  text: {
    color: "#2973B2",
    paddingTop: 5,
  },
});
