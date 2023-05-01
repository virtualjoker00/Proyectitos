import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React, {useState, useEffect} from "react";
import Navigation from './src/navigation';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);
  
  useEffect(()=> {
    const checkLoggedIn = async () => {
      try {
        const value = await AsyncStorage.getItem('loggedIn');
        if(value !== null){
          setLoggedIn(true);
        }
      } catch(error){
        console.error('Error: no se pudo verificar el Login', error);
      } finally {
        setLoading(false);
      }
    };
    checkLoggedIn();
  }, []
  );
  if (loading){
    return <View style={styles.root}/>
  }
  
  return (
      <View style={styles.root}>
      <Navigation initialRouteName={loggedIn ? 'HomeScreen' : 'SignInScreen'}/>
      <StatusBar style="auto" />
    </View>
    
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#d4f0f0',
    justifyContent: 'center',
  },
  titulo: {
    fontSize: 35,
    fontWeight: 'bold',
  },
});
