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

class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Container>
        <Text>Home Screen </Text>
      </Container>
    );
  }
}

export default HomeScreen;
const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;
const Text = styled.Text`
  font-size: 18;
  font-weight: normal;
  color: #ffffff;
`;
