import { Image, StyleSheet, View } from "react-native";
import AppText from "../components/Text"
import colors from "../config/colors";
import { ListItem } from "../components/Lists";

export default function ListingDetailsScreen({ route }) {
  
  const listing = route.params;

  return (
    <View>
    <Image 
    style={styles.image}
    source={listing.image} />
    <View style={styles.detailsContainer}>
    <AppText style={styles.title}>{listing.title}</AppText>  
    <AppText style={styles.price}>₹{listing.price}</AppText>
    <View style={styles.userContainer}>
    <ListItem
     image={require('../assets/alpha.jpg')}
     title="Aarghyadeep Das"
     subTitle="5 listings"
    />  
    </View>
    </View>
    </View>
  )
}


const styles = StyleSheet.create({
   image: {
    width: '100%',
    height: 300,
   },
   detailsContainer: {
    padding: 20,
   },
   price: {
    color: colors.secondary,
    fontSize: 20,
    fontWeight: 'bold',
   },
   title: {
    fontSize: 24,
    fontWeight: '500',
   },
   userContainer: {
    marginVertical: 40,
   }
})
