import React, { useState, useEffect, Component } from "react";
import { StyleSheet, View, Image } from "react-native";
import { StackActions } from "@react-navigation/native";

class Splash extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        setTimeout(() => {
            this.props.navigation.dispatch(StackActions.replace('Home'));
        }, 2000)
    }

    render() {
        return (
        <View style={styles.container}>
            <Image
                source={require("../images/Splash.png")}
                resizeMode="contain"
                style={styles.image}
            ></Image>
        </View>
    );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: 530,
    height: 800,
    alignSelf: "center"
  }
});

export default Splash;
