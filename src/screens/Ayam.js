import React, { Component } from "react";
import {
  StyleSheet,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
  Text
} from "react-native";
import IoniconsIcon from "react-native-vector-icons/Ionicons";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";

function Ayam({navigation}) {
  return (
    <View style={styles.container}>
      <View style={styles.scrollArea}>
        <ScrollView
          horizontal={false}
          contentContainerStyle={styles.scrollArea_contentContainerStyle}
        >
          <View style={styles.imageStack}>
            <Image
              source={require("../images/1.jpg")}
              resizeMode="contain"
              style={styles.image}
            ></Image>
            <View style={styles.headerBox}>
              <View style={styles.buttonBackRow}>
                <TouchableOpacity style={styles.buttonBack} onPress={() => navigation.navigate('Home')}>
                  <IoniconsIcon
                    name="chevron-back"
                    style={styles.iconBack}
                  ></IoniconsIcon>
                </TouchableOpacity>
                <Text style={styles.header}>Korean Spicy Chicken</Text>
              </View>
            </View>
          </View>
          <View style={styles.rect}>
            <View style={styles.iconJamRow}>
              <IoniconsIcon
                name="timer"
                style={styles.iconJam}
              ></IoniconsIcon>
              <Text style={styles.textjam}>45 menit</Text>
              <IoniconsIcon
                name="restaurant"
                style={styles.iconPorsi}
              ></IoniconsIcon>
              <Text style={styles.loremIpsum1}>4 porsi</Text>
            </View>
          </View>
          <View style={styles.bahanBox}>
            <View style={styles.iconListRow}>
              <IoniconsIcon
                name="list-circle"
                style={styles.iconList}
              ></IoniconsIcon>
              <Text style={styles.bahanBahan}>Bahan - bahan</Text>
            </View>
            <View style={styles.loremIpsum3Row}>
              <Text style={styles.loremIpsum3}>
                Daging ayam tanpa tulang{"\n"}Garam{"\n"}Lada bubuk{"\n"}Tepung
                terigu serbaguna{"\n"}Tepung maizena{"\n"}Minyak goreng{"\n"}
                Wijen sangrai{"\n"}Bawang putih{"\n"}Bawang bombay{"\n"}Jahe,
                haluskan{"\n"}Saus tomat{"\n"}Saus sambal{"\n"}Saus tiram{"\n"}
                Madu{"\n"}Minyak wijen{"\n"}Air jeruk nipis
              </Text>
              <Text style={styles.loremIpsum5}>
                500 gram{"\n"}1 sdt{"\n"}1/2 sdt{"\n"}50 gram{"\n"}100 gram
                {"\n"}secukupnya{"\n"}secukupnya{"\n"}3 siung{"\n"}1 sdm{"\n"}1
                ruas jari{"\n"}2 sdm{"\n"}5 sdm{"\n"}1 sdm{"\n"}3 sdm{"\n"}1 sdt
                {"\n"}1 sdt
              </Text>
            </View>
          </View>
          <View style={styles.rect2}>
            <View style={styles.icon2Row}>
              <FontAwesomeIcon
                name="list-ol"
                style={styles.icon2}
              ></FontAwesomeIcon>
              <Text style={styles.langkah}>Langkah</Text>
            </View>
            <Text style={styles.loremIpsum6}>
              1. Cuci bersih ayam, potong sesuai selera, keringkan dengan tisu
              serap minyak atau lap bersih. Kemudian marinasi ayam, lumuri
              dengan garam dan lada. Diamkan di kulkas 20 menit.{"\n"}
              {"\n"}2. Balut ayam yang sudah dimarinasi dengan campuran tepung
              terigu dan maizena, aduk rata hingga seluruh ayam terbalut tepung.
              {"\n"}
              {"\n"}3. Goreng ayam hingga matang keemasan, tiriskan.{"\n"}
              {"\n"}4. Saus: Campur semua bahan saus kecuali bawang putih,
              bawang bombay dan jahe. Tumis bawang putih, bawang bombay dan jahe
              hingga harum. Masukkan campuran saus tomat, saus sambal, saus
              tiram, madu dan minyak wijen. Masak hingga saus meletup-letup.
              Tambahkan air jeruk nipis aduk rata.{"\n"}
              {"\n"}5. Campurkan ayam goreng ke dalam saus, aduk sampai semua
              bumbu rata melumuri ayam.{"\n"}
              {"\n"}6. Setelah matang, taburi dengan wijen sangrai.{"\n"}
              {"\n"}7. Agar ayam renyah, goreng ayam dua kali. Pertama masak
              ayam dengan api sedang kecil hingga tepung mulai kuning. Angkat
              dan diamkan 5 menit. Lalu goreng kembali hingga matang dengan
              minyak yang sudah panas dengan api sedang sedikit lebih besar.
            </Text>
          </View>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(230,229,230,1)"
  },
  scrollArea: {
    backgroundColor: "rgba(230,229,230,1)",
  },
  scrollArea_contentContainerStyle: {
    height: 1500,
    width: 390
  },
  image: {
    top: 23,
    left: 0,
    width: 390,
    height: 239,
    position: "absolute",
    borderBottomRightRadius: 100,
    backgroundColor: "rgba(0,0,0,1)"
  },
  headerBox: {
    top: 0,
    left: 0,
    width: 390,
    height: 90,
    position: "absolute",
    backgroundColor: "rgba(0,0,0,0.22)",
    borderBottomRightRadius: 0,
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 0,
      height: 0
    },
    elevation: 300,
    shadowOpacity: 1,
    shadowRadius: 100,
    flexDirection: "row"
  },
  buttonBack: {
    width: 26,
    height: 43
  },
  iconBack: {
    color: "rgba(255,255,255,1)",
    fontSize: 40
  },
  header: {
    color: "rgba(255,255,255,1)",
    fontSize: 26,
    fontWeight: 'bold',
    marginLeft: 10,
    marginTop: 5
  },
  buttonBackRow: {
    height: 43,
    flexDirection: "row",
    flex: 1,
    marginRight: 41,
    marginLeft: 22,
    marginTop: 37
  },
  imageStack: {
    width: 360,
    height: 262,
    marginTop: -23
  },
  rect: {
    width: 340,
    height: 69,
    backgroundColor: "rgba(255,255,255,1)",
    borderRadius: 32,
    flexDirection: "row",
    marginTop: 19,
    marginLeft: 22
  },
  iconJam: {
    color: "rgba(94,23,235,1)",
    fontSize: 40
  },
  textjam: {
    color: "rgba(94,23,235,1)",
    fontSize: 19,
    marginLeft: 11,
    marginTop: 10
  },
  iconPorsi: {
    color: "rgba(94,23,235,1)",
    fontSize: 40,
    marginLeft: 40
  },
  loremIpsum1: {
    color: "rgba(94,23,235,1)",
    fontSize: 19,
    marginLeft: 9,
    marginTop: 10
  },
  iconJamRow: {
    height: 43,
    flexDirection: "row",
    flex: 1,
    marginRight: 55,
    marginLeft: 32,
    marginTop: 13
  },
  bahanBox: {
    width: 340,
    height: 400,
    backgroundColor: "rgba(255,255,255,1)",
    borderRadius: 32,
    marginTop: 10,
    marginLeft: 20
  },
  iconList: {
    color: "rgba(94,23,235,1)",
    fontSize: 40
  },
  bahanBahan: {
    color: "rgba(94,23,235,1)",
    fontSize: 28,
    marginLeft: 14,
    marginTop: 4
  },
  iconListRow: {
    height: 43,
    flexDirection: "row",
    marginTop: 22,
    marginLeft: 52,
    marginRight: 41
  },
  loremIpsum3: {
    color: "#121212",
    fontSize: 15,
    textAlign: "left"
  },
  loremIpsum5: {
    color: "#121212",
    textAlign: "right",
    fontSize: 15,
    marginLeft: 28
  },
  loremIpsum3Row: {
    height: 294,
    flexDirection: "row",
    marginTop: 18,
    marginLeft: 19,
    marginRight: 20
  },
  rect2: {
    width: 340,
    height: 732,
    backgroundColor: "rgba(255,255,255,1)",
    borderRadius: 32,
    marginTop: 13,
    marginLeft: 20
  },
  icon2: {
    color: "rgba(94,23,235,1)",
    fontSize: 40
  },
  langkah: {
    color: "rgba(94,23,235,1)",
    fontSize: 28,
    marginLeft: 15,
    marginTop: 3
  },
  icon2Row: {
    height: 40,
    flexDirection: "row",
    marginTop: 27,
    marginLeft: 85,
    marginRight: 74
  },
  loremIpsum6: {
    color: "#121212",
    width: 290,
    height: 800,
    marginTop: 21,
    marginLeft: 22
  }
});

export default Ayam;
