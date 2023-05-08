import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity
} from "react-native";


function Tambah({Navigation}) {
  return (
    <View style={styles.container}>
      <Text style={styles.tambahResep}>Tambah Resep</Text>
      <View style={styles.scrollArea}>
        <ScrollView
          horizontal={false}
          contentContainerStyle={styles.scrollArea_contentContainerStyle}
        >
          <Text style={styles.judul1}>Judul</Text>
          <TextInput
            placeholder="Judul Resep"
            textBreakStrategy="simple"
            autoCapitalize="words"
            multiline={false}
            inlineImagePadding={0}
            style={styles.placeholder2}
          ></TextInput>
          <Text style={styles.gambar1}>Gambar</Text>
          <Text style={styles.durasiMasak1}>Durasi Masak</Text>
          <TextInput
            placeholder="Durasi Masak"
            style={styles.placeholder1}
          ></TextInput>
          <Text style={styles.porsi1}>Porsi</Text>
          <TextInput
            placeholder="Jumlah Porsi"
            style={styles.textInput1}
          ></TextInput>
          <Text style={styles.bahanBahan1}>Bahan -Bahan</Text>
          <View style={styles.textInput2Row}>
            <TextInput
              placeholder="Bahan"
              style={styles.textInput2}
            ></TextInput>
            <TextInput
              placeholder="Takaran"
              style={styles.textInput3}
            ></TextInput>
          </View>
          <TouchableOpacity style={styles.button1} >
            <Text style={styles.tambahBahan}>Tambah Bahan</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(189,189,189,1)"
  },
  tambahResep: {
    color: "rgba(94,23,235,1)",
    fontSize: 30,
    marginTop: 48,
    marginLeft: 81
  },
  scrollArea: {
    width: 460,
    height: 650,
    backgroundColor: "rgba(230, 230, 230,1)",
    marginTop: 27,
    marginLeft: -1
  },
  scrollArea_contentContainerStyle: {
    height: 650,
    width: 460
  },
  judul1: {
    color: "rgba(94,23,235,1)",
    fontSize: 20,
    marginTop: 40,
    marginLeft: 23
  },
  placeholder2: {
    color: "#121212",
    height: 52,
    width: 350,
    backgroundColor: "rgba(255,255,255,1)",
    borderWidth: 1,
    borderColor: "rgba(255,255,255,1)",
    borderRadius: 5,
    marginTop: 4,
    marginLeft: 23
  },
  gambar1: {
    color: "rgba(94,23,235,1)",
    fontSize: 20,
    marginTop: 12,
    marginLeft: 23
  },
  durasiMasak1: {
    color: "rgba(94,23,235,1)",
    fontSize: 20,
    marginTop: 42,
    marginLeft: 23
  },
  placeholder1: {
    color: "#121212",
    height: 49,
    width: 350,
    backgroundColor: "rgba(255,255,255,1)",
    borderWidth: 1,
    borderColor: "rgba(255,255,255,1)",
    borderRadius: 5,
    marginLeft: 23
  },
  porsi1: {
    color: "rgba(94,23,235,1)",
    fontSize: 20,
    marginTop: 13,
    marginLeft: 23
  },
  textInput1: {
    color: "#121212",
    height: 49,
    width: 350,
    backgroundColor: "rgba(255,255,255,1)",
    borderWidth: 1,
    borderColor: "rgba(255,255,255,1)",
    borderRadius: 5,
    marginLeft: 23
  },
  bahanBahan1: {
    color: "rgba(94,23,235,1)",
    fontSize: 20,
    marginTop: 12,
    marginLeft: 129
  },
  textInput2: {
    color: "#121212",
    height: 49,
    width: 165,
    backgroundColor: "rgba(255,255,255,1)",
    borderWidth: 1,
    borderColor: "rgba(255,255,255,1)",
    borderRadius: 5
  },
  textInput3: {
    color: "#121212",
    height: 49,
    width: 165,
    backgroundColor: "rgba(255,255,255,1)",
    borderWidth: 1,
    borderColor: "rgba(255,255,255,1)",
    borderRadius: 5,
    marginLeft: 14
  },
  textInput2Row: {
    height: 49,
    flexDirection: "row",
    marginTop: 19,
    marginLeft: 23,
    marginRight: 17
  },
  button1: {
    width: 350,
    height: 35,
    backgroundColor: "rgba(94,23,235,1)",
    borderWidth: 1,
    borderColor: "rgba(94,23,235,1)",
    borderRadius: 10,
    marginTop: 28,
    marginLeft: 23
  },
  tambahBahan: {
    color: "rgba(255,255,255,1)",
    fontSize: 22,
    marginTop: 3,
    marginLeft: 88
  }
});

export default Tambah;
