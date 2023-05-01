import React, {useState} from "react";
import {View, Text, StyleSheet} from 'react-native';
import CustomInput from "../../components/CustomInput/CustomInput";
import CustomButton from "../../components/CustomButton/CustomButton";
import { useNavigation } from '@react-navigation/native'

const ConfirmEmailScreen = () => {
    const [username, setUsername] = useState('');
    const [code, setCode] = useState('');
    
    const navigation = useNavigation();

    const onConfirmPressed = () => {
        navigation.navigate('Home');
    }
    const backToSignInPressed = () => {
        navigation.navigate('Inicio de sesión');
    }
    const resendCodePressed = () => {
        console.warn("Reenviando código");
    }
    
    return(
        <View style={styles.root}>
            <Text style={styles.subtitulo}>Confirma tu correo:</Text>
            <Text>Hemos enviado un código a tu correo electrónico.</Text>
            <Text>(Función por implementar. Oprima confirmar)</Text>
            <CustomInput 
                placeholder={"Nombre de usuario"} 
                value={username} 
                setValue={setUsername}/>
            <CustomInput 
                placeholder={"Código de confirmación"} 
                value={code} 
                setValue={setCode}/>    
            <CustomButton text={"Confirmar"} onPress={onConfirmPressed}/>
            <CustomButton text={"Volver a la página principal"} onPress={backToSignInPressed} type="secondary" />
            <CustomButton text={"Reenviar código"} onPress={resendCodePressed} type="secondary" />
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




export default ConfirmEmailScreen;