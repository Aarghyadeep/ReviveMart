import * as Location from 'expo-location';
import { useEffect, useState } from 'react';


export default UseLocation = () => {
    const [location, setLocation] = useState();

  const getLocation = async()=> {
    try {
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') return;
        const { coords: { latitude, longitude } } = await Location.getCurrentPositionAsync({});
        setLocation({latitude, longitude});
        console.log(location);
    } catch (error) {
        console.log(error);
    }
  }

  useEffect(()=> {
    getLocation()
  }, [])
  
  return location;
};