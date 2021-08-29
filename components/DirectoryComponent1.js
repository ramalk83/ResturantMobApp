import React, { Component } from "react";
import { View, FlatList, Text, StyleSheet } from "react-native";
import { ListItem } from "react-native-elements";
import { CAMPSITES } from "../shared/campsites";
import { Tile } from "react-native-elements";
import { connect } from "react-redux";
import { baseUrl } from "../shared/baseUrl";
import Loading from "./LoadingComponent";
import * as Animatable from "react-native-animatable";

const mapStateToProps = (state) => {
  return {
    campsites: state.campsites,
  };
};
class Directory extends Component {
  static navigationOptions = {
    title: "Our Menu",
  };

  render() {
    const { navigate } = this.props.navigation;
    const renderDirectoryItem = ({ item }) => {
      return (
        <Animatable.View animation="fadeInRightBig" duration={2000}>
          <Tile
            title={item.name}
            caption={item.description}
            style={styles.container}
            featured
            onPress={() => navigate("CampsiteInfo", { campsiteId: item.id })}
            imageSrc={{ uri: baseUrl + item.image }}
          />
        </Animatable.View>
      );
    };
    return (
      <>
        <Text style={styles.deleteText}>Breakfast</Text>
        <FlatList
          data={this.props.campsites.campsites.filter(
            (campsite) => campsite.bf
          )}
          style={styles.container}
          renderItem={renderDirectoryItem}
          keyExtractor={(item) => item.id.toString()}
        />
        <Text style={styles.deleteText}>Lunch</Text>
        <FlatList
          data={this.props.campsites.campsites.filter(
            (campsite) => campsite.lunch
          )}
          style={styles.container}
          renderItem={renderDirectoryItem}
          keyExtractor={(item) => item.id.toString()}
        />
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    fontSize: 18,
    marginBottom: 20,
    height: 44,
  },
  deleteText: {
    backgroundColor: "brown",
    height: "4%",
    justifyContent: "center",
    color: "white",
    fontWeight: "700",
    textAlign: "center",
    fontSize: 16,
    width: 150,
  },
});

export default connect(mapStateToProps)(Directory);
