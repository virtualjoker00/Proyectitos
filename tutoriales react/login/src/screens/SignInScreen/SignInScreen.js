import React, {useState} from "react";
import {View, Text, StyleSheet} from 'react-native';
import CustomInput from "../../components/CustomInput/CustomInput";
import CustomButton from "../../components/CustomButton/CustomButton";
import { useNavigation } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage';


const SignInScreen = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    
    const [error, setError] = useState('');
    const navigation = useNavigation();
    
    const onSignInPressed = async() => {
        try {
            const users = await AsyncStorage.getItem('users');
            const parsedUsers = JSON.parse(users);
            const user = parsedUsers.find(user => user.username ===username && user.password===password);

            if(!user){
                setError('Usuario o contraseña incorrectos.');
                console.warn("Usuario o contraseña incorrectos.")
                return;
            }
            navigation.navigate('Home');
        }
        catch(error){
            console.error(error);
            setError('Error de autenticación');
        }
    }
    const onForgotPasswordPressed = () => {
        navigation.navigate('Contraseña olvidada');
    }
    const onCreateAccountPressed = () => {
        navigation.navigate('Registro');
    }
    return(
        <View style={styles.root}>
            <Text style={styles.titulo}>¡Hola!</Text>
            <Text style={styles.subtitulo}>Inicia sesión:</Text>
            <CustomInput 
                placeholder={"Nombre de usuario"} 
                value={username} 
                setValue={setUsername}/>
            <CustomInput 
                placeholder={"Contraseña"} 
                value={password} 
                setValue={setPassword} 
                secureTextEntry={true}/>
            <CustomButton text={"Ingresa"} onPress={onSignInPressed}/>
            <CustomButton text={"¿Olvidaste tu contraseña?"} onPress={onForgotPasswordPressed} type="secondary"/>
            <CustomButton text={"¿No tienes una cuenta? Crea una aquí."} onPress={onCreateAccountPressed} type="secondary"/>
        </View>
    )
}

const styles= StyleSheet.create({
    root: {
        alignItems: 'center',
        padding: 20,
    },
    
    titulo: {
        fontSize: 35,
        fontWeight: 'bold',
      },
    subtitulo: {
        fontSize: 20,
      },
   
})


export default SignInScreen;