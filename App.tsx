// In App.js in a new project

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/home/HomeScreen';
import ArtworksScreen from './src/screens/artworks/ArtworksScreen';
import { RootStackParamList } from './src/types/navigation';
import DetailScreen from './src/screens/detail/DetailScreen';
import store from './src/store/store'
import { Provider } from 'react-redux'
import ButtomFav from './src/components/ButtomFav';
import { useFonts } from 'expo-font';
import HeaderHome from './src/components/HeaderHome';
import FavWidget from './src/components/FavWidget';
import FavsScreen from './src/screens/favs/FavsScreen';

const Stack = createNativeStackNavigator<RootStackParamList>();

function RootStack() {
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

export default function App() {

  // Carga de fonts
  const [fontsFamilies] = useFonts({
    'NotoSerif-regular': require('./assets/fonts/NotoSerifTC-Regular.ttf'),
    'NotoSerif-semibold': require('./assets/fonts/NotoSerifTC-SemiBold.ttf'),
  });

  return (
    <Provider store={store} stabilityCheck='never'>
      <NavigationContainer>
        <RootStack />
      </NavigationContainer>
    </Provider>
  );
}