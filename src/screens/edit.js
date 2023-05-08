import React, { Component } from "react";
import { StyleSheet, View, Text, TextInput } from "react-native";
import Loginbutton from "../components/Loginbutton";

function Edit(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.tambahResep}>Tambah Resep</Text>
      <TextInput
        placeholder="Judul Resep"
        textBreakStrategy="simple"
        autoCapitalize="words"
        multiline={false}
        inlineImagePadding={0}
        style={styles.placeholder}
      ></TextInput>
      <TextInput
        placeholder="Durasi Masak"
        style={styles.placeholder5}
      ></TextInput>
      <TextInput
        placeholder="Jumlah Porsi"
        style={styles.textInput}
      ></TextInput>
      <View style={styles.textInput2Row}>
        <TextInput placeholder="Bahan" style={styles.textInput2}></TextInput>
        <TextInput placeholder="Takaran" style={styles.textInput3}></TextInput>
      </View>
      <Text style={styles.judul}>Judul</Text>
      <Text style={styles.gambar}>Gambar</Text>
      <Text style={styles.durasiMasak}>Durasi Masak</Text>
      <Text style={styles.porsi}>Porsi</Text>
      <Text style={styles.bahanBahan}>Bahan -Bahan</Text>
      <Loginbutton style={styles.materialButtonPrimary1}></Loginbutton>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(189,189,189,1)"
  },
  tambahResep: {
    fontFamily: "roboto-700",
    color: "rgba(94,23,235,1)",
    fontSize: 30,
    marginTop: 48,
    alignSelf: "center"
  },
  placeholder: {
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 52,
    width: 322,
    backgroundColor: "rgba(255,255,255,1)",
    borderWidth: 1,
    borderColor: "rgba(255,255,255,1)",
    borderRadius: 5,
    marginTop: 98,
    marginLeft: 19
  },
  placeholder5: {
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 49,
    width: 322,
    backgroundColor: "rgba(255,255,255,1)",
    borderWidth: 1,
    borderColor: "rgba(255,255,255,1)",
    borderRadius: 5,
    marginTop: 102,
    marginLeft: 19
  },
  textInput: {
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 49,
    width: 322,
    backgroundColor: "rgba(255,255,255,1)",
    borderWidth: 1,
    borderColor: "rgba(255,255,255,1)",
    borderRadius: 5,
    marginTop: 38,
    marginLeft: 19
  },
  textInput2: {
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 49,
    width: 156,
    backgroundColor: "rgba(255,255,255,1)",
    borderWidth: 1,
    borderColor: "rgba(255,255,255,1)",
    borderRadius: 5
  },
  textInput3: {
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 49,
    width: 152,
    backgroundColor: "rgba(255,255,255,1)",
    borderWidth: 1,
    borderColor: "rgba(255,255,255,1)",
    borderRadius: 5,
    marginLeft: 14
  },
  textInput2Row: {
    height: 49,
    flexDirection: "row",
    marginTop: 54,
    marginLeft: 19,
    marginRight: 19
  },
  judul: {
    fontFamily: "roboto-700",
    color: "rgba(94,23,235,1)",
    fontSize: 20,
    marginTop: -421,
    marginLeft: 19
  },
  gambar: {
    fontFamily: "roboto-700",
    color: "rgba(94,23,235,1)",
    fontSize: 20,
    marginTop: 93,
    marginLeft: 19
  },
  durasiMasak: {
    fontFamily: "roboto-700",
    color: "rgba(94,23,235,1)",
    fontSize: 20,
    marginTop: 65,
    marginLeft: 19
  },
  porsi: {
    fontFamily: "roboto-700",
    color: "rgba(94,23,235,1)",
    fontSize: 20,
    marginTop: 87,
    marginLeft: 19
  },
  bahanBahan: {
    fontFamily: "roboto-700",
    color: "rgba(94,23,235,1)",
    fontSize: 20,
    marginTop: 85,
    marginLeft: 126
  },
  materialButtonPrimary1: {
    height: 36,
    width: 322,
    marginTop: 104,
    marginLeft: 19
  }
});

export default Edit;
