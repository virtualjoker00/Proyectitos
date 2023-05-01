import React, {useState, useEffect} from "react";
import { View, Text, StyleSheet, FlatList, ScrollView } from 'react-native'
import MakeRegisterScreen from '../MakeRegisterScreen'
import CustomButton from "../../components/CustomButton/CustomButton";
import { useNavigation, useFocusEffect } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage';

const HomeScreen = () => {
    const navigation = useNavigation();
    const [registerList, setRegisterList] = useState([]);
    const [refreshHome,setRefreshHome] = useState(false);
    useEffect(() => {
        const getRegister= async() => {
            try {
                const registerData = await AsyncStorage.getItem('registros');
                if (registerData != null){
                    setRegisterList(JSON.parse(registerData));
                }
            } catch(error){
                console.log(error);
            }
        }
        getRegister();
},[refreshHome]);

    useFocusEffect(
        React.useCallback(() => {
            setRefreshHome((prev) => !prev);
        }, [])
    );
    const onMakeRegisterPressed = async () =>{
        navigation.navigate('Agregar un registro', {onAdd: async () => {
            setRefreshHome(true);
        }});
    }

    const renderItem = ({ item }) => (
        <View style={styles.registro}>
          <Text>Texto: {item.inputTexto}</Text>
          <Text>Número: {item.inputNum}</Text>
          <Text>Desplegable: {item.desplegable}</Text>
          <Text>Checkbox: {item.checkBox ? 'Sí' : 'No'}</Text>
          <Text>Switch: {item.switchInput ? 'Sí' : 'No'}</Text>
          <Text>Slider: {item.slider}</Text>
          <Text>Mapa:</Text>
          <Text> -Latitud: {item.latitude}</Text>
          <Text> -Longitud: {item.longitude}</Text>
        </View>
      );
      
      
    

    return(
        <View style={styles.root}>
            <CustomButton text={"Agrega un registro"} onPress={onMakeRegisterPressed}/>
            <FlatList
                data={registerList}
                renderItem={renderItem}
                keyExtractor={(item) => item.id.toString()}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    root: {
      flex: 1,
      backgroundColor: '#d4f0f0',
      justifyContent: 'center',
    },
    titulo: {
      fontSize: 20,
      color: '#00264d',
      fontWeight: 'bold',
    },
    registro: {
        backgroundColor: '#c6e2e9',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    }
});
export default HomeScreen;