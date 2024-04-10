import { Image, StyleSheet, TouchableHighlight, View } from "react-native";
import AppText from "../Text";
import colors from "../../config/colors";
import Swipeable from "react-native-gesture-handler/Swipeable";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function ListItem({ 
  title, 
  subTitle, 
  image,
  IconComponent, 
  onPress,
  renderRightActions }) {
  return (
    <Swipeable renderRightActions={renderRightActions}>
    <TouchableHighlight underlayColor={colors.extraLight} onPress={onPress}>
    <View style={styles.container}>
      {IconComponent}
      {image && <Image
       style={styles.image}
       source={image}
      />}
      <View style={styles.detailsComponent}>
        <AppText numberOfLines={1} style={styles.title}>{title}</AppText>
        {subTitle && <AppText style={styles.subTitle} numberOfLines={2}>
          {subTitle}</AppText>}
      </View>
      <MaterialCommunityIcons color={colors.medium} name="chevron-right" size={25} />
    </View>
    </TouchableHighlight>
    </Swipeable>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    padding: 15,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  title: {
    fontWeight: '500',   
  },
  subTitle: {
    color: colors.medium,
  },
  detailsComponent: {
    flex: 1,
    marginLeft: 10,
    justifyContent: 'center',
  }
})
