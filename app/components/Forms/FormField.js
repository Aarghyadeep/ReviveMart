import { useFormikContext } from "formik";
import AppTextInput from "../TextInput";
import ErrorMessage from "./ErrorMessage";


export default function AppFormField({ name, width, ...otherProps }) {
    
    const { setFieldTouched, handleChange, errors, touched } = useFormikContext();

    return (
    <>
    <AppTextInput
       width={width} 
       onBlur={()=> setFieldTouched(name)}
       onChangeText={handleChange(name)}
       {...otherProps}
       />
       <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  )
}
