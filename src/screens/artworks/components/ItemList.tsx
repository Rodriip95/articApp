import { Dimensions, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

interface iItemList {
    item: {
        title: string;
        artist_display: string;
        image_id: string;
    }
}

const ItemList = ({ item }: iItemList) => {
    return (
        <View style={styles.container}>
            <Image 
                style={styles.imageColor} 
                source={{ uri: `https://www.artic.edu/iiif/2/${item.image_id}/full/843,/0/default.jpg` }} 
                resizeMode={'cover'} 
                height={Dimensions.get('screen').width / 2 - 40} 
                width={Dimensions.get('screen').width / 2 - 40} 
                />
            <Text>{item.title}</Text>
            <Text>{item.artist_display}</Text>
        </View>
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