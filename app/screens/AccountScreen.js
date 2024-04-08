import { FlatList, StyleSheet, View } from "react-native";
import ListItem from "../components/ListItem";
import Screen from "../components/Screen";
import colors from "../config/colors";
import Icon from "../components/Icon";
import ListItemSeparator from "../components/ListItemSeparator";


const menuItems = [
    {
        title: "My Listings",
        icon: {
            name: "format-list-bulleted",
            backgroundColor: colors.primary,
        }
    },
    {
        title: "My Messages",
        icon: {
            name: "email",
            backgroundColor: colors.secondary,
        }
    },
]

export default function AccountScreen() {
  return (
    <Screen style={styles.screen}>
        <View style={styles.container}>
        <ListItem
        title="Aarghyadeep Das"
        subTitle="alphario98@gmail.com"
        image={require("../assets/alpha.jpg")}
        />
        </View>
        <View style={styles.container}>
            <FlatList
            data={menuItems}
            keyExtractor={menuItem => menuItem.title}
            renderItem={({item}) => 
               <ListItem
                title={item.title}
                IconComponent={
                   <Icon name={item.icon.name} backgroundColor={item.icon.backgroundColor} />}
               />
            }
            ItemSeparatorComponent={<ListItemSeparator />}
            />
        </View>
        <View style={styles.container}>
        <ListItem
         title="Log out"
         IconComponent={
            <Icon name="logout" backgroundColor="#ffe66d" />
         }
         />
        </View>
    </Screen>
  )
}


const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
    backgroundColor: colors.white,
  },
  screen: {
    backgroundColor: colors.extraLight,
  }
})
