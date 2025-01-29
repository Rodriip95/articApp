import { ActivityIndicator, BackHandler, Dimensions, FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import ToastBackHandler from '../../components/ToastBackHandler';
import { getArtworks } from '../../services/api';
import ItemList from './components/ItemList';
import ErrorMsg from '../../components/ErrorMsg';
import { useSelector } from 'react-redux';

const ArtworksScreen = () => {
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState([])
  const [error, setError] = useState(false)

  useEffect(()=>{
    init()
  },[])

  const init = async() => {    
    setLoading(true)
    setError(false)    
    try {
      const response = await getArtworks()      
      setData(response.data)                 
    } catch (error) {
      if(error){
        setError(true)
      }
    } finally {
      setLoading(false)
    }
  }

  return (
    <View style={styles.container}>
      {error ? <ErrorMsg onPress={init} /> :
        <>
          <FlatList
            data={data}
            renderItem={({ item }) => <ItemList item={item} />}
            keyExtractor={(item: any) => item.id}
            contentContainerStyle={styles.containerFlatlist}
            numColumns={2}
            refreshing={loading}
            onRefresh={init}
          />
          <ToastBackHandler />
        </>
      }
    </View>
  )
}

export default ArtworksScreen

const styles = StyleSheet.create({
  container: { flex: 1, padding: 10 },
  containerFlatlist: {flexDirection: 'column'}
})