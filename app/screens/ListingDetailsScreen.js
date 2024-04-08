import { Image, StyleSheet, View } from "react-native";
import AppText from "../components/AppText"
import colors from "../config/colors";
import ListItem from "../components/ListItem";

export default function ListingDetailsScreen() {
  return (
    <View>
    <Image 
    style={styles.image}
    source={require('../assets/jacket.jpg')} />
    <View style={styles.detailsContainer}>
    <AppText style={styles.title}>Red jacker for sale</AppText>  
    <AppText style={styles.price}>₹2500</AppText>
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
