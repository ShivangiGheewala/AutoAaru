/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from "react";
import styled from "styled-components";
import { ScrollView, StatusBar } from "react-native";
import Product from "./Components/Product";
import Button from "./Components/Button";
import { getFirebaseConfiguration } from "./Common/functions";
import axios from "axios";
import VideoComponent from "./Components/VideoComponent";

let item = [];

class ProductList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ServiceList: []
    };
  }

  componentDidMount() {
    let data;
    axios
      .get(
        "https://autoaaru-5c4e6.firebaseio.com/Products/.json?auth=1OOUgwPRFPY2HFkPNz4s4GdQvbxrjVvn97CBWSwL"
      )
      .then(response => {
        data = response.data;
        Object.keys(data).forEach(function(key) {
          //console.log(data[key].productTitle);
          item.push({
            key: key,
            title: data[key].productTitle,
            desp: data[key].productDescription,
            price: data[key].productPrice,
            image: data[key].productImage
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
        <StatusBar hidden />
        <Header>{<VideoComponent />}</Header>
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

export default ProductList;
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
  height: 20%;
  border-width: 0.5;
  border-color: #707070;
  background: #87211e;
  box-shadow: 2px 2px #a52724;
  align-items: center;
`;
const Content = styled.View`
  align-items: center;
  padding: 5px;
  height: 80%;
  padding-bottom: 20;
`;
