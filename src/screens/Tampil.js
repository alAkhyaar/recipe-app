import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity
} from "react-native";
import Icon from "react-native-vector-icons/Octicons";

function Tampil(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.daftarResep}>Daftar Resep</Text>
      <View style={styles.cariStack}>
        <TextInput placeholder="Cari" style={styles.cari}></TextInput>
        <TouchableOpacity style={styles.button}>
          <Icon name="search" style={styles.icon}></Icon>
        </TouchableOpacity>
      </View>
      <View style={styles.group}>
        <View style={styles.rectRow}>
          <View style={styles.rect}>
            <Text style={styles.image}>Image</Text>
          </View>
          <Text style={styles.judul}>Judul</Text>
          <View style={styles.button2Column}>
            <TouchableOpacity style={styles.button2}>
              <Text style={styles.edit}>Edit</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.group2}>
              <Text style={styles.edit2}>Hapus</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  daftarResep: {
    fontFamily: "roboto-700",
    color: "rgba(94,23,235,1)",
    fontSize: 49,
    marginTop: 65,
    marginLeft: 47
  },
  cari: {
    top: 0,
    left: 0,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 34,
    width: 285,
    borderWidth: 1,
    borderColor: "#000000",
    borderRadius: 50
  },
  button: {
    top: 0,
    left: 238,
    width: 41,
    height: 34,
    position: "absolute",
    borderRadius: 50
  },
  icon: {
    color: "rgba(128,128,128,1)",
    fontSize: 23,
    marginTop: 5,
    marginLeft: 8
  },
  cariStack: {
    width: 285,
    height: 34,
    marginTop: 22,
    marginLeft: 41
  },
  group: {
    width: 291,
    height: 89,
    borderWidth: 1,
    borderColor: "#000000",
    borderRadius: 10,
    marginTop: 22,
    marginLeft: 41
  },
  rect: {
    width: 80,
    height: 77,
    backgroundColor: "#E6E6E6"
  },
  image: {
    fontFamily: "roboto-regular",
    color: "#121212",
    marginTop: 30,
    marginLeft: 21
  },
  judul: {
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 18,
    marginLeft: 5
  },
  button2: {
    width: 47,
    height: 23,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,1)",
    backgroundColor: "rgba(74,144,226,1)"
  },
  edit: {
    fontFamily: "roboto-regular",
    color: "rgba(255,255,255,1)",
    fontSize: 12,
    marginTop: 4,
    marginLeft: 12
  },
  group2: {
    width: 47,
    height: 23,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,1)",
    backgroundColor: "rgba(208,2,27,1)",
    marginTop: 8
  },
  edit2: {
    fontFamily: "roboto-regular",
    color: "rgba(255,255,255,1)",
    fontSize: 12,
    marginTop: 3,
    marginLeft: 4
  },
  button2Column: {
    width: 47,
    marginLeft: 97,
    marginTop: 8,
    marginBottom: 15
  },
  rectRow: {
    height: 77,
    flexDirection: "row",
    marginTop: 6,
    marginLeft: 5,
    marginRight: 13
  }
});

export default Tampil;
