import React, { Component } from "react";
import {
  Text,
  View,
  ScrollView,
  StyleSheet,
  Picker,
  Switch,
  Button,
  Modal,
  Icon,
} from "react-native";
import { Card } from "react-native-elements";
import DateTimePicker from "@react-native-community/datetimepicker";

class Reservation extends Component {
  constructor(props) {
    super(props);

    this.state = {
      campers: 1,
      hikeIn: false,
      date: new Date(),
      showCalendar: false,
      showModal: false,
    };
  }

  static navigationOptions = {
    title: "Reserve a seat",
  };

  toggleModal() {
    this.setState({ showModal: !this.state.showModal });
  }

  handleReservation() {
    console.log(JSON.stringify(this.state));
    this.toggleModal();
  }

  resetForm() {
    this.setState({
      campers: 1,
      hikeIn: false,
      date: new Date(),
      showCalendar: false,
      showModal: false,
    });
  }

  render() {
    return (
      <>
        <Card
          image={{
            uri:
              "https://cdn.pixabay.com/photo/2017/12/10/14/47/pizza-3010062_1280.jpg",
          }}
        ></Card>
        <ScrollView style={styles.container}>
          <Modal
            animationType={"slide"}
            transparent={false}
            visible={this.state.showModal}
            onRequestClose={() => this.toggleModal()}
          >
            <View style={styles.modal}>
              <Text style={styles.modalTitle}>Reserve a Table</Text>
              <Text style={styles.modalText}>
                Number of people: {this.state.campers}
              </Text>
              <Text style={styles.modalText}>
                Kids?: {this.state.hikeIn ? "Yes" : "No"}
              </Text>
              <Text style={styles.modalText}>
                Number of Kids: {this.state.campers}
              </Text>
              <Text style={styles.modalText}>
                Date: {this.state.date.toLocaleDateString("en-US")}
              </Text>
              <Button
                onPress={() => {
                  this.toggleModal();
                  this.resetForm();
                }}
                color="#dd8237"
                title="Close"
              />
            </View>
          </Modal>

          <View style={styles.formRow}>
            <Text style={styles.formLabel}>Number of people</Text>
            <Picker
              style={styles.formItem}
              selectedValue={this.state.campers}
              onValueChange={(itemValue) =>
                this.setState({ campers: itemValue })
              }
            >
              <Picker.Item label="1" value="1" />
              <Picker.Item label="2" value="2" />
              <Picker.Item label="3" value="3" />
              <Picker.Item label="4" value="4" />
              <Picker.Item label="5" value="5" />
              <Picker.Item label="6" value="6" />
            </Picker>
          </View>
          <View style={styles.formRow}>
            <Text style={styles.formLabel}>Kids?</Text>
            <Switch
              style={styles.formItem}
              value={this.state.hikeIn}
              trackColor={{ true: "#dd8237", false: null }}
              onValueChange={(value) => this.setState({ hikeIn: value })}
            />
          </View>
          <View style={styles.formRow}>
            <Text style={styles.formLabel}>Number of Kids</Text>
            <Picker
              style={styles.formItem}
              selectedValue={this.state.campers}
              onValueChange={(itemValue) =>
                this.setState({ campers: itemValue })
              }
            >
              <Picker.Item label="1" value="1" />
              <Picker.Item label="2" value="2" />
              <Picker.Item label="3" value="3" />
              <Picker.Item label="4" value="4" />
              <Picker.Item label="5" value="5" />
              <Picker.Item label="6" value="6" />
            </Picker>
          </View>
          <View style={styles.formRow}>
            <Text style={styles.formLabel}>Date</Text>
            <Button
              onPress={() =>
                this.setState({ showCalendar: !this.state.showCalendar })
              }
              title={this.state.date.toLocaleDateString("en-US")}
              accessibilityLabel="Tap me to select a reservation date"
            />
          </View>
          {this.state.showCalendar && (
            <DateTimePicker
              value={this.state.date}
              mode={"date"}
              display="default"
              onChange={(event, selectedDate) => {
                selectedDate &&
                  this.setState({ date: selectedDate, showCalendar: false });
              }}
            />
          )}
          <View style={styles.formRow}>
            <Button
              onPress={() => this.handleReservation()}
              title="Search"
              color="#dd8237"
              accessibilityLabel="Tap me to search for available seats to reserve"
            />
          </View>
        </ScrollView>
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
   
  },
  formRow: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    flexDirection: "row",
    margin: 10,
  },
  formLabel: {
    fontSize: 18,
    fontWeight:'bold',
    flex: 0.60,
    textShadowColor: "#585858",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 10,
  },
  formItem: {
    flex: 0.28,
    borderColor: "red",
    borderWidth: 5,
   
  },
  modal: {
    justifyContent: "center",
    margin: 20,
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: "bold",
    backgroundColor: "brown",
    textAlign: "center",
    color: "#fff",
    marginBottom: 20,
  },
  modalText: {
    fontSize: 18,
    margin: 10,
  },
});

export default Reservation;
