import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity, Text, Image } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

function DetailTrending({navigation}) {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.buttonBack1} >
        <View style={styles.iconBack1Row}>
          <Icon name="chevron-back" style={styles.iconBack1} onPress={() => navigation.navigate('Home')}></Icon>
          <Text style={styles.ayam2}>Trending</Text>
        </View>
      </TouchableOpacity>
      <View style={styles.rect}>
        <View style={styles.imageRow}>
          <Image
            source={require("../images/1.jpg")}
            resizeMode="contain"
            style={styles.image}
          ></Image>
          <View style={styles.koreanSpicyChicken1Stack}>
            <Text style={styles.koreanSpicyChicken1}>Korean Spicy Chicken</Text>
            <Text style={styles.byMrPudidi}>by Mr. Pudidi</Text>
          </View>
        </View>
      </View>
      <View style={styles.rect1}>
        <View style={styles.image5Row}>
          <Image
            source={require("../images/2.jpg")}
            resizeMode="contain"
            style={styles.image5}
          ></Image>
          <View style={styles.ayamBakarMaduStack}>
            <Text style={styles.ayamBakarMadu}>Mie Ramen</Text>
            <Text style={styles.byIkhfil}>by Ikhfil</Text>
          </View>
        </View>
      </View>
      <View style={styles.rect2}>
        <View style={styles.image7Row}>
          <Image
            source={require("../images/3.jpg")}
            resizeMode="contain"
            style={styles.image7}
          ></Image>
          <View style={styles.ayamKentakiStack}>
            <Text style={styles.ayamKentaki}>Es Boba</Text>
            <Text style={styles.byAhmad}>by Ahmad</Text>
          </View>
        </View>
      </View>
      <View style={styles.rect3}>
        <View style={styles.image8Row}>
          <Image
            source={require("../images/4.jpg")}
            resizeMode="contain"
            style={styles.image8}
          ></Image>
          <View style={styles.ayamLadaHitamStack}>
            <Text style={styles.ayamLadaHitam}>Eskrim Ala Mixue</Text>
            <Text style={styles.byAgus}>by Agus</Text>
          </View>
        </View>
      </View>
      <View style={styles.rect4}>
        <View style={styles.image6Row}>
          <Image
            source={require("../images/5.jpg")}
            resizeMode="contain"
            style={styles.image6}
          ></Image>
          <View style={styles.ayamKecapStack}>
            <Text style={styles.ayamKecap}>Nasi Goreng</Text>
            <Text style={styles.byKhusen}>by Khusen</Text>
          </View>
        </View>
      </View>
      <View style={styles.rect5}>
        <View style={styles.image9Row}>
          <Image
            source={require("../images/10.jpg")}
            resizeMode="contain"
            style={styles.image9}
          ></Image>
          <View style={styles.ayamGorengKremesStack}>
            <Text style={styles.ayamGorengKremes}>Ayam Goreng Kremes</Text>
            <Text style={styles.byAhmad1}>by Ahmad</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(230,229,230,1)"
  },
  buttonBack1: {
    width: 300,
    height: 43,
    flexDirection: "row",
    marginTop: 37,
    marginLeft: 22
  },
  iconBack1: {
    color: "rgba(94,23,235,1)",
    fontSize: 40
  },
  ayam2: {
    color: "rgba(94,23,235,1)",
    fontSize: 26,
    marginLeft: 21,
    marginTop: 5,
    fontWeight: 'bold'
  },
  iconBack1Row: {
    height: 43,
    flexDirection: "row",
    flex: 1,
    marginRight: 81
  },
  rect: {
    width: 340,
    height: 86,
    backgroundColor: "rgba(255,255,255,1)",
    borderRadius: 20,
    flexDirection: "row",
    marginTop: 111,
    marginLeft: 22
  },
  image: {
    width: 104,
    height: 68,
    borderRadius: 20
  },
  koreanSpicyChicken1: {
    top: 0,
    left: 0,
    position: "absolute",
    color: "rgba(94,23,235,1)",
    fontSize: 18,
    fontWeight: 'bold'
  },
  byMrPudidi: {
    top: 21,
    left: 1,
    position: "absolute",
    color: "rgba(11,11,11,1)",
    fontSize: 12,
    opacity: 0.51
  },
  koreanSpicyChicken1Stack: {
    width: 191,
    height: 37,
    marginLeft: 9,
    marginTop: 14
  },
  imageRow: {
    height: 68,
    flexDirection: "row",
    flex: 1,
    marginRight: 21,
    marginLeft: 12,
    marginTop: 8
  },
  rect1: {
    width: 340,
    height: 86,
    backgroundColor: "rgba(255,255,255,1)",
    borderRadius: 20,
    flexDirection: "row",
    marginTop: 7,
    marginLeft: 22
  },
  image5: {
    width: 104,
    height: 60,
    borderRadius: 20
  },
  ayamBakarMadu: {
    top: 0,
    left: 0,
    position: "absolute",
    color: "rgba(94,23,235,1)",
    fontSize: 18,
    fontWeight: 'bold'
  },
  byIkhfil: {
    top: 21,
    left: 1,
    position: "absolute",
    color: "rgba(11,11,11,1)",
    fontSize: 12,
    opacity: 0.51
  },
  ayamBakarMaduStack: {
    width: 191,
    height: 37,
    marginLeft: 7,
    marginTop: 8
  },
  image5Row: {
    height: 60,
    flexDirection: "row",
    flex: 1,
    marginRight: 47,
    marginLeft: 14,
    marginTop: 14
  },
  rect2: {
    width: 340,
    height: 86,
    backgroundColor: "rgba(255,255,255,1)",
    borderRadius: 20,
    flexDirection: "row",
    marginTop: 98,
    marginLeft: 22
  },
  image7: {
    width: 104,
    height: 68,
    borderRadius: 20
  },
  ayamKentaki: {
    top: 0,
    left: 0,
    position: "absolute",
    color: "rgba(94,23,235,1)",
    fontSize: 18,
    fontWeight: 'bold'
  },
  byAhmad: {
    top: 21,
    left: 1,
    position: "absolute",
    color: "rgba(11,11,11,1)",
    fontSize: 12,
    opacity: 0.51
  },
  ayamKentakiStack: {
    width: 191,
    height: 37,
    marginLeft: 10,
    marginTop: 13
  },
  image7Row: {
    height: 68,
    flexDirection: "row",
    flex: 1,
    marginRight: 83,
    marginLeft: 11,
    marginTop: 9
  },
  rect3: {
    width: 340,
    height: 86,
    backgroundColor: "rgba(255,255,255,1)",
    borderRadius: 20,
    flexDirection: "row",
    marginTop: -455,
    marginLeft: 22
  },
  image8: {
    width: 96,
    height: 68,
    borderRadius: 20
  },
  ayamLadaHitam: {
    top: 0,
    left: 0,
    position: "absolute",
    color: "rgba(94,23,235,1)",
    fontSize: 18,
    fontWeight: 'bold'
  },
  byAgus: {
    top: 21,
    left: 1,
    position: "absolute",
    color: "rgba(11,11,11,1)",
    fontSize: 12,
    opacity: 0.51
  },
  ayamLadaHitamStack: {
    width: 191,
    height: 37,
    marginLeft: 17,
    marginTop: 13
  },
  image8Row: {
    height: 68,
    flexDirection: "row",
    flex: 1,
    marginRight: 51,
    marginLeft: 12,
    marginTop: 9
  },
  rect4: {
    width: 340,
    height: 86,
    backgroundColor: "rgba(255,255,255,1)",
    borderRadius: 20,
    flexDirection: "row",
    marginTop: 192,
    marginLeft: 22
  },
  image6: {
    width: 104,
    height: 53,
    borderRadius: 20
  },
  ayamKecap: {
    top: 0,
    left: 0,
    position: "absolute",
    color: "rgba(94,23,235,1)",
    fontSize: 18,
    fontWeight: 'bold'
  },
  byKhusen: {
    top: 21,
    left: 1,
    position: "absolute",
    color: "rgba(11,11,11,1)",
    fontSize: 12,
    opacity: 0.51
  },
  ayamKecapStack: {
    width: 191,
    height: 37,
    marginLeft: 11,
    marginTop: 6
  },
  image6Row: {
    height: 53,
    flexDirection: "row",
    flex: 1,
    marginRight: 94,
    marginLeft: 10,
    marginTop: 16
  },
  rect5: {
    width: 340,
    height: 86,
    backgroundColor: "rgba(255,255,255,1)",
    borderRadius: 20,
    flexDirection: "row",
    marginTop: 96,
    marginLeft: 22
  },
  image9: {
    width: 99,
    height: 68,
    borderRadius: 20
  },
  ayamGorengKremes: {
    top: 0,
    left: 0,
    position: "absolute",
    color: "rgba(94,23,235,1)",
    fontSize: 18,
    fontWeight: 'bold'
  },
  byAhmad1: {
    top: 21,
    left: 1,
    position: "absolute",
    color: "rgba(11,11,11,1)",
    fontSize: 12,
    opacity: 0.51
  },
  ayamGorengKremesStack: {
    width: 191,
    height: 37,
    marginLeft: 13,
    marginTop: 13
  },
  image9Row: {
    height: 68,
    flexDirection: "row",
    flex: 1,
    marginRight: 18,
    marginLeft: 13,
    marginTop: 9
  }
});

export default DetailTrending;