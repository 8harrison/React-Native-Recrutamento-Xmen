import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import XmenScreen from './screens/XmenScreen';
import RecruitScreen from './screens/RecruitScreen';
import ProfileScreen from './screens/profile.screen';
import Context from './context/ContextValue';

const Stack = createStackNavigator();

export default function App() {
  return (
    <Context>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: 'orange' },
            headerTitleStyle: { fontWeight: 600, fontSize: 22, color: 'white' },
            headerTintColor: 'white',
            headerTitleAlign: 'center',
          }}>
          <Stack.Screen name="X-men" component={XmenScreen} />
          <Stack.Screen name="Recrutamento" component={RecruitScreen} />
          <Stack.Screen
            name="Profile"
            component={ProfileScreen}
            options={({ route }) => ({ title: route.params.name })}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Context>
  );
}
