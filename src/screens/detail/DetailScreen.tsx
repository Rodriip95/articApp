import { ActivityIndicator, BackHandler, Dimensions, Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { getArtworksForFields, getUrlImage } from '../../services/api';
import TextView from '../../components/TextView';
import { EnumTypeText } from '../../types/textEnums';
import { TypeDataArtworks, TypeResponseArtworks } from '../../types/types';
import { inDetailsArtworks } from '../../reducer/reducer';
import ButtomFav from '../../components/ButtomFav';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/navigation';
import ErrorMsg from '../../components/ErrorMsg';
import { useAppDispatch } from '../../store/store';

interface iDetailScreen {
    route: {
        params: {
            id: number;
        }
    }
    navigation: NativeStackNavigationProp<RootStackParamList, 'DetailScreen'>;
}

const DetailScreen = ({ route, navigation }: iDetailScreen) => {
    const { id } = route.params

    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)
    const [data, setData] = useState<TypeDataArtworks | undefined>(undefined)

    const dispatch = useAppDispatch()

    useEffect(() => {
        init()
        // Controlador de back en dispositivo fisico Android
        const backHandlerListener = BackHandler.addEventListener('hardwareBackPress', () => {
            navigation.goBack()
            return true
        });
        return () => {
            backHandlerListener.remove();
        };
    }, [])

    const init = async () => {
        setLoading(true)
        setError(false)
        try {
            const response: TypeResponseArtworks = await getArtworksForFields(id)
            setData(response.data[0])
            dispatch(inDetailsArtworks(response.data[0].id))
        } catch {
            setError(true)
        } finally {
            setLoading(false)
        }
    }

    const descriptionText = (data: TypeDataArtworks) => {
        return data.description ?
            data.description.replace(/<\/?[^>]+(>|$)/g, "") :
            data.short_description ? data.short_description : ''
    }

    // Controlador de Error
    if (error) {
        return (
            <View style={[styles.flex, styles.p20]}>
                <ErrorMsg onPress={init} />
            </View>
        )
    }

    return (
        <View style={styles.flex}>
            <ScrollView>
                {loading ?
                    <View style={styles.p20}>
                        <ActivityIndicator size={'large'} />
                    </View>
                    : data &&
                    <View>
                        <View style={styles.borders}>
                            <Image
                                style={styles.imageColor}
                                source={{ uri: getUrlImage(data.image_id) }}
                            />
                        </View>

                        <View style={styles.p20}>
                            <View style={styles.containerTitle}>
                                <View style={styles.flex9}>
                                    <TextView text={data.title} typeText={EnumTypeText.SUBTITLE} />
                                </View>
                                <ButtomFav id={data.id} />
                            </View>
                            {data.date_display === 'Date unknown' ? null : <TextView text={data.date_display} typeText={EnumTypeText.MIN} color='#666' />}     
                            <TextView text={data.artist_display} typeText={EnumTypeText.DESCRIPTION} color='#555' />
                            <TextView text={descriptionText(data)} typeText={EnumTypeText.DESCRIPTION} />
                            {data.exhibition_history &&
                                <TextView text={data.exhibition_history.replace(/<\/?[^>]+(>|$)/g, "")} />
                            }
                        </View>
                    </View>
                }
            </ScrollView>
        </View>
    )
}

export default DetailScreen

const styles = StyleSheet.create({
    imageColor: {
        aspectRatio: 1,
        resizeMode: 'contain',
    },
    flex: {
        flex: 1
    },
    flex9: {
        flex: 0.9
    },
    borders: {
        borderBottomWidth: 2,
        borderColor: '#989898',
    },
    p20: { padding: 20 },
    containerTitle: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

})