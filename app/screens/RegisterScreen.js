import { StyleSheet } from "react-native";
import { AppForm, AppFormField, SubmitButton } from "../components/Forms";
import Screen from "../components/Screen";
import * as Yup from "yup";

export default function RegisterScreen() {

    const validationSchema = Yup.object().shape({
        name: Yup.string().required().min(3).label("Name"),
        email: Yup.string().required().email().label("Email"),
        password: Yup.string().required().min(4).label("password")
    })

  return (
    <Screen style={styles.screen}>
        <AppForm
        initialValues={{ name: '', email: '', password: '' }}
        onSubmit={values => console.log(values)}
        validationSchema={validationSchema}
        >
        <AppFormField
        autoCapitalize="none"
        autoCorrect={false}
        name="name"
        keyboardType="default" 
        icon="account"
        placeholder="Name"
        />
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
        <SubmitButton title="Register" />
        </AppForm>
    </Screen>
  )
}

const styles = StyleSheet.create({
  screen: {
    padding: 10,
  }
})

