import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import { RootStackParamList } from '../../types/navigation';
import ButtomAnimated from '../../components/ButtomAnimated';
import TextView from '../../components/TextView';
import { EnumTypeText } from '../../types/textEnums';
import { useFonts } from 'expo-font';

interface iHomeScreen {
  navigation: NativeStackNavigationProp<RootStackParamList, 'HomeScreen'>;
}

const HomeScreen = ({navigation}:iHomeScreen) => {
  
  const handlerNavigate = () => {
    navigation.replace('ArtworksScreen')
  }

  return (
    <View style={styles.container}>
      <View style={styles.containerCenter}>
        <View style={styles.logo}>
          <TextView text='Art' semibold typeText={EnumTypeText.TITLE}/>
          <TextView text='Institute' semibold typeText={EnumTypeText.TITLE}/>
          <TextView text='Chicago' semibold typeText={EnumTypeText.TITLE}/>
          <TextView text='App' semibold typeText={EnumTypeText.TITLE}/>
        </View>
          <ButtomAnimated handlerNavigate={handlerNavigate}/>
        </View>
      <StatusBar style="auto"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    borderWidth: 3,
    width: Dimensions.get('screen').width / 2,
    height: Dimensions.get('screen').width / 2,
    flexDirection: 'column',
    justifyContent: 'flex-end',
    padding: 15,
    backgroundColor: '#fff',
    zIndex: 9
  },
  containerCenter: {alignItems: 'center'}
});
 


export default HomeScreen;