import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import AllPlacesScreen from "./screens/AllPlaces/AllPlacesScreen.components"
import AddPlaceScreen from './screens/AddPlace/AddPlaceScreen.component';
import IconButton from './components/UI/IconButton.component';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
    <StatusBar style='dark' />
    <NavigationContainer>
      <Stack.Navigator>
          <Stack.Screen 
            name='AllPlaces' 
            component={AllPlacesScreen} 
            options={({navigation}) => ({
              headerRight: ({tintColor}) => (
                <IconButton icon="add" size={24} color={tintColor} onPress={() => navigation.navigate('AddPlace')} />
              )
            })}
          />

          <Stack.Screen 
            name='AddPlace' 
            component={AddPlaceScreen} 
          />
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
