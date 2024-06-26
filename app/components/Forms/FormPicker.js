import { useFormikContext } from "formik";
import AppPicker from "../Picker"; 
import ErrorMessage from "./ErrorMessage";

export default function AppFormPicker({ 
  items, 
  name,
  numberOfColumns, 
  PickerItemComponent, 
  placeholder, 
  width }) {
  
    const { errors, setFieldValue, touched, values } = useFormikContext();  

  return (
    <>
    <AppPicker
      items={items}
      numberOfColumns={numberOfColumns}
      onSelectItem={(item) => setFieldValue(name, item)}
      placeholder={placeholder}
      PickerItemComponent={PickerItemComponent}
      selectedItem={values[name]}
      width={width}
    />
    <ErrorMessage error={errors[name]} visible={touched[name]} />
  </>
  )
}
