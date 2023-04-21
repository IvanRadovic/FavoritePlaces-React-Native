import { useState } from "react";
import { View, Text, ScrollView, TextInput, StyleSheet } from "react-native";
import { Colors } from "../../constants/Colors.component";

const PlaceForm = () => {

    const [enteredTitle, setEnteredTitle] = useState('');

    const changeTitleHanlder = (enteredText) => {
      setEnteredTitle(enteredText)
    }

    return (
        <ScrollView style={styles.form}>
            <View>
                <Text style={styles.label}>Ttitle</Text>
                <TextInput style={styles.input} value={enteredTitle} onChange={changeTitleHanlder}/>
            </View>

        </ScrollView>
      );
}
 
export default PlaceForm;

const styles = StyleSheet.create({
    form: {
        flex:1,
        padding:24,
    },
    label:{
        fontWeight:'bold',
        marginBottom:5,
        color:Colors.primary500
    },
    input:{
        marginVertical:10,
        paddingHorizontal:5,
        paddingVertical:8,
        fontSize:16,
        borderBottomColor:Colors.primary700,
        borderBottomWidth:2,
        backgroundColor:Colors.primary100
    }
});