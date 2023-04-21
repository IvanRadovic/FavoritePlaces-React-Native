import { Pressable, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const IconButton = ({ icon, size, color, onPress}) => {
    return (
        <Pressable style={({press}) =>[styles.button, press && styles.pressed]} onPress={onPress}>
            <Ionicons name={icon} size={size} color={color} />
        </Pressable>
      );
}
 
export default IconButton;

const styles = StyleSheet.create({
    button:{
        padding:10,
        marginBottom:30,
        justifyContent:'center',
        alignItems:'center'
    },
    pressed:{
        opacity:0.7
    }
});