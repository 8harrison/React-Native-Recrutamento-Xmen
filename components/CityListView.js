import { View, FlatList, Text, Pressable } from 'react-native';
import { useContext } from 'react';
import CityCard from './CityCard';
import { ContextValue } from '../context/ContextValue';
import { sliceLocationInformation } from '../utils/utils';
import { styles } from '../styles/CityListView.style';

export default function CityListView() {
  const { cityList, setCityList, setXmen, deltas, xmen } =
    useContext(ContextValue);

  const getCities = () => {
    let cities = cityList.map((c) => {
      const info = sliceLocationInformation(c.display_name);
      return {
        ...info,
        latitude: parseFloat(c.lat),
        longitude: parseFloat(c.lon),
      };
    });
    return cities;
  };

  const getLocation = (item) => {
    setXmen({...xmen, location:{...item, ...deltas}})
    console.log({ ...item, ...deltas });
    setCityList([]);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Selecione a cidade correta</Text>
      <FlatList
        data={getCities()}
        renderItem={({ item }) => (
          <Pressable onPress={() => getLocation(item)}>
            <CityCard
              cidade={item.cidade}
              estado={item.estado}
              pais={item.pais}
            />
          </Pressable>
        )}
      />
    </View>
  );
}
