import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const Fallback = () => {
  return (
    <View style={{ alignItems: "center" }}>
      <Image source={require("../../assets/to-do.png")}
      />
      <Text style={{color: '#0D92F4'}}>Start Add Your Task</Text>
    </View>
  )
}

export default Fallback

const styles = StyleSheet.create({})