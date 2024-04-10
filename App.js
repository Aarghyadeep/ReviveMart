import { GestureHandlerRootView } from 'react-native-gesture-handler';
import MessageScreen from "./app/screens/MessagesScreen";
import ListingEditScreen from './app/screens/ListingEditScreen';

export default function App() {
   

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <ListingEditScreen />
    </GestureHandlerRootView>
  )
}
