import { Alert, Image, StyleSheet, TouchableWithoutFeedback, View } from 'react-native';
import colors from "../config/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import { useEffect } from 'react';

export default function ImageInput({ imageUri, onChangeImage }) {

    useEffect(() => {
        requestPermission();
    }, [])
    
    const requestPermission = async()=> {
        const result = ImagePicker.requestMediaLibraryPermissionsAsync();
        if(!(await result).granted){
          alert('You need to give permission to access the library');
        } 
      }
  
    const handlePress = ()=> {
    if(!imageUri){
       SelectImage();
    } else {
        Alert.alert('Delete', 'Are you sure you want to delete this image?', [
            { text: 'Yes', onPress: () => onChangeImage(null)},
            { text: 'No' }
        ])
    }
  }

  const SelectImage = async()=> {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 0.5
      });
      if(!result.canceled){
        const assets = result.assets[0];
        onChangeImage(assets.uri)
      }
    } catch (error) {
      console.log('Error reading an image', error);
    }
  }

  return (
    <TouchableWithoutFeedback onPress={handlePress}> 
    <View style={styles.container}>
      {!imageUri && <MaterialCommunityIcons color={colors.medium} name='camera' size={40} />}  
      {imageUri && <Image source={{ uri: imageUri }} style={styles.image} />}
    </View>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
  container: {
     backgroundColor: colors.extraLight,
     alignItems: 'center',
     borderRadius: 15,
     justifyContent: 'center',
     width: 100,
     overflow: 'hidden',
     height: 100,
  },
  image: {
    width: '100%',
    height: '100%',
  }
});