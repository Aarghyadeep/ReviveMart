import { Image, StyleSheet, TouchableHighlight, View } from "react-native";
import AppText from "./AppText";
import colors from "../config/colors";
import Swipeable from "react-native-gesture-handler/Swipeable";

export default function ListItem({ 
  title, 
  subTitle, 
  image,
  ImageComponent, 
  onPress,
  renderRightActions }) {
  return (
    <Swipeable renderRightActions={renderRightActions}>
    <TouchableHighlight underlayColor={colors.extraLight} onPress={onPress}>
    <View style={styles.container}>
      {ImageComponent}
      {image && <Image
       style={styles.image}
       source={image}
      />}
      <View style={styles.detailsComponent}>
        <AppText style={styles.title}>{title}</AppText>
        {subTitle && <AppText style={styles.subTitle}>{subTitle}</AppText>}
      </View>
    </View>
    </TouchableHighlight>
    </Swipeable>
  )
}

const styles = StyleSheet.create({
  container: {
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
    marginLeft: 10,
    justifyContent: 'center',
  }
})