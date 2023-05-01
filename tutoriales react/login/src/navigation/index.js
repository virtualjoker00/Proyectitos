import React from 'react'
import {View, Text} from 'react-native'
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import SignInScreen from '../screens/SignInScreen/SignInScreen';
import SignUpScreen from '../screens/SignUpScreen/SignUpScreen';
import ConfirmEmailScreen from '../screens/ConfirmEmailScreen/ConfirmEmailScreen';
import ForgotPasswordScreen from '../screens/ForgotPasswordScreen/ForgotPasswordScreen'
import ResetPasswordScreen from '../screens/ResetPasswordScreen/ResetPasswordScreen';
import HomeScreen from '../screens/HomeScreen';
import MakeRegisterScreen from '../screens/MakeRegisterScreen';

const Stack = createNativeStackNavigator();

const Navigation = () => {
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Inicio de sesión" component={SignInScreen} />
                <Stack.Screen name="Registro" component={SignUpScreen} />
                <Stack.Screen name="Confirmar correo" component={ConfirmEmailScreen} />
                <Stack.Screen name="Contraseña olvidada" component={ForgotPasswordScreen} />
                <Stack.Screen name="Cambiar contraseña" component={ResetPasswordScreen} />
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="Agregar un registro" component={MakeRegisterScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigation;