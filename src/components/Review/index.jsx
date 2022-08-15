import { View, Pressable, StyleSheet } from 'react-native'
import Text from '../Text'
import FormikTextInput from '../Formik/FormikTextInput'
import { Formik } from 'formik'
import * as yup from 'yup'
import { useNavigate } from 'react-router-native'
import useReview from '../../hooks/useReview'

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
    ownerName: '',
    repositoryName: '',
  rating: '',
  text: '',
}
const validationSchema = yup.object().shape({
    ownerName: yup
    .string()
    .required('Repository owner name is required'),
    repositoryName: yup
    .string()
    .required('Repository name is required'),
    rating: yup
    .number('Please enter a number')
    .required('Rating is required'),
    text: yup
    .string()
    .optional(),
})

const ReviewForm = ({ onSubmit }) => {
  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <FormikTextInput
          style={styles.textInput}
          name="ownerName"
          placeholder="Repository owner name"
          placeholderTextColor="grey"
        />
        <FormikTextInput
          style={styles.textInput}
          name="repositoryName"
          placeholder="Repository name"
          placeholderTextColor="grey"
        />
        <FormikTextInput
          style={styles.textInput}
          name="rating"
          placeholder="Rating between 0 to 100"
          placeholderTextColor="grey"
        />
        <FormikTextInput
          style={styles.textInput}
          name="text"
          placeholder="Review"
          placeholderTextColor="grey"
        />
        <Pressable style={styles.button} onPress={onSubmit}>
          <Text color="appBarText" fontWeight="bold">
            Create a review
          </Text>
        </Pressable>
      </View>
    </View>
  )
}

export const ReviewContainer = ({ onSubmit }) => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {({ handleSubmit }) => <ReviewForm onSubmit={handleSubmit} />}
    </Formik>
  )
}
const Review = () => {
  const [makeReview] = useReview()
  const navigate = useNavigate()

  const onSubmit = async (values) => {
    const { ownerName, repositoryName, rating, text } = values
    const intRating = parseInt(rating)
    try {
      const { data } = await makeReview({ ownerName, repositoryName, rating: intRating, text })
      if (data) {
        navigate('/')
      }
    } catch (e) {
      console.log(e)
    }
  }
  return <ReviewContainer onSubmit={onSubmit} />
}

export default Review
