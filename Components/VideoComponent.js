import React from "react";
import Video from "react-native-video";
import styled from "styled-components";

const VideoComponent = props => (
  <Container>
    <Video
      //source={require("../assests/CarVideo.mp4")}
      source={{ uri: `${props.link}` }}
      ref={ref => {
        this.video = ref;
      }}
      repeat={true}
      muted={true}
      style={{
        position: "absolute",
        backgroundColor: "#000000",
        top: 0,
        left: 0,
        bottom: 0,
        right: 0
      }}
      resizeMode="cover"
    />
  </Container>
);

export default VideoComponent;
const Container = styled.View`
  height: 100%;
  width: 100%;
  justify-content: center;
  align-items: center;
`;
const Text = styled.Text`
  font-size: 13;
  font-weight: normal;
  color: #000000;
`;
