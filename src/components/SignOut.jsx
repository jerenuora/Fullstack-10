import { useEffect } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { useNavigate } from 'react-router-native'
import useSingOut from '../hooks/useSignOut'
  
const SignOut = () => {
    const [signOut] = useSingOut()
    const navigate = useNavigate()
    useEffect(() => {
        signOut()
        navigate('/')
    })
    return null
}

export default SignOut