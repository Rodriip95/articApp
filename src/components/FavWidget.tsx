import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import MaterialIcons from '@expo/vector-icons/MaterialIcons'
import { AntDesign } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { RootStackParamList } from '../types/navigation'

const FavWidget = () => {

    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

    const handlerNavigation = () => {
        navigation.navigate('FavsScreen')
    }

  return (
    <TouchableOpacity onPress={handlerNavigation} style={{
        flexDirection: 'row',
        alignItems:'center'
    }}>
        <AntDesign name="arrowright" size={24} color="#fff" />
        <MaterialIcons name={"favorite-outline"} size={24} color="#fff" />
    </TouchableOpacity>
  )
}

export default FavWidget