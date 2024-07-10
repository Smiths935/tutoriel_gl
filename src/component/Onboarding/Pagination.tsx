import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import DataOnboarding from '../../data/DataOnboarding'
import { SharedValue } from 'react-native-reanimated'
import Dot from './Dot'

type Props = {
    data:DataOnboarding[];
    x:SharedValue
}

const Pagination = ({data,x}: Props) => {
  return (
    <View style={Styles.paginationContent}>
      {
        data.map((_,_index)=>{
            return <Dot key={_index} index={_index} x={x}/>
        })
      }
    </View>
  )
}

export default Pagination

const Styles = StyleSheet.create({
    paginationContent:{
        flexDirection:"row",
        height:40,
        justifyContent:"center",
        alignItems:"center"
    }
})