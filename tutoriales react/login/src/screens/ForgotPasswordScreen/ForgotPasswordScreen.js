import React, {useState} from "react";
import {View, Text, StyleSheet} from 'react-native';
import CustomInput from "../../components/CustomInput/CustomInput";
import CustomButton from "../../components/CustomButton/CustomButton";
import { useNavigation } from '@react-navigation/native'


const ForgotPasswordScreen = () => {
    const [username, setUsername] = useState('');
    
    const navigation = useNavigation();

    const onSendPressed = () => {
        navigation.navigate('Cambiar contraseña');
        
    }
    const backToSignInPressed = () => {
        navigation.navigate('Inicio de sesión');
    }
    
    return(
        <View style={styles.root}>
            <Text style={styles.subtitulo}>Cambia tu contraseña:</Text>
            <Text style={styles.subtitulo}>(Función por implementar)</Text>
            <CustomInput 
                placeholder={"Nombre de usuario"} 
                value={username} 
                setValue={setUsername}/>
            <CustomButton text={"Enviar"} onPress={onSendPressed}/>
            <CustomButton text={"Volver a la página principal"} onPress={backToSignInPressed} type="secondary" />
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




export default ForgotPasswordScreen;