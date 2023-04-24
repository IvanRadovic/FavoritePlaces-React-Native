import { View, StyleSheet, Alert, Image, Text } from "react-native";
import { getCurrentPositionAsync, useForegroundPermissions, PermissionStatus } from 'expo-location'
import OutlinedButton from "../UI/OutlinedButton.component"
import { Colors } from "../../constants/Colors.component";
import { useState } from "react";
import { getMapPreview } from "../../util/loaction";


const LocationPicker = () => {
    const [locationPermissionInformation, requestPermission] = useForegroundPermissions();
    const [pcikedLocation, setPickedLocation] = useState();

    /* --- verify permissions for location --- */
    async function verifyPermissions(){
        if (locationPermissionInformation.status === PermissionStatus.UNDETERMINED) {
            const permissionResponse = await requestPermission();
            return permissionResponse.granted;
        }
        if (locationPermissionInformation.status === PermissionStatus.DENIED) {
            Alert.alert(
            'Insufficient Permissions!',
            'You need to grant camera permissions to use this app.'
            );
            return false;
        }
            return true; 
    }

    /* --- Get location of useer ---- */
    async function getLocationHandler(){
        const hasPermission = await verifyPermissions();
        if(!hasPermission){
            return;
        }
        const location = await getCurrentPositionAsync();
        setPickedLocation({
            lat:location.coords.latitude,
            lang:location.coords.longitude
        })
    }

    function pickOnMapHandler(){

    }

    let locationPreview = <Text> No location picked yet ..</Text>

    if(pcikedLocation){
        locationPreview = (
            <Image 
                style={styles.image}
                source={{
                    uri:getMapPreview(pcikedLocation.lat, pcikedLocation.lng),
                }} 
            />
        )
    }

    return ( 
        <View>
            <View style={styles.mapPreview}>
                {locationPreview}
            </View>
            <View style={styles.actions}>
                <OutlinedButton icon="location" onPress={getLocationHandler}>Locate user</OutlinedButton>
                <OutlinedButton icon="map" onPress={pickOnMapHandler}>Pick on map</OutlinedButton>
            </View>
        </View>
     );
}
 
export default LocationPicker;

const styles = StyleSheet.create({
    mapPreview:{
        width:'100%',
        height:200,
        marginVertical:9,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:Colors.primary100,
        borderRadius:5,
        overflow:'hidden'
    },
    actions:{
        flexDirection:'row',
        justifyContent: 'space-around',
        alignItems:'center'

    },
    image:{
        width:'100%',
        height:'100%',
        borderRadius:5
    }
});