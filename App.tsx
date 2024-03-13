import {  SafeAreaView } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Home } from './src/screens'

const App = () => {
  const [data,setData]=useState(null)
  
  useEffect(()=>{
    axios.get('https://api.themoviedb.org/3/movie/157336?api_key=1f10c0b800ff93a56985100ba46bb3eb').then(res=>{
      setData(res.data)
      console.log('....')
    }).catch(err=>{
      console.log("Error"+err)
    })
  },[])
  return (
    <SafeAreaView style={{flex:1}}>
    {/* <View style={{flex:1,backgroundColor:'white',justifyContent:'center',alignItems:'center'}}>
      <StatusBar backgroundColor={'teal'} hidden/>
      <Image source={{uri:'https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.png'}} style={{height:50,width:200}}/>
    </View> */}
    <Home/>
    </SafeAreaView>
  )
}

export default App