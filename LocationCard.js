import React, { Component } from "react";
import { Image, Text } from "react-native";
import {
  Container,
  Content,
  Card,
  CardItem,
  Thumbnail,
  Icon,
  Left,
  Body
} from "native-base";
export default class LocationCard extends Component {
  render() {
    const { city, name, description, linkPhoto, category, coordinates } = this.props.data;
    return (
      <Container>
        <Content>
          <Card style={{ flex: 1 }}>
            <CardItem>
              <Left>
                <Thumbnail source={{ uri: linkPhoto[0] || linkPhoto[0] !== '' ? linkPhoto[0] : 'https://cdn.pixabay.com/photo/2013/07/13/14/05/location-162102__340.png' }} />
                <Body>
                  <Text>{name}</Text>
                  <Text note>
                    <Icon style={{fontSize: 16}} type="Entypo" name="location-pin" />
                    {city}
                  </Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem>
              <Body>
                <Image
                  source={{ uri: linkPhoto[0] ? linkPhoto[0] : 'https://cdn.pixabay.com/photo/2013/07/13/14/05/location-162102__340.png' }}
                  style={{ height: 200, width: 200, flex: 1 }}
                />
                <Text>Category: {category.toUpperCase()}</Text>
              </Body>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}
