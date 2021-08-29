import React, { Component } from "react";
import { View, Text, ScrollView, FlatList } from "react-native";
import { Card, Button, Icon } from "react-native-elements";
import * as MailComposer from "expo-mail-composer";
import * as Animatable from "react-native-animatable";

class Contact extends Component {
  static navigationOptions = {
    title: "Contact",
  };
  sendMail() {
    MailComposer.composeAsync({
      recipients: ["campsites@nucamp.co"],
      subject: "Inquiry",
      body: "To whom it may concern:",
    });
  }

  render() {
    return (
      <ScrollView>
        <Animatable.View animation="fadeInDown" duration={2000} delay={1000}>
          <Card
            wrapperStyle={{ margin: 20 }}
            title="Contact Information"
            image={{
              uri:
                "https://i2-prod.mirror.co.uk/incoming/article14334083.ece/ALTERNATES/s615/3_Beautiful-girl-with-a-gentle-smile.jpg",
            }}
          >
            <Text>111 Flourtown Road </Text>
            <Text> Waltham, MA 98001</Text>
            <Text style={{ marginBottom: 10 }}> U.S.A.</Text>
            <Text>Phone: 1-678-895-8754</Text>
            <Text>Email: contact@foodcafe.co</Text>
            <Button
              title="Send Email"
              buttonStyle={{ backgroundColor: "brown", margin: 40 }}
              icon={
                <Icon
                  name="envelope-o"
                  type="font-awesome"
                  color="#fff"
                  iconStyle={{ marginRight: 10 }}
                />
              }
              onPress={() => this.sendMail()}
            />
          </Card>
        </Animatable.View>
      </ScrollView>
    );
  }
}

export default Contact;
