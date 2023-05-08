import { setStatusBarBackgroundColor } from "expo-status-bar";
import React, {useState, useEffect, Component} from "react";
import Modal from "react-native-modal"
import { View, Text, FlatList, TouchableOpacity, StatusBar, Image, ScrollView, Switch,ImageBackground, StyleSheet,} from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';

function Pengaturan ({ navigation }) {
  const [modal, setModal] = useState(false);
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Home')}>
        <View style={styles.iconRow}>
          <Icon
            name="chevron-back"
            style={styles.icon}
          ></Icon>
          <Text style={styles.pengaturan}>Pengaturan</Text>
        </View>
      </TouchableOpacity>
      <View style={styles.rect}>
        <View style={styles.icon2Row}>
          <Icon name="ios-moon" style={styles.icon2}></Icon>
          <Text style={styles.darkMode}>Dark Mode</Text>
          <Switch style={styles.materialSwitch} ></Switch>
        </View>
      </View>
      <View style={styles.rect1}>
        <View style={styles.icon3Row}>
          <Icon
            name="notifications"
            style={styles.icon3}
          ></Icon>
          <Text style={styles.loremIpsum}>
            Aktifkan notifikasi jika ada resep baru
          </Text>
          <Switch style={styles.materialSwitch1}></Switch>
      </View>
      <View style={styles.rect3}>
        <TouchableOpacity style={{
          alignItems: 'center', 
          flex: 1, 
          flexDirection: 'row', 
          marginTop: 10
          }} onPress={() => setModal(true)}>
          <Text style={{
            fontSize: 15, 
            color: '#ffffff',
            fontSize: 28,
            marginLeft: 135,
            marginBottom: 10,
            fontWeight: 'bold'
            }}>
              Login</Text>
        </TouchableOpacity>
        <Modal isVisible={modal}>
            <View style={{
              backgroundColor: '#FFFFFF',
              paddingVertical: 20,
              borderRadius: 6,
              paddingHorizontal: 30
            }}>
              <Text style={{
                fontWeight : 'bold',
                color: '#272727',
                textAlign: 'center',
                fontSize: 16
              }}>
                Apakah anda admin?
              </Text>
              <Text style={{textAlign: 'center'}}>
                Klik ya untuk login sebagai admin
              </Text>
              <TouchableOpacity style={{
                justifyContent: 'center',
                marginTop: 20,
                alignItems: 'center',
                backgroundColor: '#5e17eb',
                paddingVertical: 10,
                borderRadius: 50,
                elevation: 8
              }} onPress={() => navigation.navigate('login')}>
                <Text style={{color: '#ffffff'}}>
                  Ya
                </Text>
              </TouchableOpacity>
              <TouchableOpacity style={{
                justifyContent: 'center',
                marginTop: 10,
                alignItems: 'center'
              }} onPress={() => setModal(false)}>
                <Text style={{color: '#5e17eb'}}>
                  Tidak
                </Text>
              </TouchableOpacity>
            </View>
        </Modal>
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
  button: {
    width: 187,
    height: 43,
    flexDirection: "row",
    marginTop: 37,
    marginLeft: 22
  },
  icon: {
    color: "rgba(94,23,235,1)",
    fontSize: 40
  },
  pengaturan: {
    color: "rgba(94,23,235,1)",
    fontSize: 26,
    marginLeft: 21,
    marginTop: 5,
    fontWeight: 'bold'
  },
  iconRow: {
    height: 43,
    flexDirection: "row",
    flex: 1,
    marginRight: 10
  },
  rect: {
    width: 350,
    height: 47,
    backgroundColor: "rgba(255,255,255,1)",
    borderRadius: 31,
    flexDirection: "row",
    marginTop: 56,
    marginLeft: 22
  },
  icon2: {
    color: "rgba(94,23,235,1)",
    fontSize: 40
  },
  darkMode: {
    color: "#121212",
    height: 25,
    width: 129,
    fontSize: 18,
    textAlign: "left",
    marginLeft: 9,
    marginTop: 11
  },
  materialSwitch: {
    width: 45,
    height: 23,
    marginLeft: 88,
    marginTop: 11
  },
  icon2Row: {
    height: 43,
    flexDirection: "row",
    flex: 1,
    marginRight: 21,
    marginLeft: 9,
    marginTop: 2
  },
  rect1: {
    width: 350,
    height: 67,
    backgroundColor: "rgba(255,255,255,1)",
    borderRadius: 31,
    flexDirection: "row",
    marginTop: 14,
    marginLeft: 22,
  },
  icon3: {
    color: "rgba(94,23,235,1)",
    fontSize: 40
  },
  loremIpsum: {
    color: "#121212",
    height: 47,
    width: 207,
    fontSize: 18,
    marginLeft: 11
  },
  materialSwitch1: {
    width: 45,
    height: 23,
    marginLeft: 8,
    marginTop: 10
  },
  icon3Row: {
    height: 47,
    flexDirection: "row",
    flex: 1,
    marginRight: 5,
    marginLeft: 9,
    marginTop: 12
  },
  btnlogin: {
    width: 192,
    height: 54,
    marginTop: 580,
    marginLeft: 92
  },
  button1: {
    width: 192,
    height: 54,
    backgroundColor: "rgba(94,23,235,1)",
    borderRadius: 39
  },
  login: {
    color: "rgba(255,255,255,1)",
    fontSize: 28,
    marginTop: 10,
    marginLeft: 62
  },
   rect3: {
    width: 350,
    height: 60,
    backgroundColor: "rgba(94,23,235,1)",
    borderRadius: 31,
    flexDirection: "row",
    marginTop: 350,
    marginLeft: -50
   }
});
  
export default Pengaturan