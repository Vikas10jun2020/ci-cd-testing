import { View, Text, Image } from 'react-native'
import React from 'react'
import { styles } from './styles'

const MovieCard = ({data}) => {
  return (
    <View style={styles.cardContainer}>
        <Image style={{height:180,width:120}} source={{uri:"https://image.tmdb.org/t/p/w200/1E5baAaEse26fej7uHcjOgEE2t2.jpg"}}/>
      <Text>MovieCard</Text>
    </View>
  )
}

export default MovieCard