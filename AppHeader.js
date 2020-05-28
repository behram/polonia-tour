import React, { Component } from "react";
import {
  Container,
  Header,
  Left,
  Body,
  Right,
  Button,
  Icon
} from "native-base";
import { Text, StatusBar } from "react-native";
export default class AppHeader extends Component {
  render() {
    return (
      <Header style={{ marginTop: StatusBar.currentHeight, backgroundColor: '#069' }}>
        <Left>
          <Button transparent>
            <Icon type="FontAwesome" name="location-arrow" />
            <Text style={{ fontWeight: "bold", color: "#FFF", marginLeft: 10 }}>
              Polonia Tour
            </Text>
          </Button>
        </Left>
        <Right>
          <Button transparent>
            <Icon name="menu" />
          </Button>
        </Right>
      </Header>
    );
  }
}
