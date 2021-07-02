import * as React from 'react';
import { Text, View } from 'react-native';

export default class SearchScreen extends React.Component{
  render(){
    return(
      <View style={{flex:1, backgroundColor: '#31463f', justifyContent: "center", alignItems: "center"}}>
      <Text style= {{color: 'darkseagreen', fontSize: 30}}>
      In three words I can sum up everything I’ve learned about life: it goes on.  
      </Text>
      </View>
    )
  }
}