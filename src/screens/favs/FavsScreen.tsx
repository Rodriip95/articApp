import { BackHandler, FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useAppSelector } from '../../store/store'
import { TypeArtworks, TypeDataArtworks, TypeResponseArtworks } from '../../types/types'
import { getArtworksForFields } from '../../services/api'
import { formatFavsForApi } from '../../utils/utils'
import ErrorMsg from '../../components/ErrorMsg'
import ItemList from '../artworks/components/ItemList'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { RootStackParamList } from '../../navigation/navigation'
import { FontAwesome } from '@expo/vector-icons'
import TextView from '../../components/TextView'
import { EnumTypeText } from '../../types/textEnums'

type TypeResponseFavs = {
    data: TypeArtworks[]
}

interface iFavsScreen {
    navigation: NativeStackNavigationProp<RootStackParamList, 'FavsScreen'>;
}

const FavsScreen = ({navigation}: iFavsScreen) => {

    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)
    const [data, setData] = useState<TypeArtworks[] | undefined>(undefined)

    const state = useAppSelector((state)=> state.artworks)

    useEffect(() => {
        init(state.favs);
        // Controlador de back en dispositivo fisico Android
        const backHandlerListener = BackHandler.addEventListener('hardwareBackPress', () => {
            navigation.goBack()
            return true
        });
        return () => {
            backHandlerListener.remove();
        };
    }, [state]);

    const init = async(favs: string[]) => {
        setLoading(true)
        setError(false)
        try {
          if(favs.length === 0){
            setData(undefined)
          } else {
            const response: TypeResponseFavs = await getArtworksForFields(formatFavsForApi(favs))
            setData(response.data)
          }
        } catch {
            setError(true)
        } finally {
            setLoading(false)
        }
    }

  return (
    <View style={styles.container}>
      {error ? (
        <ErrorMsg onPress={() => init(state.favs)} />
      ) : (
        <View>
          {!data ? (
            <View style={{alignItems:'center'}}>
              <TextView text="Empty list" typeText={EnumTypeText.TITLE} color='#888' />
            </View>
          ) : (
            <FlatList
              data={data}
              renderItem={({ item }) => <ItemList item={item} />}
              keyExtractor={(item: any) => item.id}
              contentContainerStyle={styles.containerFlatlist}
              numColumns={2}
              refreshing={loading}
              onRefresh={() => init(state.favs)}
            />
          )}
        </View>
      )}
    </View>
  );
}

export default FavsScreen

const styles = StyleSheet.create({
    container: { flex: 1, padding: 10 },
    containerFlatlist: {flexDirection: 'column'}
  })