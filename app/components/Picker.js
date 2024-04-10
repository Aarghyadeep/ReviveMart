import { Button, FlatList, Modal, StyleSheet, TouchableWithoutFeedback, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import defaultStyles from "../config/styles"
import AppText from "./Text";
import { useState } from "react";
import PickerItem from "./PickerItem";


export default function AppPicker({ 
  icon, 
  placeholder,
  numberOfColumns=1,
  PickerItemComponent= PickerItem, 
  items, 
  onSelectItem, 
  selectedItem, 
  width="100%" }) {
  
  const [modalVisible, setModalVisible] = useState(false);  
  
  return (
    <>
    <TouchableWithoutFeedback onPress={()=> setModalVisible(true)}>
    <View style={[styles.container,{ width }]}>
      {icon && <MaterialCommunityIcons name={icon} size={20}
      color={defaultStyles.colors.medium} style={styles.icon} />}  
      {selectedItem ? (<AppText style={styles.text}>
        {selectedItem.label}
        </AppText>) : (<AppText style={styles.placeholder}>
          {placeholder}</AppText>)}
      <MaterialCommunityIcons name="chevron-down" size={20}
      color={defaultStyles.colors.medium} />
    </View>
    </TouchableWithoutFeedback>
    <Modal visible={modalVisible} animationType="slide">
        <Button title="close" onPress={()=> setModalVisible(false)} />
        <FlatList
         data={items}
         numColumns={numberOfColumns}
         keyExtractor={item => item.value.toString()}
         renderItem={({item}) => 
           <PickerItemComponent 
           item={item}
           label={item.label}
           onPress={()=> {
              setModalVisible(false);
              onSelectItem(item);
            } } />
         }
        />
    </Modal>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: defaultStyles.colors.extraLight,
    borderRadius: 25,
    flexDirection: 'row',
    padding: 15,
    marginVertical: 10,
    alignItems: 'center',
  },
  icon: {
    marginRight: 10,
  },
  text: {
    flex: 1,
  },
  placeholder: {
    color: defaultStyles.colors.medium,
    flex: 1,
  }
})

