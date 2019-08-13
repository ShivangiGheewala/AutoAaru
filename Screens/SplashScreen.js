/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";

const mapStateToProps = state => {
  return {
    link: state.data
  };
};
class SplashScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Container>
        <Text>{this.props.link} </Text>
      </Container>
    );
  }
}

export default connect(mapStateToProps)(SplashScreen);
const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;
const Text = styled.Text`
  font-size: 18;
  font-weight: normal;
  color: #000000;
`;
