import { View, Pressable, StyleSheet } from 'react-native'
import Text from './Text'
import FormikTextInput from './FormikTextInput'
import { Formik } from 'formik'

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
  textInput: {
    width: '100%',
    padding: 15,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: 'grey',
    margin: 5,
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
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
    </Formik>
  )
}

export default SignIn
