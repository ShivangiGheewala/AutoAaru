import React from "react";
import { TextInput } from "react-native";
import styled from "styled-components";

const EditText = props => (
  <Container>
    <Text>{props.title}</Text>
    <TextInput
      placeholder={props.placeholderName}
      style={{
        width: "100%",
        height: "60%",
        fontSize: 13,
        fontWeight: "normal",
        color: "#212121",
        marginTop: 5,
        padding: 6,
        borderWidth: 1,
        borderRadius: 2,
        borderStyle: "solid",
        borderColor: "#c8c8c8",
        margin: 0
      }}
    />
  </Container>
);
export default EditText;

const Container = styled.View`
  width: 90%;
  height: 35%;
  margin-top: 3%;
`;
const Text = styled.Text`
  font-size: 18;
  font-weight: 100;
  color: #000000;
`;
