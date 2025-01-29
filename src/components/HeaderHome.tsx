import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import TextView from './TextView'
import { EnumTypeText } from '../types/textEnums'

const HeaderHome = () => {
  return (
    <View>
      <TextView text='Art Institute Chicago' color={'#fff'} semibold typeText={EnumTypeText.SUBTITLE}/>
    </View>
  )
}

export default HeaderHome