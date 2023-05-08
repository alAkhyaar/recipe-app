import * as React from 'react';
import { View, Text, ImageComponent } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Splash from './src/screens/Splash'
import Home from './src/screens/Home'
import Pengaturan from './src/screens/Pengaturan'
import Cari from './src/screens/Cari'
import Ayam from './src/screens/Ayam'
import Eskrim from './src/screens/Eskrim'
import Ramen from './src/screens/Ramen'
import Boba from './src/screens/Boba'
import Nasgor from './src/screens/Nasgor'
import KategoriAyam from './src/screens/KategoriAyam'
import DetailTrending from './src/screens/DetailTrending'
import Crud from './src/screens/Crud'
import login from './src/screens/login'
import tambah from './src/screens/Tambah'

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName="Splash"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Cari" component={Cari} />
        <Stack.Screen name="Pengaturan" component={Pengaturan} />
        <Stack.Screen name="Ayam" component={Ayam} />
        <Stack.Screen name="Ramen" component={Ramen} />
        <Stack.Screen name="Boba" component={Boba} />
        <Stack.Screen name="Eskrim" component={Eskrim} />
        <Stack.Screen name="Nasgor" component={Nasgor} />
        <Stack.Screen name="KategoriAyam" component={KategoriAyam} />
        <Stack.Screen name="DetailTrending" component={DetailTrending} />
        <Stack.Screen name="Crud" component={Crud} />
        <Stack.Screen name="login" component={login} />
        <Stack.Screen name="tambah" component={tambah} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;