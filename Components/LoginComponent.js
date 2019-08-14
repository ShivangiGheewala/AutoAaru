import React from "react";
import { TouchableOpacity } from "react-native";
import styled from "styled-components";
import Button from "./Button";
import EditText from "./EditText";
import { connect } from "react-redux";
import LinearGradient from "react-native-linear-gradient";
import { getPageData } from "../actions/index";

const mapStateToProps = state => {
  return {
    login: state.loginData
  };
};
const mapDispatchToProps = dispatch => {
  return {
    changeToSignUP: () =>
      dispatch({
        type: "SIGNUP"
      }),
    changeToLogin: () =>
      dispatch({
        type: "LOGIN"
      })
  };
};

class LoginComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Container login={this.props.login}>
        <Header login={this.props.login}>
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
            <TouchableOpacity
              style={{ marginTop: "6%", marginLeft: "15%" }}
              onPress={this.props.changeToLogin}
            >
              <LoginText>Login</LoginText>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                marginTop: "6%",
                marginRight: "15%"
              }}
              onPress={this.props.changeToSignUP}
            >
              <SignUpText>Sign Up</SignUpText>
            </TouchableOpacity>
          </LinearGradient>
        </Header>
        <Content login={this.props.login}>
          <EditText
            placeholderName="Email"
            title="Email"
            login={this.props.login}
          />
          <EditText
            placeholderName="Password"
            title="Password"
            login={this.props.login}
          />
          {!this.props.login && (
            <EditText
              placeholderName="Confirm Password"
              title="Confirm Password"
              login={this.props.login}
            />
          )}
          <TextContainer>
            <Text>Forgot Password?</Text>
          </TextContainer>
        </Content>
        <SubContent>
          <Button text="Login" />
        </SubContent>
      </Container>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginComponent);

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
  width: 90%;
  border-radius: 14;
  height: ${({ login }) => (login === true && "50%") || "55%"};
`;
const Header = styled.View`
  height: ${({ login }) => (login === true && "20%") || "15%"};
  width: 100%;
  flex-direction: row;
`;
const Content = styled.View`
  height: ${({ login }) => (login === true && "65%") || "70%"};
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
