import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen, ChatScreen, LoginScreen } from '../screens';
import { AuthProvider } from '../hook/useAuth';
import useAuth from "../hook/useAuth"

const Stack = createNativeStackNavigator();

const StackNavigation = () => {
    const user = useAuth()
    return (
        <NavigationContainer>
            <AuthProvider>
                <Stack.Navigator>
                    {
                        user ? (
                            <>
                                <Stack.Screen name="Home" component={HomeScreen} />
                                <Stack.Screen name="Chat" component={ChatScreen} />
                            </>
                        ) : (

                            <Stack.Screen name="Login" component={LoginScreen} />
                        )
                    }

                </Stack.Navigator>
            </AuthProvider>
        </NavigationContainer>
    );
}

export default StackNavigation