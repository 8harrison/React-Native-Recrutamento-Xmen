import { View, Image, TextInput } from 'react-native';
import { useState, useEffect, useContext } from 'react';
import { styles } from '../styles/RecruitStyle';
import MapView, { Marker } from 'react-native-maps'; 
import {
  requestForegroundPermissionsAsync,
  getCurrentPositionAsync,
} from 'expo-location';
import CityListView from '../components/CityListView';
import CustomInput from '../components/CustomInput';
import CustomButton from '../components/CustomButton';
import { searchPhoto } from '../utils/requests';
import { replaceFrase, sliceLocationInformation } from '../utils/utils';
import { ContextValue } from '../context/ContextValue';
import { useAsyncStorage } from '@react-native-async-storage/async-storage';

export default function RecruitScreen({ route }) {
  const [place, setPLace] = useState('');
  const { cityList, setCityList, xmen, setXmen, deltas, mutants, setMutants } =
    useContext(ContextValue);

  const { setItem, getItem } = useAsyncStorage('@xmen');
  if (route.params) {
    const description = '';
    const { info } = route.params;
    setXmen(info);
  }

  

  const requestLocationPermission = async () => {
    const { granted } = await requestForegroundPermissionsAsync();
    if (granted) {
      const currentPosition = await getCurrentPositionAsync();
      setXmen({
        ...xmen,
        location: {
          latitude: currentPosition.coords.latitude,
          longitude: currentPosition.coords.longitude,
          ...deltas,
        },
      });
    }
  };

  const searchPlace = async () => {
    if (!place) {
      alert('Digite o nome da Cidade!');
    } else {
      const result = await fetch(
        `https://nominatim.openstreetmap.org/search?q=${replaceFrase(
          place
        )}&format=json`
      );
      const response = await result.json();
      if (response.length > 1) {
        setCityList(response);
      } else {
        const info = sliceLocationInformation(response[0].display_name);
        setXmen({
          ...xmen,
          location: {
            ...info,
            latitude: parseFloat(response[0].lat),
            longitude: parseFloat(response[0].lon),
            ...deltas,
          },
        });
      }
    }
  };

  const seekPhoto = async () => {
    const { photo, location, power } = xmen;
    if (photo && location && power) console.log({ photo, location, power });
    const image = await searchPhoto(xmen.name);
    setXmen({ ...xmen, photo: image });
  };

  const recruit = async () => {
    const { photo, location, power, description } = xmen;
    if (photo && location && power && place && description) {
      const result = await getItem();
      const response = JSON.parse(result);
      if (response) setItem(JSON.stringify([...response, xmen]));
      else setItem(JSON.stringify([xmen]));
      setMutants([...mutants, xmen]);
      setXmen({
        name: '',
        photo: '',
        power: '',
        description: '',
        location,
      });
    } else alert('EEEEEEIIIITTTTAAAAA CUUUUUZZZÃÃÃÃÃOOOOOOO');
  };

  useEffect(() => {
    requestLocationPermission();
  }, []);

  return (
    <View style={styles.container}>
      <CustomInput
        value={place}
        onChangeText={setPLace}
        placeholder="Localização"
      />
      <CustomButton onPress={searchPlace} title="BUSCAR CIDADE" />
      {xmen.location && (
        <MapView style={styles.map} region={xmen.location}>
          <Marker coordinate={xmen.location} />
        </MapView>
      )}
      {cityList.length > 1 && <CityListView />}
      <TextInput
        placeholder="Descrição"
        value={xmen.description}
        onChangeText={(v) => setXmen({ ...xmen, description: v })}
        numberOfLines={4}
        multiline
        style={styles.description}
      />
      <View style={styles.thumbnailContainer}>
        {xmen.photo && (
          <Image style={styles.img} source={{ uri: xmen.photo }} />
        )}
      </View>
      <CustomInput
        value={xmen.name}
        onChangeText={(v) => setXmen({ ...xmen, name: v })}
        placeholder="Nome do mutante"
      />
      <CustomButton onPress={seekPhoto} title="PROCURAR FOTO" />
      <CustomInput
        value={xmen.power}
        onChangeText={(v) => setXmen({ ...xmen, power: v })}
        placeholder="Força do Mutante"
      />
      <CustomButton onPress={recruit} title="RECRUTAR" />
    </View>
  );
}
