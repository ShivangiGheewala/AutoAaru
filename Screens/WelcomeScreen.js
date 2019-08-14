/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from "react";
import styled from "styled-components";
import VideoComponent from "../Components/VideoComponent";
import LoginComponent from "../Components/LoginComponent";
import { connect } from "react-redux";
import LinearGradient from "react-native-linear-gradient";

const mapStateToProps = state => {
  return {
    videoLink: state.urlData,
    login: state.loginData
  };
};

class WelcomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      timePassed: false
    };
  }

  render() {
    setTimeout(() => {
      this.setState({ timePassed: true });
    }, 5000);
    if (!this.state.timePassed) {
      return <Container />;
    } else {
      return (
        <Container>
          <VideoComponent link={this.props.videoLink} />
          <LinearGradient
            colors={["#FF9800", "#DE4829", "#F83E12"]}
            style={{
              width: "100%",
              height: "100%",
              position: "absolute",
              opacity: 0.3
            }}
          />
          <Logo source={require("../assests/logo.png")} />
          <LoginComponent />
          <Footer login={this.props.login}>
            <Text>Terms & conditions</Text>
            <LinkText>www.aaru.com.au</LinkText>
          </Footer>
        </Container>
      );
    }
  }
}

export default connect(mapStateToProps)(WelcomeScreen);
const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;
const Logo = styled.Image`
  position: absolute;
  top: 10%;
`;
const Footer = styled.View`
  position: absolute;
  top: ${({ login }) => (login === true && "86%") || "90%"};
  height: ${({ login }) => (login === true && "14%") || "10%"};
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
`;
const Text = styled.Text`
  font-size: 13;
  font-weight: normal;
  color: #ffffff;
`;
const LinkText = styled.Text`
  font-size: 13;
  font-weight: normal;
  color: #ffffff;
  margin-bottom: 5%;
`;
