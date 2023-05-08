import React, { Component } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Text
} from "react-native";

function Login({navigation}) {
  return (
    <View style={styles.container}>
      <View style={styles.group}>
        <TextInput
          placeholder="Username"
          autoCorrect={false}
          style={styles.placeholder1}
        ></TextInput>
        <TextInput
          placeholder="Password"
          secureTextEntry={true}
          style={styles.placeholder2}
        ></TextInput>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('tambah')}>
          <Text style={styles.masuk}>Masuk</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.text}>Login</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  group: {
    width: 289,
    height: 260,
    borderWidth: 1,
    borderColor: "rgba(189,189,189,1)",
    borderRadius: 10,
    backgroundColor: "rgba(189,189,189,1)",
    marginTop: 196,
    marginLeft: 40
  },
  placeholder1: {
    color: "#121212",
    height: 49,
    width: 248,
    backgroundColor: "rgba(255,255,255,1)",
    borderWidth: 1,
    borderColor: "rgba(255,255,255,1)",
    borderRadius: 5,
    marginTop: 31,
    marginLeft: 20
  },
  placeholder2: {
    color: "#121212",
    height: 49,
    width: 248,
    backgroundColor: "rgba(255,255,255,1)",
    borderWidth: 1,
    borderColor: "rgba(255,255,255,1)",
    borderRadius: 5,
    marginTop: 19,
    marginLeft: 20
  },
  button: {
    width: 135,
    height: 35,
    backgroundColor: "rgba(94,23,235,1)",
    borderWidth: 1,
    borderColor: "rgba(94,23,235,1)",
    borderRadius: 10,
    marginTop: 42,
    marginLeft: 77
  },
  masuk: {
    color: "rgba(255,255,255,1)",
    fontSize: 22,
    marginTop: 3,
    marginLeft: 34
  },
  text: {
    color: "rgba(94,23,235,1)",
    fontWeight:'bold',
    fontSize: 49,
    marginTop: -338,
    marginLeft: 123
  }
});

export default Login;
