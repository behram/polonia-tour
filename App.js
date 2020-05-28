import React from "react";
import { Alert, TouchableHighlight, YellowBox, Text } from "react-native";
import { Permissions } from "expo";
//import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import MapView from 'react-native-maps';
import LocationCard from "./LocationCard.js";
import { FlatList } from "react-native-gesture-handler";
import AppHeader from "./AppHeader";
import { Container } from "native-base";
import LocationDetails from "./LocationDetails";
import firebase from "./config/firebase";
const locations = require("./locations.json");
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from 'react-navigation-stack';
import { StyleSheet, View, Dimensions } from 'react-native';

YellowBox.ignoreWarnings(["Setting a timer"]);
class Main extends React.Component {
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
    return (
      <View style={styles.container}>
        <MapView style={styles.mapStyle} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mapStyle: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});

const AppNavigator = createStackNavigator(
  {
    Main: {
      screen: Main,
      navigationOptions: () => ({
        header: null
      })
    },
    LocationDetails: {
      screen: LocationDetails,
      navigationOptions: () => ({
        title: "Location Details"
      }),
    }
  },
  {
    mode: "modal"
  }
);

export default createAppContainer(AppNavigator);
