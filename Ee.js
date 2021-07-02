import * as React from 'react';
import { Text, View } from 'react-native';

export default class PrintScreen extends React.Component{
  render(){
    return(
     <View style={{flex:1, backgroundColor: '#420F1D', justifyContent: "center", alignItems: "center"}}>
      <Text style= {{color: '#68182E', fontSize: 40, fontWeight: "bold"}}>
      Never Give Up
      </Text>
      </View>
    )
  }
}