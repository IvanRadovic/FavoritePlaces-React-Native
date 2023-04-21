import {View, Button } from "react-native";
import { launchCameraAsync } from "expo-image-picker";

const ImagePicker = () => {

    async function takeImgHandler() {
      const image = await launchCameraAsync({
        allowsEditing:true,
        aspect:[16,9],
        quality:0.5
      });
      console.log(image);
    }

    return ( 
        <View>
            <View>

            </View>
            <Button title="Take image" onPress={takeImgHandler} />
        </View>
     );
}
 
export default ImagePicker;