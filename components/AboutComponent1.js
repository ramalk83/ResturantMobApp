import React, { Component } from "react";
import { ScrollView, Text, FlatList, StyleSheet } from "react-native";
import { Card, ListItem } from "react-native-elements";
import { connect } from "react-redux";
import { baseUrl } from "../shared/baseUrl";
import Loading from "./LoadingComponent";
import * as Animatable from "react-native-animatable";
const mapStateToProps = (state) => {
  return {
    //partners: state.partners,
  };
};
function Mission() {
  return (
    <Card
     
      image={{
        uri:
          "https://cdn.pixabay.com/photo/2018/07/14/15/27/cafe-3537801_1280.jpg",
      }}
    >
      <Text style={styles.deleteText}>
        FoodCafe Restaurant is basically a International Restaurant with a
        Flavour International authentic cuisine. FoodCafe Restaurant is
        generally an established to serve where the public may obtain meals or
        refreshments. FoodCafe Restaurant have started to play a vital role to
        satisfy the people. And people to spread the tastes from far-away lands,
        of spending a Dinner with your loved ones, or to have office lunch with
        your Team Mates and so forth. And of course, FoodCafe Restaurant is in
        addition to the basic functions of “restoring” people with the help of
        good food, service and ambience.
      </Text>
    </Card>
  );
}

class About extends Component {
  constructor(props) {
    super(props);
  }

  static navigationOptions = {
    title: "About",
  };

  render() {
    const renderPartner = ({ item }) => {
      return (
        <ListItem
          title={item.name}
          subtitle={item.description}
          leftAvatar={{ source: { uri: baseUrl + item.image } }}
        />
      );
    };

    return (
      <ScrollView>
        <Animatable.View animation="fadeInDown" duration={2000} delay={1000}>
          <Mission />
        </Animatable.View>
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  deleteView: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    flex: 1,
  },
  deleteTouchable: {
    backgroundColor: "brown",
    height: "100%",
    justifyContent: "center",
  },
  deleteText: {
    
    color: "brown",
    fontWeight: "700",
    textAlign: "center",
    fontSize: 16,
    width: 360,
  },
});

export default connect(mapStateToProps)(About);
