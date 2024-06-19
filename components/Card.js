import { View, Image, Text } from 'react-native';
import { styles } from '../styles/Card.style';

export default function Card({ image, name, power, location }) {
  const { container, sImage, sLocation, sName, sPower, txtCOntainer } = styles;
  return (
    <View style={container}>
      <Image source={{ uri: image }} style={sImage} />
      <View style={txtCOntainer}>
        <Text style={sName}>Nome: {name}</Text>
        <Text style={sPower}>Poder: {power}</Text>
        <Text style={sLocation}>
          Localização: {`${location.estado}, ${location.pais}`}
        </Text>
      </View>
    </View>
  );
}
