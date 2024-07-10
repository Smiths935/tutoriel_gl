import { Image, SafeAreaView, StyleSheet, Text, useWindowDimensions, View } from 'react-native'
import React, { useEffect } from 'react'
import { COULEURS } from '../Constante/Couleur'
import { useNavigation } from '@react-navigation/native'


const SpalshScreen = () => {
    const navigation = useNavigation()
    const {width}= useWindowDimensions()
    useEffect(()=>{
       setTimeout(()=>{
            navigation.navigate('Intro')
       },3000) 
    },[])
  return (
    <SafeAreaView style={
        {
            flex:1,
            backgroundColor:COULEURS.primary,
            justifyContent:"center",
            alignItems:"center"
        }
    }>

      <Image
     style={{width:width*0.8,height:width*0.8,}}
      source={require('../../assets/splashR.png')}/>
      <Text style={{
        fontSize:30,
        color:COULEURS.white,
        marginVertical:20
      }}>Meeting Manager</Text>
    </SafeAreaView>
  )
}

export default SpalshScreen

const styles = StyleSheet.create({})