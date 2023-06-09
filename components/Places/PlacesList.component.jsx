import { FlatList, Text, View, StyleSheet } from "react-native";
import PlaceItem from "./PlaceItem.component";

import { Colors } from "../../constants/Colors.component";

const PlacesList = ({ places }) => {
    /* -- If no places in list --- */
    if(!places || places.length === 0) {
        return (
            <View style={styles.fallBackContainer}>
                <Text style={styles.fallBackText}>No places added yet - start adding some</Text>
            </View>
        )
    }


    return (  
        <FlatList 
            data={places} 
            keyExtractor={(item) => item.id}
            renderItem={({item}) => <PlaceItem place={item} />  }
        /> 
    );
}
 
export default PlacesList;


const styles = StyleSheet.create({
    fallBackContainer:{
        flex: 1,
        justifyContent: 'center',
        alignItems:'center'
    },
    fallBackText:{
        fontSize:16,
        color:Colors.primary200

    }
});