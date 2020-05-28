import React, { Component } from "react";
import { StyleSheet, Linking } from "react-native";
import ImageSlider from "react-native-image-slider";
import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Text,
  Icon,
  Right,
  Body
} from "native-base";

class LocationDetails extends Component {
  static navigationOptions = {
    headerTintColor: '#ffffff',
    headerStyle: {
      backgroundColor: '#069',
      borderBottomColor: '#ffffff',
      borderBottomWidth: 3,
    },
    headerTitleStyle: {
      fontSize: 18,
    },
};
  constructor(props) {
    super(props);
  }
  render() {
    const { item } = this.props.navigation.state.params;
    return (
      // <View>
      //   <Text>{this.props.navigation.state.params.item.name}</Text>
      // </View>
      <Container>
        <ImageSlider
          style={styles.container}
          images={this.props.navigation.state.params.item.linkPhoto}
        />
        <Content>
          <Card>
            <CardItem header>
              <Text>Description</Text>
            </CardItem>
            <CardItem>
              <Body>
                <Text>{item.description}</Text>
              </Body>
            </CardItem>
            <CardItem footer>
              <Content>
                <Card>
                  <CardItem>
                    <Icon color="#069" active name="at" />
                    <Text>Name</Text>
                    <Right>
                      <Text>{item.name}</Text>
                    </Right>
                  </CardItem>
                  <CardItem>
                    <Icon color="#069" active name="navigate" />
                    <Text>City</Text>
                    <Right>
                      <Text>{item.city}</Text>
                    </Right>
                  </CardItem>
                  <CardItem>
                    <Icon color="#069" active name="compass" />
                    <Text>Region</Text>
                    <Right>
                      <Text>{item.region}</Text>
                    </Right>
                  </CardItem>
                  <CardItem>
                    <Icon color="#069" active name="albums" />
                    <Text>Category</Text>
                    <Right>
                      <Text>{item.category}</Text>
                    </Right>
                  </CardItem>
                  <CardItem>
                    <Icon color="#069" active name="link" />
                    <Text>Link Reservation</Text>
                    <Right>
                      <Text style={{color: '#069'}}
                        onPress={() => Linking.openURL(item.linkReservation)}
                      >
                        Go to link
                      </Text>
                    </Right>
                  </CardItem>
                  <CardItem>
                    <Icon color="#069" active name="time" />
                    <Text>Opening Hours</Text>
                    <Right>
                      <Text>
                        {item.openingHour ? `${item.openingHour} AM/PM` : "-"}
                      </Text>
                    </Right>
                  </CardItem>
                </Card>
              </Content>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 0.6
  }
});

export default LocationDetails;
