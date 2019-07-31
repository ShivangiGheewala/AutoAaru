import React from "react";
import { TouchableOpacity } from "react-native";
import styled from "styled-components";

const Button = props => (
  <TouchableOpacity
    style={{
      width: 317,
      height: 40,
      backgroundColor: "#a52724",
      borderColor: "#111111",
      borderRadius: 10,
      marginTop: "3%",
      alignItems: "center"
    }}
  >
    <Text> {props.text}</Text>
  </TouchableOpacity>
);
export default Button;

const Text = styled.Text`
  font-size: 20;
  padding-top: 5;
  font-weight: normal;
  color: #f2f2f2;
`;
