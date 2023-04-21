import { Text,Alert, Button, View, Image, StyleSheet } from 'react-native';
import {
  launchCameraAsync,
  useCameraPermissions,
  PermissionStatus,
} from 'expo-image-picker';
import { useState } from 'react';
import { Colors } from 'react-native/Libraries/NewAppScreen';

function ImagePicker() {
    
    const [pickedImage, setPickedImage] = useState();
    const [cameraPermissionInformation, requestPermission] = useCameraPermissions();


    /* --- Verify of perrmissions --- */
    async function verifyPermissions() {
    if (cameraPermissionInformation.status === PermissionStatus.UNDETERMINED) {
        const permissionResponse = await requestPermission();
        return permissionResponse.granted;
    }
    if (cameraPermissionInformation.status === PermissionStatus.DENIED) {
        Alert.alert(
        'Insufficient Permissions!',
        'You need to grant camera permissions to use this app.'
        );
        return false;
    }
        return true;    
    }

    /* -- IMAGE func - to open up the camera --- */
    async function takeImageHandler() {
    const hasPermission = await verifyPermissions();
    if (!hasPermission) {
        return;
    }
    const image = await launchCameraAsync({
        allowsEditing: true,
        aspect: [16, 9],
        quality: 0.5,
    });
        setPickedImage(image.uri);
    }

    let imagePreview = <Text>No image taken yet</Text>

    if(pickedImage){
        imagePreview = <Image style={styles.image} source={{uri: pickedImage}} />
    }

    return (
        <View>
            <View style={styles.imagePreview}>{imagePreview}</View>
            <Button title="Take Image" onPress={takeImageHandler} />
        </View>
    );
}

export default ImagePicker;


const styles = StyleSheet.create({
    imagePreview:{
        width:'100%',
        height:200,
        marginVertical:9,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:Colors.primary100,
        borderRadius:5
    },
    image:{
        width:'100%',
        height:'100%'
    },
});