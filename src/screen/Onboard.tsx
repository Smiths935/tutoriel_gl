import { FlatList, StyleSheet, ViewToken, View } from 'react-native'
import React from 'react'
import Animated, { useAnimatedRef, useAnimatedScrollHandler, useSharedValue } from 'react-native-reanimated'
import DataOnboarding from '../data/DataOnboarding'
import RenderItemOnboarding from '../component/Onboarding/RenderItemOnboarding'
import Pagination from '../component/Onboarding/Pagination'



const Onboard = () => {
    const flatlistRef = useAnimatedRef<FlatList<DataOnboarding>>();
    const x = useSharedValue(0)
    const flatListIndex = useSharedValue(0)
    const onViewableItemsChanged = ({viewavleItems}:{viewavleItems:ViewToken[]})=>{
        if(viewavleItems[0].index !== null){
            flatListIndex.value = viewavleItems[0].index
        }
    }
    const onscroll = useAnimatedScrollHandler({
        onScroll:event=>{
            x.value=event.contentOffset.x;
        }
    })
  return (
    <View style={styles.container}>
      <Animated.FlatList
      ref={flatlistRef}
      onScroll={onscroll}
      data={DataOnboarding}
      renderItem={({item,index})=>{
        return <RenderItemOnboarding item={item} 
        index={index} x={x}/>
      }}
      keyExtractor={item=>item.id}
      scrollEventThrottle={16}
      horizontal={true}
      bounces={false}
      pagingEnabled={true}
      showsHorizontalScrollIndicator={false}
      onViewableItemsChanged={onViewableItemsChanged}
      viewabilityConfig={{
        minimumViewTime:300,
        viewAreaCoveragePercentThreshold:10,
      }}
      />
      <View style={styles.bottomContainer}>
        <Pagination data={DataOnboarding} x={x}/>
      </View>
    </View>
  )
}

export default Onboard

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#0ef",
    },
    bottomContainer:{
        position:"absolute",
        bottom:20,
        left:0,
        right:0,
        marginHorizontal:30,
        paddingVertical:30,
    }
})