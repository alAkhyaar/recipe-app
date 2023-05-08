import { setStatusBarBackgroundColor } from "expo-status-bar";
import React, {useState, useEffect, Component} from "react";
import { View, Text, FlatList, TouchableOpacity, StatusBar, Image, ScrollView, Switch,ImageBackground, StyleSheet} from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';

function Cari ({navigation}) {
    const [kategori, setKategori] = useState ([
    {
      nama : 'Ayam',
    },
    {
      nama : 'Mie',
    },
    {
      nama : 'Sayur',
    },
    {
      nama : 'Steak',
    },
    {
      nama : 'Nasi Goreng',
    },
    {
      nama : 'Junk Food',
    },
    {
      nama : 'Nasi Goreng',
    },
    {
      nama : 'Gorengan',
    },
    {
      nama : 'Ice Cream',
    },
    {
      nama : 'Salad',
    },
    {
      nama : 'Minuman',
    },
    ]);

    const [kategoriSeleksi, setKategoriSeleksi] = useState([
    {
      nama : 'Ayam'
    },
    ]);

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.buttonBack} onPress={() => navigation.navigate('Home')}>
        <View style={styles.iconBackRow}>
          <Icon
            name="chevron-back"
            style={styles.iconBack}
          ></Icon>
          <Text style={styles.cari}>Cari</Text>
        </View>
      </TouchableOpacity>
      <View style={styles.searchBar}>
        <View style={styles.iconSearchRow}>
          <Icon
            name="search"
            style={styles.iconSearch}
          ></Icon>
          <Text style={styles.text}>Search</Text>
        </View>
      </View>
      <View>
        <FlatList
          data={kategori}
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{marginLeft: 10}}
          renderItem={({item})=> (
            <TouchableOpacity 
              style={{
                marginRight: 5,
                backgroundColor: 
                  kategoriSeleksi.nama == item.nama ? '#5e17eb' : '#5e17eb',
                elevation: 3,
                paddingHorizontal: 15,
                paddingVertical: 8,
                marginBottom: 10,
                borderRadius: 15,
                marginLeft: 5,
                marginTop: 20
              }}
              onPress={()  => setKategoriSeleksi(item)}>
              <Text
                style={{
                  color: kategoriSeleksi.nama == item.nama ? '#fff' : '#fff',
                }}>{item.nama}
              </Text>
            </TouchableOpacity>
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(230,229,230,1)"
  },
  buttonBack: {
    width: 187,
    height: 43,
    flexDirection: "row",
    marginTop: 37,
    marginLeft: 22
  },
  iconBack: {
    color: "rgba(94,23,235,1)",
    fontSize: 40
  },
  cari: {
    color: "rgba(94,23,235,1)",
    fontSize: 26,
    marginLeft: 21,
    marginTop: 5,
    fontWeight: 'bold'
  },
  iconBackRow: {
    height: 43,
    flexDirection: "row",
    flex: 1,
    marginRight: 103
  },
  searchBar: {
    width: 329,
    height: 47,
    backgroundColor: "rgba(255,255,255,1)",
    borderRadius: 31,
    flexDirection: "row",
    marginTop: 16,
    alignSelf: "center"
  },
  iconSearch: {
    color: "rgba(94,23,235,1)",
    fontSize: 35
  },
  text: {
    color: "#121212",
    height: 25,
    width: 129,
    fontSize: 19,
    textAlign: "left",
    marginLeft: 9,
    marginTop: 6
  },
  iconSearchRow: {
    height: 38,
    flexDirection: "row",
    flex: 1,
    marginRight: 156,
    marginLeft: 9,
    marginTop: 5
  }
});

export default Cari;
