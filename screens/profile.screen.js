import { View, Text, Image, StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { ContextValue } from '../context/ContextValue';
import { useContext } from 'react';

export default function ProfileScreen({ route }) {
  const { deltas } = useContext(ContextValue);
  const { name, photo, power, location } = route.params.info;
  return (
    <View style={styles.container}>
      <Image style={styles.img} source={{ uri: photo }} />
      <Text style={styles.originTxt}>Origem: </Text>
      <MapView style={styles.map} region={{ ...location, ...deltas }}>
        <Marker coordinate={{ ...location, ...deltas }} />
      </MapView>
      <Text style={styles.originTxt}>Poder: {power}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    // justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    backgroundColor: 'darkgrey',
    width: '100%',
    height: 500,
    padding: 16,
  },
  img: {
    width: 250,
    height: 250,
    marginBottom: 16,
  },
  map: {
    width: 250,
    height: 250,
    marginVertical: 16,
  },
  originTxt: {
    fontSize: 24,
    fontWeight: 700,
  },
});
