import React from 'react'
import {Text,View} from 'react-native'

const HeaderCustom = ({title = 'Header', headerColor= '#0D92F4'}) => {
    return (
        <View style={{
            height:50,
            width:'100%', 
            backgroundColor:headerColor, 
            alignItems:'center', 
            justifyContent:'center'}}>
			<Text style={{
                fontSize:18, 
                fontWeight:'bold', 
                color:'#fff'
                }}>{title}</Text>
		</View>
    )
}

export default HeaderCustom