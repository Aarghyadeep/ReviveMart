import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";
import AppButton from "../components/Button";

export default function WelcomeScreen({ navigation }) {
  return (
    <ImageBackground
    blurRadius={10}
    style={styles.background}
    source={require("../assets/background.jpg")}
    >
     <View style={styles.logoContainer}>
     <Image
     style={styles.logo}
     source={require("../assets/Logo.png")}
     />   
     <Text style={styles.tagline}>Sell what you don't need!</Text>   
    </View>
     <View style={styles.buttonContainer}>
     <AppButton 
     title="Login"
     onPress={()=> navigation.navigate("Login")}
     />
     <AppButton 
     title="Register" 
     color="secondary"
     onPress={()=> navigation.navigate("Register")}
     />
      </View>   
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  buttonContainer: {
    padding: 20,
    width: '100%',
  },
  logo: {
    width: 300,
    height: 200, 
  },
  logoContainer: {
    position: 'absolute',
    top: 60,
    alignItems: 'center',
  },
  tagline: {
    fontSize: 25,
    fontWeight: 'bold',
  }
})

