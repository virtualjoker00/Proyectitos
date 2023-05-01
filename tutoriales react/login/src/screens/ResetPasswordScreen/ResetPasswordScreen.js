import React, {useState} from "react";
import {View, Text, StyleSheet} from 'react-native';
import CustomInput from "../../components/CustomInput/CustomInput";
import CustomButton from "../../components/CustomButton/CustomButton";
import { useNavigation } from '@react-navigation/native'


const ResetPasswordScreen = () => {
    const [code, setCode] = useState('');
    const [password, setPassword] = useState('');
    const [passwordRpt, setPasswordRpt] = useState('');
    
    const navigation = useNavigation();

    const onSubmitPressed = () => {
        navigation.navigate('Home');
    }
    const backToSignInPressed = () => {
        navigation.navigate('Inicio de sesión');
    }
    
    return(
        <View style={styles.root}>
            <Text style={styles.subtitulo}>Cambia tu contraseña</Text>
            <Text style={styles.subtitulo}>(Función por implementar)</Text>
            <CustomInput 
                placeholder={"Código de confirmación"} 
                value={code} 
                setValue={setCode}/>
            <CustomInput 
                placeholder={"Nueva contraseña"} 
                value={password} 
                setValue={setPassword}
                secureTextEntry={true}/>
            <CustomInput 
                placeholder={"Confirmar nueva contraseña"} 
                value={passwordRpt} 
                setValue={setPasswordRpt}
                secureTextEntry={true}/>    
            <CustomButton text={"Cambiar"} onPress={onSubmitPressed}/>
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




export default ResetPasswordScreen;