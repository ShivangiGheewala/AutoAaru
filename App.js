/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from "react";
import styled from "styled-components";
import { ScrollView, Text } from "react-native";
import Product from "./Components/Product";
import Button from "./Components/Button";
import { getFirebaseConfiguration } from "./Common/functions";

let item = [];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ServiceList: []
    };
  }

  componentDidMount() {
    let firebaseConfig = getFirebaseConfiguration();
    firebaseConfig
      .database()
      .ref("Products/")
      .on("value", dataSnapshot => {
        dataSnapshot.forEach(child => {
          item.push({
            key: child.key,
            title: child._value.productTitle,
            desp: child._value.productDescription,
            price: child._value.productPrice,
            image: child._value.productImage
          });
        });
        this.setState({
          ServiceList: item
        });
      });
  }

  render() {
    return (
      <Container>
        <Header />
        <Content>
          <ScrollView
            showsVerticalScrollIndicator={false}
            style={{
              paddingBottom: 10
            }}
          >
            {this.state.ServiceList.map(list => (
              <Product
                key={list.key}
                title={list.title}
                description={list.desp}
                image={list.image}
              />
            ))}
          </ScrollView>
          <Button text="Book Service" />
        </Content>
      </Container>
    );
  }
}

export default App;
const Container = styled.View`
  flex: 1;
  background: white;
`;
const Top = styled.View`
  height: 5%;
  background: black;
`;
const Header = styled.View`
  width: 100%;
  height: 13%;
  border-width: 0.5;
  border-color: #707070;
  background: #87211e;
  box-shadow: 2px 2px #a52724;
`;
const Content = styled.View`
  align-items: center;
  padding: 20px;
  height: 87%;
  padding-bottom: 20;
`;
