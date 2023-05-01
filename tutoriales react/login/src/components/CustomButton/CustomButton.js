import React from "react";
import { StyleSheet, Text, Pressable} from 'react-native';

const CustomButton= ({onPress, text,type="basic"}) => {
    return(
        <Pressable onPress={onPress} style={[styles.container,styles[`container_${type}`]]}>
            <Text style={[styles.text, styles[`text_${type}`]]}>{text}</Text>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    container_basic:{
        backgroundColor: '#2f9fb3',
        width: "100%",
        marginVertical: 5,
        alignItems: 'center',
        borderRadius: 30,
        padding:15,
        marginTop: 10
    },
    container_secondary:{
        width: "100%",
        marginVertical: 5,
        alignItems: 'center',
        borderRadius: 30,
        padding:15,
    },
    text_basic:{
        fontWeight: 'bold',
        color:'#fff',
    },
    text_secondary:{
        fontWeight: 'bold',
        color:'#957dad',
    },
})

export default CustomButton;