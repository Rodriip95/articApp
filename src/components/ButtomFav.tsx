import { StyleSheet, Text, TouchableHighlight, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { addFavsForDetails } from '../reducer/reducer';
import { useAppDispatch, useAppSelector } from '../store/store';

interface iButtomFav {
    id: number;
}

const ButtomFav = ({id}:iButtomFav) => {
    const [check, setCheck] = useState<boolean>()
    
    const dispatch = useAppDispatch()
    const state = useAppSelector((state)=> state.artworks)

    const onPressButtom = (id:number) =>{
        handlerCheck(state.favs, id, false)
        dispatch(addFavsForDetails(id))
    }

    const handlerCheck = (favs: number[], id: number, review: boolean) => {
        if(favs.find((f) => f === id)){
            setCheck(review ? true : false)
        } else {
            setCheck(review ? false : true)
        }
    }

    useEffect(()=>{
        handlerCheck(state.favs, id, true)
    },[])

    return (
        <TouchableOpacity onPress={()=>onPressButtom(id)} style={styles.paddingBtn}>
            <MaterialIcons name={check ? "favorite" : "favorite-outline"} size={24} color="#000" />
        </TouchableOpacity>
    )
}

export default ButtomFav

const styles = StyleSheet.create({
    paddingBtn: {padding: 5}
})