import { View, Text, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import React from 'react'
import useAuth from '../hook/useAuth'

const HomeScreen = () => {
    const navigation = useNavigation()
    const {user} = useAuth()
  return (
    <View>
      <Text className="text-red-500 font-semibold">{user}</Text>
      <TouchableOpacity onPress={() => navigation.navigate("Login")}>
        <Text>Login Screen</Text>
      </TouchableOpacity>
    </View>
  )
}

export default HomeScreen