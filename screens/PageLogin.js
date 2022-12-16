import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { css } from "../assets/css/Css";

export default function PageLogin(props) {

    const [usuario, setUsuario] = useState('');
    const [senha, SetSenha] = useState('');

    function entrar() {
        alert(usuario);
        alert(senha);
        alert('funcionando');
        //fazer chamada backend
    }

    return (
        <View style={css.container}>
            <Text style={css.chamada}>Clínica Saúde Animal</Text>
            <TextInput placeholder='Digite o nome do seu usuário...' style={css.textInput} onChangeText={text => setUsuario(usuario)} />
            <TextInput secureTextEntry={true} placeholder='Digite a sua senha...' style={css.textInput} onChangeText={text => SetSenha(senha)} />
            <TouchableOpacity style={css.btnEntrar} onPress={()=>props.navigation.navigate("Aumigos da Clínica")}>
                <Text style={{ color: '000000', textAlign: 'center' }}>ENTRAR</Text>
            </TouchableOpacity>
        </View>
    );
}