import * as React from 'react';
import { Text, View } from 'react-native';

export default class AirplaneScreen extends React.Component{
  render(){
    return(
     <View style={{flex:1, backgroundColor: 'steelblue', justifyContent: "center", alignItems: "center"}}>
      <Text style= {{color: 'powderblue', fontSize: 30}}>
     I didn’t come this far to only come this far. It’s going to be hard. But hard is not impossible.
      </Text>
      </View>
    )
  }
}