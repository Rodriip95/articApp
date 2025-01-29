import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../../../navigation/navigation';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { getUrlImage } from '../../../services/api';
import TextView from '../../../components/TextView';
import { EnumTypeText } from '../../../types/textEnums';
import { TypeArtworks } from '../../../types/types';

interface iItemList {
    item: TypeArtworks;
}

const ItemList = ({ item }: iItemList) => {

    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
    const navigateDetails = (id:number) => {
        navigation.navigate('DetailScreen' , {
            id
        })
    }

    return (
        <TouchableOpacity onPress={()=>navigateDetails(item.id)} style={styles.container}>
            <Image 
                style={styles.imageColor} 
                source={{ uri: getUrlImage(item.image_id) }} 
                resizeMode={'cover'} 
                height={Dimensions.get('screen').width / 2 - 40} 
                width={Dimensions.get('screen').width / 2 - 40} 
                />
            <TextView text={item.title} typeText={EnumTypeText.DESCRIPTION}/>
            <TextView text={item.artist_title} typeText={EnumTypeText.MIN} color='#999'/>
        </TouchableOpacity>
    )
}

export default ItemList

const styles = StyleSheet.create({
    container: {
        width: Dimensions.get('screen').width / 2 - 20,
        borderBottomWidth: 2,
        borderLeftWidth: 2,
        paddingVertical: 5,
        paddingHorizontal: 5,
        marginVertical: 5,
        marginRight: 10,
        borderColor: '#989898',
        backgroundColor: '#fff'
    },
    imageColor: {
        backgroundColor: '#dadada',
        alignSelf: 'center'
    }
})