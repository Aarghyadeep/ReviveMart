import React from 'react';
import Screen from '../components/Screen';
import { Image, StyleSheet } from 'react-native';
import * as Yup from "yup";
import { AppForm, AppFormField, SubmitButton } from "../components/Forms";

export default function LoginScreen() {
    
    const validationSchema = Yup.object().shape({
        email: Yup.string().required().email().label("Email"),
        password: Yup.string().required().min(4).label("password")
    })

  return (
    <Screen style={styles.container}>
       <Image style={styles.logo} source={require("../assets/Logo.png")} />
       <AppForm 
       initialValues={{ email: '', password: '' }}
       onSubmit={values => console.log(values)}
       validationSchema={validationSchema}
       >
        <AppFormField
       autoCapitalize="none"
       autoCorrect={false}
       name="email"
       keyboardType="email-address" 
       icon="email"
       placeholder="Email"
       />
       <AppFormField
       autoCapitalize="none"
       autoCorrect={false}
       name="password"
       icon="lock"
       placeholder="Password"
       secureTextEntry={true}
       />
       <SubmitButton title="Login" /> 
       </AppForm>
    </Screen>
  )
}


const styles = StyleSheet.create({
  logo: {
    width: 300,
    height: 250,
    alignSelf: 'center',
    marginTop: 20,
  },
  container: {
    padding: 10,
  }
})
