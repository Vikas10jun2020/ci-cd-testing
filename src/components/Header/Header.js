import { View, Text, Image } from 'react-native'
import React from 'react'
import { styles } from './styles'

const Header = () => {
    
  return (
    <View style={{padding:10,backgroundColor:'black'}}>
     <Image style={styles.imageHeight} source={{uri:"https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.png"}}/>
    </View>
  )
}

export default Header