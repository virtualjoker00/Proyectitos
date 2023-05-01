import React, {useState} from "react";
import {View, Text, StyleSheet} from 'react-native';
import CustomInput from "../../components/CustomInput/CustomInput";
import CustomButton from "../../components/CustomButton/CustomButton";
import { useNavigation } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage';

const SignUpScreen = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordRpt, setPasswordRpt] = useState('');

    const navigation = useNavigation();

    const onRegisterPressed = async() => {
        const userData= {
            id: 0,
            username,
            email,
            password,
        }
        try {
            const usersData = await AsyncStorage.getItem('users');
            const users = usersData ? JSON.parse(usersData) : [];
            const id = users.length ? users[users.length - 1].id + 1 : 1;
            userData.id = id;
            users.push(userData);
            await AsyncStorage.setItem('users', JSON.stringify(users));
            navigation.navigate('Confirmar correo');
            console.log(usersData);
          } catch (error) {
            console.error(
              "Error: no se pudieron guardar los datos de registro",
              error
            );
          }
    };
    
    return(
        <View style={styles.root}>
            <Text style={styles.subtitulo}>Crea una cuenta:</Text>
            <CustomInput 
                placeholder={"Nombre de usuario"} 
                value={username} 
                setValue={setUsername}/>
            <CustomInput 
                placeholder={"Email"} 
                value={email} 
                setValue={setEmail}/>    
            <CustomInput 
                placeholder={"Contraseña"} 
                value={password} 
                setValue={setPassword} 
                secureTextEntry={true}/>
            <CustomInput 
                placeholder={"Repetir contraseña"} 
                value={passwordRpt} 
                setValue={setPasswordRpt} 
                secureTextEntry={true}/>    
            <CustomButton text={"Registrarse"} onPress={onRegisterPressed}/>
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


export default SignUpScreen;