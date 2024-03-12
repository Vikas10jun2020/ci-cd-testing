import { View } from 'react-native'
import React from 'react'
import { Header, MovieCard } from '../components'

const url="https://api.themoviedb.org/3/movie/157336?api_key=1f10c0b800ff93a56985100ba46bb3eb&append_to_response=videos"
const Home = () => {
  return (
    <View style={{backgroundColor:"rgba(0,0,0,.8)",flex:1}}>
     <Header/>
     <MovieCard/>
    </View>
  )
}

export default Home