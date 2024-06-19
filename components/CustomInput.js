import { View, TextInput } from 'react-native';
import {Component} from 'react'
import {styles} from '../styles/RecruitStyle'

export default function CustomInput({value, onChangeText, placeholder, lines}) {

return(
  <View style={styles.inputContainer}>
    <TextInput onChangeText={onChangeText} style={styles.input} value={value} placeholder={placeholder} numberOfLines={lines}/> 
  </View>
)
}

export class Test extends Component {

  render(){
    return <View><TextInput/></View>
  }
}