import { StyleSheet, TouchableOpacity, View } from 'react-native';
import colors from '../config/colors';
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function NewListingButton({ onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
    <View style={styles.container}>
        <MaterialCommunityIcons name='plus-circle' color={colors.white} size={40} />
    </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    height: 80,
    width: 80,
    borderRadius: 40,
    bottom: 30,
    borderWidth: 10,
    borderColor: colors.white,
    justifyContent: 'center',
    alignItems: 'center',   
  }
});