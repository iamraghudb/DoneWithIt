import React from "react";
import { Text, TouchableOpacity, Dimensions, View } from "react-native";

const width = Dimensions.get("window").width;

const Button = ({
  onPress,
  text,
  type = "filled",
  bordered = false,
  size = "large",
  disabled,
}) => {
  const large = width / 1.3;
  const small = width / 2;
  const btnSize = size === "large" ? large : small;
  const btnBgColor = type === "filled" ? "#3f51b5" : "transparent";
  const btnTextColor = type === "filled" ? "#ffffff" : "#6371c2";
  const btnBorderRadius = bordered ? 30 : 5;

  const containerCommonStyle = {
    backgroundColor: btnBgColor,
    paddingVertical: 8,
    width: btnSize,
    borderRadius: btnBorderRadius,
  };

  const textCommonStyle = {
    color: btnTextColor,
    fontSize: 16,
    textTransform: "uppercase",
    textAlign: "center",
  };

  const border = type === "outlined" && {
    borderColor: "#e7e7e7",
    borderWidth: 2,
  };

  const disabledBtn = {
    backgroundColor: "#cccccc",
    paddingVertical: 8,
    width: btnSize,
    borderRadius: btnBorderRadius,
  };
  return (
    <TouchableOpacity onPress={onPress} disabled={disabled}>
      <View style={disabled ? [disabledBtn] : [containerCommonStyle, border]}>
        <Text style={[textCommonStyle]}> {text} </Text>
      </View>
    </TouchableOpacity>
  );
};

export default Button;
