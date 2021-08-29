import React, { Component } from "react";
//import { View, Text, ScrollView } from "react-native";
import {
  View,
  Text,
  Animated,
  ScrollView,
  StyleSheet,
  ImageBackground,
  PricingCard,
} from "react-native";
import { Card } from "react-native-elements";
import { CAMPSITES } from "../shared/campsites";
import { PROMOTIONS } from "../shared/promotions";
import { PARTNERS } from "../shared/partners";
import { connect } from "react-redux";
import { baseUrl } from "../shared/baseUrl";
import Loading from "./LoadingComponent1";
import { createBottomTabNavigator } from "react-navigation-tabs";
const mapStateToProps = (state) => {
  return {
    campsites: state.campsites,
    promotions: state.promotions,
    partners: state.partners,
  };
};
function RenderItem(props) {
  const { item } = props;

  if (props.isLoading) {
    return <Loading />;
  }
  if (props.errMess) {
    return (
      <View>
        <Text>{props.errMess}</Text>
      </View>
    );
  }
  if (item) {
    return (
      <>
        <View style={styles.container}>
          <ImageBackground
            source={{ uri: baseUrl + item.image }}
            style={styles.image}
          >
            <Text style={styles.text}>Welcome to FoodCafe</Text>
            <Text style={styles.text}>
              A place for the world famous cousine !!
            </Text>
          </ImageBackground>
        </View>
      </>
    );
  }
  return <View style={styles.container} />;
}

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      campsites: CAMPSITES,
      promotions: PROMOTIONS,
      partners: PARTNERS,
    };
  }

  static navigationOptions = {
    title: "Home",
  };

  render() {
    return (
      <View style={styles.container}>
        <RenderItem
          item={
            this.props.campsites.campsites.filter(
              (campsite) => campsite.featured
            )[0]
          }
          isLoading={this.props.campsites.isLoading}
          errMess={this.props.campsites.errMess}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  text: {
    color: "white",
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#000000a0",
  },
});
export default connect(mapStateToProps)(Home);
