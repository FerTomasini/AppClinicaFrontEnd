import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { Text, View, FlatList, TouchableOpacity } from "react-native";
import axios from "axios";
import { css } from "../assets/css/Css";


export default function Principal(props) {
    const [data, setData] = useState([]);
    const [id, setId] = useState([]);
    const [raca, setRaca] = useState([]);
    const [corPelagem, setCor] = useState([]);
    const [especie, setEspecie] = useState([]);
    const [genero, setGenero] = useState([]);
    const Item = ({ data, id, raca, corPelagem, especie, genero }) => (
        <View style={css.item}>
            <Text style={css.title}>{data}{id}{raca}{corPelagem}{especie}{genero}</Text>
        </View>
    );
    async function listAumigos() {
        try {
            const response = await axios.get(
                "http://localhost:8080/api/pet/pets"
            );
            setData(response.data);
            setId(response.id);
            setRaca(response.raca);
            setCor(response.corPelagem);
            setEspecie(response.especie);
            setGenero(response.genero);
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        listAumigos();
    }, [])

    const renderItem = ({ item }) => (
        <Item data={"Nome: " + item.nome + ", "} id={"Id do pet: "+ item.id+", "} raca={"raça: " + item.raca + ", "}
            corPelagem={"cor da Pelagem: " + item.corPelagem + ", "} especie={"espécie: " + item.especie + ", "}
            genero={"gênero: " + item.genero} />
    );

    return (
        <View style={css.container2}>
            <Text style={css.chamada2}>Lista de Aumigos!</Text>
            <TouchableOpacity style={css.btnHist} onPress={() => props.navigation.navigate("Historico")}>
                <Text style={{ color: '000000', textAlign: 'center' }}>HISTÓRICO</Text>
            </TouchableOpacity>
            <TouchableOpacity style={css.btnHist} onPress={() => props.navigation.navigate("Vacinas")}>
                <Text style={{ color: '000000', textAlign: 'center' }}>CARTEIRINHA DE VACINAÇÃO</Text>
            </TouchableOpacity>
            <FlatList
                data={data}
                id={id}
                raca={raca}
                corPelagem={corPelagem}
                especie={especie}
                genero={genero}
                renderItem={renderItem}
                keyExtractor={(item) => item.id.toString()}
            />
            <StatusBar style="auto" />
        </View>
    );
}