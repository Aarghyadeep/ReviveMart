import { FlatList } from "react-native";
import Screen from "../components/Screen";
import { useState } from "react";
import { ListItem, ListItemDeleteAction, ListItemSeparator} from "../components/Lists";


const initialMessages  = [
    {
        id: 1,
        title: 'Aarghyadeep Das',
        description: 'How are you boss?',
        image: require('../assets/alpha.jpg')
    },
    {
        id: 2,
        title: 'Abhijit Roy',
        description: 'Hey bro where are you? how have you been? Mr alpha is the best person in the world! Ji hind! jai Bharath!',
        image: require('../assets/alpha.jpg')
    },
    {
        id: 3,
        title: 'Sujoy Sj',
        description: 'Virat Kohli rocks!',
        image: require('../assets/alpha.jpg')
    }
]

export default function MessagesScreen() {

  const [messages, setMessages] = useState(initialMessages);
  const [refreshing, setRefreshing] = useState(false);
  
  const handleDelete = message => {
   setMessages(messages.filter(m => m.id !== message.id));
  }

  return (
    <Screen>
    <FlatList
     data={messages}
     keyExtractor={messages => messages.id.toString()}
     renderItem={({ item }) => 
     <ListItem
       title={item.title}
       subTitle={item.description}
       image={item.image}
       onPress={()=> console.log('message selected', item)}
       renderRightActions={()=> 
       <ListItemDeleteAction onPress={()=> handleDelete(item)} />}
     />}
     ItemSeparatorComponent={<ListItemSeparator />}
     refreshing={refreshing}
     onRefresh={()=> {
      setMessages([
        {
          id: 3,
          title: 't3',
          description: 'd3',
          image: require('../assets/alpha.jpg')
      }
      ])
     }}
    />
    </Screen>
  )
}


