import { View, Pressable, StyleSheet } from 'react-native'
import Text from '../Text'
import FormikTextInput from '../Formik/FormikTextInput'
import { Formik } from 'formik'
import * as yup from 'yup'
import { useNavigate } from 'react-router-native'
import useSignUp from '../../hooks/useSingUp'
import useSignIn from '../../hooks/useSingIn'

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
  username: '',
  password: '',
  passwordConfirmation: '',
}
const validationSchema = yup.object().shape({
  username: yup
    .string()
    .min(1, 'Username shoud be atleast 1 characters long')
    .max(50, 'Username should be only 30 characters long')
    .required('Username is required'),
  password: yup
    .string()
    .min(5, 'Password should contain at least 5 characters')
    .max(50, 'Password should only contain 50 characters maximum')
    .required('Password is required'),
  passwordConfirmation: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Passwords must match')
    .required('Password confirmation is required'),
})
const SignUpForm = ({ onSubmit }) => {
  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <FormikTextInput
          style={styles.textInput}
          name="username"
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
        <FormikTextInput
          style={styles.textInput}
          secureTextEntry
          name="passwordConfirmation"
          placeholder="Password confirmation"
          placeholderTextColor="grey"
        />
        <Pressable style={styles.button} onPress={onSubmit}>
          <Text color="appBarText" fontWeight="bold">
            Sign up
          </Text>
        </Pressable>
      </View>
    </View>
  )
}

export const SingUpContainer = ({ onSubmit }) => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {({ handleSubmit }) => <SignUpForm onSubmit={handleSubmit} />}
    </Formik>
  )
}
const SignUp = () => {
  const [signUp] = useSignUp()
  const [signIn] = useSignIn()
  const navigate = useNavigate()

  const onSubmit = async (values) => {
    const { username, password, passwordConfirmation } = values
    try {
      const { data } = await signUp({ username, password })

      if (data) {
        await signIn({ username, password })
        navigate('/')
      }
    } catch (e) {
      console.log(e)
    }
  }
  return <SingUpContainer onSubmit={onSubmit} />
}

export default SignUp
