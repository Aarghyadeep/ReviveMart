import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import colors from "../config/colors";


export default function AppButton({ title, onPress, color= 'primary' }) {
  return (
   <TouchableOpacity style={[styles.button, { backgroundColor: colors[color]}]} 
   onPress={onPress}> 
   <View>
     <Text style={styles.text}>{title}</Text>
   </View>
   </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
   button: {
     marginVertical: 10,
     borderRadius: 25,
     justifyCenter: 'center',
     alignItems: 'center',
     padding: 15,
     width: '100%',
   },
   text: {
     color: colors.white,
     fontSize: 18,
     textTransform: 'uppercase',
     fontWeight: 'bold',
   }
})
