import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

interface iErrorMsg {
    onPress: () => void;
}

const ErrorMsg = ({ onPress }: iErrorMsg) => {
    return (
        <View style={styles.container}>
            <Text>Hubo un problema al cargar las obras de arte</Text>
            <TouchableOpacity onPress={onPress}>
                <Text style={styles.text}>Reintentar</Text>
            </TouchableOpacity>
        </View>
    )
}

export default ErrorMsg

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        borderLeftWidth: 2,
        borderBottomWidth: 2,
        padding: 20,
        marginVertical: 10,
        alignItems: 'center'
    },
    text: {
        color: '#2973B2',
        paddingTop: 10
    }
})