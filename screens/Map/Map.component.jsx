import { useCallback, useLayoutEffect, useState } from 'react';
import { Alert, StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import IconButton from '../../components/UI/IconButton.component';

function Map({navigation}) {

  const [selectedLocation, setSelectedLocation] = useState();

  const region = {
    latitude: 42.44,
    longitude: 19.268646,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };


  /* --- SelectedLocation - settings for Marker -- */
  function selectLocationHandler(event) {
    const lat = event.nativeEvent.coordinate.latitude;
    const lng = event.nativeEvent.coordinate.longitude;

    setSelectedLocation({ lat: lat, lng: lng });
  }


  /* --- Confirming picked location ---- */
  const  savePickedLocationHandler = useCallback(() => {
    if(!selectedLocation){
      Alert.alert('No location picked!', 'You have to pick location by tapping on the map first!');
      return;
    }
    navigation.navigate('AddPlace', { 
      pickedLat: selectedLocation.lat,
      pickedLng: selectedLocation.lng
    });
  },[navigation, selectedLocation])


  /* --- To show button save every time when Map screen is active ---  */
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight:({tintColor}) => (
        <IconButton icon='save' size={24} onPress={savePickedLocationHandler}/>
      )
    })
  },[navigation, savePickedLocationHandler])

  return (
    <MapView 
      style={styles.map} 
      initialRegion={region} 
      onPress={selectLocationHandler}
    >
    {selectedLocation && (
        <Marker
          title="Picked Location"
          coordinate={{
            latitude: selectedLocation.lat,
            longitude: selectedLocation.lng,
          }}
        />
      )}
    </MapView>
  )
}

export default Map;

const styles = StyleSheet.create({
  map: {
    flex: 1,
  },
});