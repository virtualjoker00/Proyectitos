import React from "react";
import { StyleSheet, Text, View, TextInput, Button} from 'react-native';

const CustomInput = ({value, setValue, placeholder,secureTextEntry,keyboardType="default"}) => {
    return(
        <View style={styles.container}>
            <TextInput value={value} 
            onChangeText={setValue} 
            placeholder={placeholder}
            secureTextEntry={secureTextEntry}
            keyboardType={keyboardType} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        borderWidth:1,
        padding:10,
        width: '100%',
        marginTop:20,
        borderRadius: 30,
        backgroundColor: '#fff',
        marginVertical: 5,
    },
  });


export default CustomInput;