import * as React from 'react';
import { Text, View } from 'react-native';

export default class TransactionScreen extends React.Component{
  render(){
    return(
     <View style={{flex:1, backgroundColor: '#314654', justifyContent: "center", alignItems: "center"}}>
      <Text style= {{color: 'turquoise', fontSize: 30}}>
      Hey
      </Text>
      </View>
    )
  }
}
