import { Animated, Dimensions, Easing, StyleSheet, Text, TouchableOpacity } from 'react-native'
import React, { useEffect, useRef } from 'react'

interface iButtomAnimated {
    handlerNavigate: ()=> void
}

const ButtomAnimated = ({ handlerNavigate }: iButtomAnimated) => {

    const animation = useRef<any>(null)
    const position = useRef(new Animated.Value(0)).current

    const buttonAnimated = () => {
        animation.current = Animated.timing(position, {
            toValue: 70,
            duration: 1000,
            easing: Easing.bezier(0, 1, 0, 1),
            useNativeDriver: true,
        })
        animation.current.start()
    }

    useEffect(() => {
        setTimeout(() => {
            buttonAnimated()
        }, 200)
    }, [])


    return (
        <Animated.View style={
            [
                styles.borders,
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
            <TouchableOpacity onPress={handlerNavigate} style={styles.button}>
                <Text style={{ color: '#fff' }}>INGRESAR</Text>
            </TouchableOpacity>
        </Animated.View>
    )
}

export default ButtomAnimated

const styles = StyleSheet.create({
    borders: {
        borderLeftWidth: 2,
        borderBottomWidth: 2,
        padding: 2,
        position: 'absolute',
        bottom: 0
    },
    button: {
        width: Dimensions.get('screen').width / 2 - 6,
        backgroundColor: '#000',
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
    }
})