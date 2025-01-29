// In App.js in a new project

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import store from './src/store/store'
import { Provider } from 'react-redux'
import { useFonts } from 'expo-font';
import registerNNPushToken from 'native-notify';
import RootNavigation from './src/navigation/RootNavigation';

export default function App() {

  registerNNPushToken(26923, 'xQodbYH34JYiZRk2dPK6dy');

  // Carga de fonts
  const [fontsFamilies] = useFonts({
    'NotoSerif-regular': require('./assets/fonts/NotoSerifTC-Regular.ttf'),
    'NotoSerif-semibold': require('./assets/fonts/NotoSerifTC-SemiBold.ttf'),
  });

  React.useEffect(()=>{
    console.log(fontsFamilies && 'Fonts loaded');
  },[])

  return (
    <Provider store={store} stabilityCheck='never'>
      <NavigationContainer>
        <RootNavigation />
      </NavigationContainer>
    </Provider>
  );
}