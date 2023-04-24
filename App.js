import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import AllPlacesScreen from "./screens/AllPlaces/AllPlacesScreen.components"
import AddPlaceScreen from './screens/AddPlace/AddPlaceScreen.component';
import Map from './screens/Map/Map.component';
import IconButton from './components/UI/IconButton.component';

import { Colors } from "./constants/Colors.component";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
    <StatusBar style='dark' />
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerStyle:{backgroundColor: Colors.primary500},
        headerTintColor: Colors.gray700,
        contentStyle:{ backgroundColor: Colors.gray700}
      }}>
          <Stack.Screen 
            name='AllPlaces' 
            component={AllPlacesScreen} 
            options={({navigation}) => ({
              title:'Your favorite places',
              headerRight: ({tintColor}) => (
                <IconButton icon="add" size={24} color={tintColor} onPress={() => navigation.navigate('AddPlace')} />
              )
            })}
          />

          <Stack.Screen 
            name='AddPlace' 
            component={AddPlaceScreen} 
            options={{
              title:'Add new place'
            }}
          />

          <Stack.Screen name="Map" component={Map} />
      </Stack.Navigator>
    </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
