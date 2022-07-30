import { View, Pressable, StyleSheet } from 'react-native'
import Text from '../Text'
import FormikTextInput from './FormikTextInput'
import { Formik } from 'formik'
import * as yup from 'yup'

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,

    justifyContent: 'center',
  },
  form: {
    flexGrow: 1,
    alignItems: 'center',

    padding: 10,
  },
  button: {
    width: '100%',
    padding: 15,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: 'grey',
    margin: 5,
    alignItems: 'center',
    backgroundColor: 'blue',
  },
})
const initialValues = {
  name: '',
  password: '',
}
const validationSchema = yup.object().shape({
  name: yup
    .string()
    .min(3, 'Username shoud be atleast three characters long')
    .max(50, 'Username should be only fifty characters long')
    .required('Username is required'),
  password: yup
    .string()
    .min(6, 'Password should contain at least six characters')
    .required('Password is required')
})
const SignInForm = ({ onSubmit }) => {
  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <FormikTextInput
          style={styles.textInput}
          name="name"
          placeholder="Username"
          placeholderTextColor="grey"
        />
        <FormikTextInput
          style={styles.textInput}
          secureTextEntry
          name="password"
          placeholder="Password"
          placeholderTextColor="grey"
        />
        <Pressable style={styles.button} onPress={onSubmit}>
          <Text color="appBarText" fontWeight="bold">
            Sign in
          </Text>
        </Pressable>
      </View>
    </View>
  )
}
const SignIn = () => {
  const onSubmit = (values) => {
    console.log(values)
  }

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
    </Formik>
  )
}

export default SignIn
