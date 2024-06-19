import { Text, Pressable, View } from 'react-native';
import {styles} from '../styles/RecruitStyle'

export default function CustomButton({onPress, title}) {
  return (
    <View style={styles.btnContainer}>
      <Pressable style={styles.btn} onPress={onPress}>
        <Text style={styles.btnTxt}>{title}</Text>
      </Pressable>
    </View>
  );
}
