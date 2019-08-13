import React from "react";
import { TouchableOpacity } from "react-native";
import styled from "styled-components";
import Button from "./Button";
import EditText from "./EditText";
import LinearGradient from "react-native-linear-gradient";

const LoginComponent = props => (
  <Container>
    <Header>
      <LinearGradient
        colors={["#FF9800", "#DE4829", "#F83E12"]}
        style={{
          flex: 1,
          width: "100%",
          height: "100%",
          borderRadius: 14,
          flexDirection: "row",
          justifyContent: "space-between"
        }}
      >
        <TouchableOpacity style={{ marginTop: "6%", marginLeft: "15%" }}>
          <LoginText>Login</LoginText>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            marginTop: "6%",
            marginRight: "15%"
          }}
        >
          <SignUpText>Sign Up</SignUpText>
        </TouchableOpacity>
      </LinearGradient>
    </Header>
    <Content>
      <EditText placeholderName="Email" title="Email" />
      <EditText placeholderName="Password" title="Password" />
      {/* <EditText placeholderName="Confirm Password" title="Confirm Password" /> */}
      <TextContainer>
        <Text>Forgot Password?</Text>
      </TextContainer>
    </Content>
    <SubContent>
      <Button text="Login" />
    </SubContent>
  </Container>
);

export default LoginComponent;

const Text = styled.Text`
  font-size: 13;
  font-weight: normal;
  color: #212121;
  padding-left: 10;
`;
const TextContainer = styled.View`
  margin-top: 2%;
  width: 90%;
`;
const Container = styled.View`
  position: absolute;
  top: 35%;
  background: white;
  height: 50%;
  width: 90%;
  border-radius: 14;
`;
const Header = styled.View`
  height: 20%;
  width: 100%;
  flex-direction: row;
`;
const Content = styled.View`
  height: 65%;
  align-items: center;
`;
const SubContent = styled.View`
  height: 15%;
  justify-content: center;
`;
const LoginText = styled.Text`
  font-size: 22.5;
  font-weight: 600;
  color: white;
`;
const SignUpText = styled.Text`
  font-size: 22.5;
  font-weight: 600;
  color: white;
`;
