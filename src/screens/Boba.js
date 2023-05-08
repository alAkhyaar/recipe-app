import { setStatusBarBackgroundColor } from "expo-status-bar";
import React, {useState, useEffect, Component} from "react";
import { View, Text, FlatList, TouchableOpacity, StatusBar, Image, ScrollView, ImageBackground} from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';

function Boba ({ navigation }) {
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

  const [dataTrending, setDataTrending] = useState([
    {namaResep: 'Korean Spicy Chicken', author: 'Mr. Pudidi', image: require('../images/1.jpg')},
    {namaResep: 'Mie Ramen', author: 'Om Ded', image: require('../images/2.jpg')},
    {namaResep: 'es Boba', author: 'Megachan', image: require('../images/3.jpg')},
    {namaResep: 'Eskrim Ala Mixue', author: 'Khaby Lame', image: require('../images/4.jpg')},
    {namaResep: 'Nasi Goreng Seafood', author: 'Mang Oleh', image: require('../images/5.jpg')},
  ]);

  const [dataVideo, setDataVideo] = useState([
    {namaResep: 'Korean Spicy Chicken', author: 'Mr. Pudidi', image: require('../images/1.jpg',), length: '12:12'},
    {namaResep: 'Mie Ramen', author: 'Om Ded', image: require('../images/2.jpg'), length: '12:12'},
    {namaResep: 'es Boba', author: 'Megachan', image: require('../images/3.jpg'), length: '12:12'},
    {namaResep: 'Eskrim Ala Mixue', author: 'Khaby Lame', image: require('../images/4.jpg'), length: '12:12'},
    {namaResep: 'Nasi Goreng Seafood', author: 'Mang Oleh', image: require('../images/5.jpg'), length: '12:12'},
  ]);

  return (
    <View style={{
      flex: 1, 
      backgroundColor: '#f5f5f5'
    }}>
    <ScrollView>
      <StatusBar backgroundColor="#f5f5f5" barStyle="dark-content"/>
      <View style={{
        marginHorizontal: 20, 
        marginBottom: 20, 
        marginTop: 20
      }}>
        <Text style={{
          fontSize: 30, 
          fontWeight: 'bold', 
          color: '#212121'
        }}>
        cook
          <Text style={{
            color: '#5e17eb'
          }}>
            id
          </Text>
        </Text>
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
                marginLeft: 5
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
      <View style={{
        marginHorizontal: 20, 
        marginBottom: 10, 
        marginTop: 20, 
        flexDirection: 'row'
      }}>
        <View style={{
          justifyContent: 'center', 
          alignItems: 'center'
        }}>
          <Text style={{
            fontSize: 20, 
            fontWeight: 'bold', 
            color: '#212121'
          }}>
          Trending
          </Text>
        </View>
        <TouchableOpacity style={{
          justifyContent: 'flex-end', 
          alignItems: 'center', 
          flex: 1, 
          flexDirection: 'row', 
          marginTop: 10
        }}>
          <Text style={{
            fontSize: 15, 
            color: '#bdbdbd'
          }}>
            Lihat Semua</Text>
          <Icon name="chevron-forward" size={21} color="#bdbdbd"/>
        </TouchableOpacity>
      </View>
      <View>
        <FlatList
          data={dataTrending}
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{marginLeft: 10}}
          renderItem={({item})=> (
            <TouchableOpacity 
              style={{
                marginRight: 5,
                backgroundColor: '#fff',
                elevation: 3,
                paddingHorizontal: 15,
                paddingVertical: 8,
                marginBottom: 10,
                borderRadius: 15,
                marginLeft: 5
              }}>
              <Image
                source={item.image}
                style={{width: 200, height: 150, marginTop: 10, marginBottom: 10, borderRadius: 3}}
                resizeMode= {'cover'}
              />
              <Text
                style={{
                  color: '#212121',
                  fontSize: 20,
                  fontWeight: 'bold'
                }}>{item.namaResep}
              </Text>
              <Text
                style={{
                  color: '#808080',
                }}>{item.author}
              </Text>
            </TouchableOpacity>
          )}
        />
      </View>
      <View style={{
        marginHorizontal: 20, 
        marginBottom: 10, 
        marginTop: 20, 
        flexDirection: 'row'
      }}>
        <View style={{
          justifyContent: 'center', 
          alignItems: 'center'
        }}>
          <Text style={{
            fontSize: 20, 
            fontWeight: 'bold', 
            color: '#212121'
          }}>
          Video Masak
          </Text>
        </View>
        <TouchableOpacity style={{
          justifyContent: 'flex-end', 
          alignItems: 'center', 
          flex: 1, 
          flexDirection: 'row', 
          marginTop: 10
        }}>
          <Text style={{
            fontSize: 15, 
            color: '#bdbdbd'
          }}>
            Lihat Semua</Text>
          <Icon name="chevron-forward" size={21} color="#bdbdbd"/>
        </TouchableOpacity>
      </View>
      <View>
        <FlatList
          data={dataVideo}
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{marginLeft: 10}}
          renderItem={({item})=> (
            <TouchableOpacity 
              style={{
                marginRight: 5,
                backgroundColor: '#fff',
                elevation: 3,
                paddingHorizontal: 15,
                paddingVertical: 8,
                marginBottom: 10,
                borderRadius: 15,
                marginLeft: 5
              }}>
              <ImageBackground
                source={item.image}
                style={{
                  width: 200, 
                  height: 150, 
                  marginTop: 10, 
                  marginBottom: 10, 
                  borderRadius: 3
                }}
                resizeMode= {'cover'}
              >
                <View style={{flex: 1}}>
                <View style={{flex: 1}}></View>
                  <View style={{flexDirection: 'row'}}>
                    <View style={{
                      justifyContent: 'center', 
                      alignItems: 'center', 
                      backgroundColor: 'rgba(0,0,0,0.7)',
                      paddingTop: 2,
                      paddingBottom: 2
                      }}>
                      <Icon 
                        style={{marginLeft:5}}
                        name="play-circle" 
                        size={19} 
                        color="#bdbdbd"
                      />
                    </View>
                    <View style={{
                      justifyContent: 'center', 
                      alignItems: 'center', 
                      backgroundColor: 'rgba(0,0,0,0.7)',
                      paddingRight: 10,
                      paddingTop: 2,
                      paddingBottom: 2, 
                      paddingLeft: 4
                      }}>
                      <Text style={{color: '#fff'}}>{item.length}</Text>
                    </View>
                  </View>
                </View>
              </ImageBackground>
              <Text
                style={{
                  color: '#212121',
                  fontSize: 20,
                  fontWeight: 'bold'
                }}>{item.namaResep}
              </Text>
              <Text
                style={{
                  color: '#808080',
                }}>{item.author}
              </Text>
            </TouchableOpacity>
          )}
        />
      </View>
    </ScrollView>
    <View style={{
      flexDirection: 'row', 
      paddingTop: 5, 
      paddingBottom: 5}}>
      <TouchableOpacity style={{
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
      }} onPress={() => navigation.navigate('Home')}>
        <Icon 
          style={{marginLeft:5}}
          name="home-sharp" 
          size={40} 
          color="#5e17eb"
        />
        <Text style={{
          color: '#5e17eb'
        }}>
          Beranda
        </Text>
      </TouchableOpacity>
            <TouchableOpacity style={{
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
      }} onPress={() => navigation.navigate('Cari')}>
        <Icon 
          style={{marginLeft:5}}
          name="search-sharp" 
          size={40} 
          color="#5e17eb"
        />
        <Text style={{
          color: '#5e17eb'
        }}>
          Cari
        </Text>
      </TouchableOpacity>
            <TouchableOpacity style={{
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
      }} onPress={() => navigation.navigate('Pengaturan')}>
        <Icon 
          style={{marginLeft:5}}
          name="settings-sharp" 
          size={40} 
          color="#5e17eb"
        />
        <Text style={{
          color: '#5e17eb'
        }}>
          Pengaturan
        </Text>
      </TouchableOpacity>
    </View>
    </View>
  );
}
  
export default Boba