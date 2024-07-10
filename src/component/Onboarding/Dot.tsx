import { StyleSheet, Text, useWindowDimensions, View } from 'react-native'
import React from 'react'
import Animated, { Extrapolation, interpolate, SharedValue, useAnimatedStyle } from 'react-native-reanimated'

type Props = {
    index:number;
    x:SharedValue<number>
}

const Dot = ({index,x}: Props) => {
    const {width:SCREEN_WIDTH} = useWindowDimensions()
    const animatedDotSyle = useAnimatedStyle(()=>{
        const widthAnimatiom = interpolate(
            x.value,
           [ (index - 1) * SCREEN_WIDTH,
            index  * SCREEN_WIDTH,
            (index + 1) * SCREEN_WIDTH,
        ],
        [10,20,10],
        Extrapolation.CLAMP
        )
        const opacityAnimatiom = interpolate(
            x.value,
           [ (index - 1) * SCREEN_WIDTH,
            index  * SCREEN_WIDTH,
            (index + 1) * SCREEN_WIDTH,
        ],
        [0.5,1,0.5],
        Extrapolation.CLAMP
        )
        return{
            width:widthAnimatiom,
            opacity:opacityAnimatiom
        }
    })
    const animateColor = useAnimatedStyle(()=>{
        const backgroundColor = interpolate(
            x.value,
            [0,SCREEN_WIDTH,2 * SCREEN_WIDTH],
            ['#005b4f','#1e2169','#f15937'],
        )
        return {backgroundColor: backgroundColor,}
    })
  return <Animated.View style={[styles.dot,animateColor,animatedDotSyle]}></Animated.View>
}

export default Dot

const styles = StyleSheet.create({
    dot:{
        width:10,
        height:10,
        borderRadius:5,
        marginHorizontal:5
    }
})