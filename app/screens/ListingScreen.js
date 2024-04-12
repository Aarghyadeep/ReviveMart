import { FlatList, StyleSheet } from "react-native";
import Screen from "../components/Screen";
import Card from "../components/Card";
import colors from "../config/colors";


const listings = [
    {
        id: 1,
        title: 'Red jacket for sale',
        price: 100,
        image: require("../assets/jacket.jpg"),
    },
    {
        id: 2,
        title: 'Couch for sale',
        price: 1000,
        image: require("../assets/couch.jpg"),
    },
]

export default function ListingScreen({ navigation }) {
  return (
    <Screen style={styles.screen}>
        <FlatList
         data={listings}
         keyExtractor={listing => listing.id}
         renderItem={({item})=> 
          <Card 
           title={item.title}
           subTitle={"₹" + item.price}
           image={item.image}
           onPress={()=> navigation.navigate("ListingDetails", item)}
          />
        }
        />
    </Screen>
  )
}


const styles = StyleSheet.create({
  screen: {
    padding: 20,
    marginTop: 20,
    backgroundColor: colors.extraLight,
  }
})
