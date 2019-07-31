import React from "react";
import styled from "styled-components";

const Product = props => (
  <Container>
    <Header>
      <Title>{props.title}</Title>
    </Header>
    <Content>
      <Image source={{ uri: props.image }} />
      <Description>
        <Text>{props.description}</Text>
      </Description>
    </Content>
  </Container>
);
export default Product;
const Container = styled.View`
  width: 319;
  height: 160;
  background: white;
  border-color: #000000;
  border-width: 0.3;
  margin-top: 18px;
`;
const Header = styled.View`
  height: 30;
  align-items: center;
  justify-content: center;
  border-bottom-color: #000000;
  border-bottom-width: 0.3;
`;
const Content = styled.View`
  flex-direction: row;
`;
const Title = styled.Text`
  font-weight: bold;
  font-size: 18;
  color: #991e21;
`;
const Text = styled.Text`
  font-weight: normal;
  font-size: 12;
  color: #000000;
  line-height: 20;
`;
const Description = styled.View`
  width: 181;
  margin-left: 130px;
  margin-top: 10px;
`;
const Image = styled.Image`
  height: 83;
  width: 83;
  position: absolute;
  top: 20px;
  left: 20px;
`;
