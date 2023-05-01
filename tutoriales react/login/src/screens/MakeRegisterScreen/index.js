import React, {useState} from "react";
import {View, Text, StyleSheet, Switch} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import CheckBox from 'expo-checkbox';
import {Slider} from '@miblanchard/react-native-slider';
import MapView from 'react-native-maps';
import CustomInput from "../../components/CustomInput/CustomInput";
import CustomButton from "../../components/CustomButton/CustomButton";
import { useNavigation } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { LogBox } from 'react-native';

LogBox.ignoreLogs([
  'Non-serializable values were found in the navigation state',
]);

const MakeRegisterScreen = () => {
    const [inputTexto, setInputTexto] = useState('');
    const [inputNum, setInputNum] = useState('');
    const [desplegable, setDesplegable] = useState('');
    const [checkBox, setCheckbox] = useState(false);
    const [switchInput, setSwitchInput] = useState(false);
    const [slider, setSlider] = useState(0);
    const [latitude, setLatitude] = useState(-33.45694);
    const [longitude, setLongitude] = useState(-70.64827);
    const latitudeDelta = 0.05;
    const longitudeDelta = 0.05;
    const navigation = useNavigation();
    const onAddRegisterPressed = async () => {
        const newRegister = {
            id: 0,
            inputTexto,
            inputNum,
            desplegable,
            checkBox,
            switchInput,
            slider,
            latitude,
            longitude
        };
        //await AsyncStorage.removeItem('registros');
        const registerData = await AsyncStorage.getItem('registros');
        const registerList = registerData ? JSON.parse(registerData) : [];
        const id = registerList.length ? registerList[registerList.length - 1].id + 1 : 1;
        newRegister.id = id;
        registerList.push(newRegister);
        try{
            await AsyncStorage.setItem('registros', JSON.stringify(registerList));
            navigation.state.params.onAdd();
        } catch(error){
            console.log(error);
        }
        navigation.navigate('Home');
        console.log(registerList);
        
    }

    const handleMapPress = (event) => {
        const { coordinate } = event.nativeEvent;
        setLatitude(coordinate.latitude);
        setLongitude(coordinate.longitude);
      };
    
    const handleSliderChange = (value) => {
        setSlider(value);
      };
    return(
        <View style={styles.container}>
            <CustomInput 
                placeholder={"Ingresa un texto"} 
                value={inputTexto} 
                setValue={setInputTexto}/>
            <CustomInput 
                placeholder={"Ingresa un número"} 
                value={inputNum} 
                setValue={setInputNum}
                keyboardType="numeric"/>
            <Picker
                selectedValue={desplegable}
                onValueChange={setDesplegable}
                style={styles.picker}>
                    <Picker.Item label="Opción 1" value="1" />
                    <Picker.Item label="Opción 2" value="2" />
                    <Picker.Item label="Opción 3" value="3" />
            </Picker>
            <CheckBox
                style={styles.checkbox}
                disabled={false}
                value={checkBox}
                onValueChange={setCheckbox}
            />
            <View style={styles.switchcontainer}>
            <Switch
                value={switchInput}
                onValueChange={setSwitchInput}
            />
            </View>
            <View>
            <Text>Valor actual: {slider}</Text>
            <Slider
                value={slider}
                onValueChange={handleSliderChange}
                minimumValue={0}
                maximumValue={100}
            />
            </View>
        <View style={{ height: 200 }}>
        <MapView
            style={{ flex: 1 }}
            initialRegion={{
                latitude: latitude,
                longitude: longitude,
                latitudeDelta: latitudeDelta,
                longitudeDelta: longitudeDelta
            }}
            onPress={handleMapPress}
            />
        <View style={{ position: 'absolute', top: 10, left: 10 }}>
          <Text>Latitud: {latitude.toFixed(6)}</Text>
          <Text>Longitud: {longitude.toFixed(6)}</Text>
        </View>
        </View>
        <CustomButton text={"Agregar registro"} onPress={onAddRegisterPressed}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        borderWidth:1,
        padding:10,
        width: '100%',
        marginTop:20,
        backgroundColor: '#cceeff',
        marginVertical: 5,
        flex:1
    },
    picker:{
        borderWidth:1,
        padding:10,
        width: '100%',
        marginTop:20,
        backgroundColor: '#fff',
        marginVertical: 5,
        borderWidth:1,
        borderColor:'gray'
    },
    checkbox:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginLeft: 10,
        marginRight: 'auto',
        margin: 5,
    },
    switchcontainer:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginLeft: 10,
        marginRight: 'auto',
    },
    mapa:{
        flex:1,
        width: '100%',
        height: '100%',
        position: 'absolute'
    }
});

export default MakeRegisterScreen;