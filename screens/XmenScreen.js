import { View, FlatList, Pressable, Text } from 'react-native';
import { useContext, useEffect } from 'react';
import Card from '../components/Card';
import { style } from '../styles/XmenStyle';
import { ContextValue } from '../context/ContextValue';
import { useAsyncStorage } from '@react-native-async-storage/async-storage';

export default function XmenScreen({ navigation }) {
  const { mutants, setMutants, setXmen } = useContext(ContextValue);
  const { getItem, setItem } = useAsyncStorage('@xmen');

  const readDB = async () => {
    const result = await getItem();
    if (!result) setMutants([]);
    else setMutants(JSON.parse(result));
  };

  const toProfileScreen = (item) => {
    console.log('press')
    navigation.navigate('Profile', { name: item.name , info: item});
  };

  useEffect(() => {
    readDB();
    
  }, []);

  const toRecruit = () => {
    navigation.navigate('Recrutamento');
  };

  const exclud = (item) => {
    const list = mutants.filter(e => e !== item)
    setMutants(list)
    setItem(JSON.stringify(list))
  }

  return (
    <View style={style.container}>
      <FlatList
        data={mutants}
        renderItem={({ item }) => (
          <Pressable onPress={() => toProfileScreen(item)} onLongPress={() => exclud(item)}>
            <Card
              image={item.photo}
              name={item.name}
              power={item.power}
              location={item.location}
            />
          </Pressable>
        )}
      />
      <Pressable style={style.btn} onPress={toRecruit}>
        <Text style={style.txtBtn}>+</Text>
      </Pressable>
    </View>
  );
}
