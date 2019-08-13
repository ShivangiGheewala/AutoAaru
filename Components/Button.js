import React from "react";
import { TouchableOpacity } from "react-native";
import styled from "styled-components";
import LinearGradient from "react-native-linear-gradient";

const Button = props => (
  <TouchableOpacity
    style={{
      width: 155.82,
      height: 47,
      borderRadius: 14,
      alignSelf: "center"
    }}
  >
    <LinearGradient
      colors={["#FF9800", "#DE4829", "#F83E12"]}
      style={{
        flex: 1,
        width: "100%",
        height: "100%",
        borderRadius: 14,
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      <Text> {props.text}</Text>
    </LinearGradient>
  </TouchableOpacity>
);
export default Button;

const Text = styled.Text`
  font-size: 22.5;
  font-weight: 600;
  color: #ffffff;
`;
