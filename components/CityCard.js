import { View } from 'react-native';
import { Table, Row } from 'react-native-table-component';
import { styles } from '../styles/CityCard.style';

export default function CityCard({ cidade, estado, pais }) {
  return (
    <View style={styles.container}>
      <Table>
        <Row data={['Cidade', cidade]} />
        <Row data={['Estado/Província', estado]} />
        <Row data={['País', pais]} />
      </Table>
    </View>
  );
}
