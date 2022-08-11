import { TextInput as NativeTextInput, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  textInput: {
    width: '100%',
    padding: 15,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: 'grey',
    margin: 5,
  },
  redBorder: {
    width: '100%',
    padding: 15,
    borderWidth: 2,
    borderRadius: 5,
    borderColor: 'red',
    margin: 5,
  },
})

const TextInput = ({ style, error, ...props }) => {
  const textInputStyle = [styles.textInput, error && styles.redBorder  ]

  return <NativeTextInput style={textInputStyle} {...props} />
}

export default TextInput
