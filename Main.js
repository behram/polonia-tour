import React from "react";
import { Alert, TouchableHighlight, YellowBox, Text } from "react-native";
import { Permissions } from "expo";
import MapView, { Marker, Polyline, PROVIDER_GOOGLE } from "react-native-maps";
import LocationCard from "./LocationCard.js";
import { FlatList } from "react-native-gesture-handler";
import AppHeader from "./AppHeader";
import { Container } from "native-base";

import firebase from "./config/firebase";
const locations = require("./locations.json");

const MainNavigator = createStackNavigator({
  LocationDetails: {screen: LocationDetails}
});

YellowBox.ignoreWarnings(["Setting a timer"]);
export default class Main extends React.Component {
  constructor(props) {
    super(props);
    this.ref = firebase.firestore().collection("Attraction");
    this.state = {
      latitude: 51.108543,
      longitude: 17.040353,
      locations: locations,
      loading: false,
      allPlaces: [],
      coordinates: []
    };
  }
  componentWillUnmount() {
    this.unsubscribe();
  }
  onCollectionUpdate = querySnapshot => {
    let newPlaces = [];
    querySnapshot.forEach(doc => {
      newPlaces = [...newPlaces, doc.data()];
    });

    this.setState({
      allPlaces: newPlaces,
      loading: false
    });
  };
  async componentDidMount() {
    this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate);
    const { status } = await Permissions.getAsync(Permissions.LOCATION);

    if (status !== "granted") {
      const response = await Permissions.askAsync(Permissions.LOCATION);
    }
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) =>
        this.setState({ latitude, longitude }, () =>
          console.log("My location coordinates", latitude, longitude)
        ),
      err => Alert.alert(err)
    );

    const {
      locations: [sampleLocation]
    } = this.state;

    this.setState({
      desLatitude: sampleLocation.coords.latitude,
      desLongtitude: sampleLocation.coords.longitude
    });
  }

  render() {
    const { coords, latitude, longitude, locations, allPlaces } = this.state;
    return (
      <Container style={{ flex: 1 }}>
        <AppHeader />
        <MapView
          provider={PROVIDER_GOOGLE}
          showsUserLocation
          followsUserLocation
          style={{ flex: 1.2 }}
          initialRegion={{
            latitude,
            longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421
          }}
        >
          {locations.map((location, i) => {
            // const latitude = 51.10238543;
            // const longitude = 17.0460353;

            // let latitude = location.coordinates.latitude;
            // let longitude = location.coordinates.longitude;
            // latitude = parseFloat(latitude);
            // longitude = parseFloat(longitude);
            // const [latitude, longitude] = location.coordinates;
            // console.log(latitude, longitude);
            return (
              <Marker
                key={i}
                title={location.name}
                coordinate={{ latitude, longitude }}
                description={location.category}
              />
            );
          })}
        </MapView>
        <FlatList
          keyExtractor={(item, i) => item.description}
          horizontal
          data={allPlaces}
          renderItem={({ item, i }) => {
            return (
              <TouchableHighlight>
                <LocationCard data={item} />
              </TouchableHighlight>
            );
          }}
        />
      </Container>
    );
  }
}