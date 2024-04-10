import { StyleSheet, View } from "react-native";
import Icon from "../components/Icon";
import AppText from "./Text";

export default function CategoryPickerItem({ item, onPress }) {
  return (
    <View style={styles.container}>
      <Icon backgroundColor={item.backgroundColor} name={item.icon} size={80} />
      <AppText style={styles.label}>
        {item.label}
      </AppText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    paddingVertical: 15,
    alignItems:'center',
    width: '33%',
  },
  label:{
    marginTop: 5,
    textAlign: 'center',
  } 
})