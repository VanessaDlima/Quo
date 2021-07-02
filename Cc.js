import * as React from 'react';
import { Text, View } from 'react-native';

export default class SwimScreen extends React.Component{
  render(){
    return(
      <View style={{flex:1, backgroundColor: '#31313f', justifyContent: "center", alignItems: "center"}}>
      <Text style= {{color: '#56566E', fontSize: 30}}>
      Anyone can give up, it's the easiest thing in the world to do. But to hold it together when everyone else would understand  you fell apart, that's true strength.
      </Text>
      </View>
    )
  }
}