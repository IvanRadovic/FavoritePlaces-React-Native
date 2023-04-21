import { View, StyleSheet, Alert } from "react-native";
import { getCurrentPositionAsync, useForegroundPermissions, PermissionStatus } from 'expo-location'
import OutlinedButton from "../UI/OutlinedButton.component"
import { Colors } from "../../constants/Colors.component";


const LocationPicker = () => {
    const [locationPermissionInformation, requestPermission] = useForegroundPermissions();


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
    }

    function pickOnMapHandler(){

    }

    return ( 
        <View>
            <View style={styles.mapPreview}></View>
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
        borderRadius:5
    },
    actions:{
        flexDirection:'row',
        justifyContent: 'space-around',
        alignItems:'center'

    },
});