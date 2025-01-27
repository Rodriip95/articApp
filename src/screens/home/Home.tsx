import { StatusBar } from 'expo-status-bar';
import { useEffect, useRef } from 'react';
import { Animated, Dimensions, Easing, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function App() {

  const animation = useRef<any>(null)
  const position = useRef(new Animated.Value(0)).current

  const buttonAnimated = () => {
    animation.current = Animated.timing(position, {
      toValue: 70,
      duration: 1000,
      easing: Easing.bezier(0, 0.5, 0, 1),
      useNativeDriver: true,
    })

    animation.current.start()
  }

  useEffect(()=>{
    setTimeout(()=>{
      buttonAnimated()
    }, 500)
  },[])


  return (
    <View style={styles.container}>
      
      <View style={{alignItems: 'center'}}>
        <View style={{
          borderWidth: 3,
          width: Dimensions.get('screen').width / 2,
          height: Dimensions.get('screen').width / 2,
          flexDirection: 'column',
          justifyContent: 'flex-end',
          padding: 15,
          backgroundColor: '#fff',
          zIndex: 9
        }}>
          <Text>ARTIC</Text>
          <Text>APP</Text>
          
        </View>



        <Animated.View style={
          [
            {
              borderLeftWidth: 2,
              borderBottomWidth: 2,
              padding: 2,
              position: 'absolute',
              bottom: 0
            }, 
            {
              transform: [
                {
                  translateY: position
                }
              ]
            }
          ]
        }
          >
          <TouchableOpacity onPress={()=> console.log('asdasdas')} style={{
            width: Dimensions.get('screen').width / 2 - 6,
            backgroundColor: '#000',
            height: 50,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
            <Text style={{ color: '#fff' }}>INGRESAR</Text>
          </TouchableOpacity>
        </Animated.View>


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
});
 