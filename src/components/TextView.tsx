import {
  StyleProp,
  StyleSheet,
  StyleSheetProperties,
  Text,
  TextStyle,
  View,
} from "react-native";
import React from "react";
import { useFonts } from "expo-font";
import { EnumTypeText } from "../types/textEnums";

interface iTextView {
  text: string;
  semibold?: boolean;
  styles?: StyleProp<TextStyle>;
  color?: string;
  typeText?: EnumTypeText;
}

const TextView = ({
  text,
  semibold,
  styles: stylesProps,
  color,
  typeText,
}: iTextView) => {
  const stylesComponent = StyleSheet.create({
    family: {
      fontFamily: semibold ? "NotoSerif-semibold" : "NotoSerif-regular",
      color: color ? color : "#000",
      fontSize: typeText ? typeText : EnumTypeText.MIN,
      margin: 0,
      padding: 0,
      lineHeight: 32,
    },
  });

  return <Text style={[stylesComponent.family, stylesProps]}>{text}</Text>;
};

export default TextView;
