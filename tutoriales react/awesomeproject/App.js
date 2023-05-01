import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button} from 'react-native';
import React from 'react';


export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>¡Hola!</Text>
      <Text style={styles.subtitulo}>Ingresa a tu cuenta</Text>
      <TextInput style={styles.textInput} placeholder='Ingresa tu nombre de usuario'></TextInput>
      <TextInput style={styles.textInput} secureTextEntry={true} placeholder='Ingresa tu contraseña'></TextInput>
      <Text style={styles.forgotPassword}>¿Olvidaste tu contraseña?</Text>
      <Button title='Ingresa'></Button>
      <Text style={styles.forgotPassword}>Crear una cuenta</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d4f0f0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo: {
    fontSize: 35,
    fontWeight: 'bold',
  },
  subtitulo: {
    fontSize: 20,
  },
  textInput: {
    borderWidth:1,
    padding:10,
    width: '80%',
    marginTop:20,
    borderRadius: 30,
    backgroundColor: '#fff',
  },
  forgotPassword: {
    fontSize: 15,
    color: 'gray',
    marginTop: 20,
    marginBottom: 20,
  },
  button:{
    width:'80%',
    height: 50,
    borderRadius: 25,
    alignItems: 'center'
  }
});
