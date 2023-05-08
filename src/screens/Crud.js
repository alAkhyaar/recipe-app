import React, {Component} from "react";
import { View, Text, TouchableOpacity, FlatList } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

let objek = {nim: '0803040056', nama:'Ridho'};

class App extends Component{
  constructor(props) {
    super(props);
    this.state = {
      value: [],
      dataArray:[
                  {nim: '0803040056', nama:'Ridho'},
                  {nim: '0803040057', nama:'Mukti'},
                  {nim: '0803040058', nama:'Adi'},
                  {nim: '0803040059', nama:'Ridho1'}
                ],
    };

  }

  //mempertahankan data 
  componentDidMount(){
    this.TampilkanData('@DataArray');
  }
//Tambah Data
TambahData = async (data, kunci) => {
  try {
    await AsyncStorage.setItem(kunci, JSON.stringify(data));
    console.log('data berhasil disimpan');
  }
  catch (e){
    console.log(e);
  }
} 

//Tampilkan Data
TampilkanData = async (kunci) => {
  try {
    let value = await AsyncStorage.getItem(kunci);
    value = JSON.parse(value);

    if (value !== null){
      this.setState({value});
    }
    console.log('data berhasil ditampilkan',value);
  }
  catch (e){
    console.log(e);
  }
} 

//ubah data
UbahData = () => {
  let value = this.state.value;
  value[3].nama = 'Arjuna';
  this.TambahData(value, '@DataArray');
  this.setState({value});
}

//Hapus Data
HapusData = async (kunci) => {
  try {
    await AsyncStorage.removeItem(kunci);
    console.log('data telah dihapus');
    this.setState({value: []});
  }
  catch (e){
    console.log(e);
    console.log('data tidak terhapus');
  }
} 

  render() {
    return <View>
      
      <TouchableOpacity onPress={() => this.TambahData('Heloo Guys','@DataString')}>
        <Text>Simpan</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => this.TambahData(objek, '@DataObject')}>
        <Text>Simpan Objek</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => this.TambahData(this.state.dataArray,'@DataArray')}>
        <Text>Simpan Array</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => this.UbahData()}>
        <Text>Ubah Data</Text>
      </TouchableOpacity>

       <TouchableOpacity onPress={() => this.TampilkanData('@DataArray')}>
        <Text>Tampilkan Data</Text>        
      </TouchableOpacity>

       <TouchableOpacity onPress={() => this.HapusData('@DataArray')}>
        <Text>Hapus Data</Text>
      </TouchableOpacity>

      <FlatList
        data={this.state.value}
        renderItem={({item}) => <Text>{item.nama}</Text>}
        keyExtractor={(item) => item.nama}
       />
    </View>;
  }
}

export default App;