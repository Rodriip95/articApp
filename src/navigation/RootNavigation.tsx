import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from './navigation';
import HomeScreen from '../screens/home/HomeScreen';
import ArtworksScreen from '../screens/artworks/ArtworksScreen';
import HeaderHome from '../components/HeaderHome';
import FavWidget from '../components/FavWidget';
import DetailScreen from '../screens/detail/DetailScreen';
import FavsScreen from '../screens/favs/FavsScreen';

const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigation() {
  return (
    <Stack.Navigator initialRouteName='HomeScreen'>
      <Stack.Screen name="HomeScreen" component={HomeScreen} options={{
        headerShown: false
      }}/>
      <Stack.Screen name="ArtworksScreen" component={ArtworksScreen} options={{
        headerStyle: {
          backgroundColor: '#000',
        },
        headerTitle: '',
        headerLeft: () => <HeaderHome/>,
        headerRight: () => <FavWidget/>,
      }}/>
      <Stack.Screen name="DetailScreen" component={DetailScreen} options={{
        // headerShown: false
        headerTitle: 'Information',
        headerTintColor: '#fff',
        headerStyle: {
          backgroundColor: '#000',
        },
        headerTitleAlign: 'center'
      }}/>
      <Stack.Screen name="FavsScreen" component={FavsScreen} options={{
        // headerShown: false
        headerTitle: 'Favs',
        headerTintColor: '#fff',
        headerStyle: {
          backgroundColor: '#000',
        },
        headerTitleAlign: 'center'
      }}/>
    </Stack.Navigator>
  );
}

export default RootNavigation
