import * as React from 'react';
import { Text, View } from 'react-native';

export default class SleepScreen extends React.Component{
  render(){
    return(
     <View style={{flex:1, backgroundColor: 'darkcyan', justifyContent: "center", alignItems: "center"}}>
      <Text style= {{color: 'cadetblue', fontSize: 30}}>
      Thank you!
      </Text>
      </View>
    )
  }
}