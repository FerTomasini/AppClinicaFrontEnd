import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { Text, View, FlatList} from "react-native";
import axios from "axios";
import { css } from "../assets/css/Css";


export default function Historico() {
    const [data, setData] = useState([]);
    const [id, setId] = useState([]);
    const [examesImagem, setExamesImagem] = useState([]);
    const [examesLab, setExamesLab] = useState([]);
    const [atendimentos, setAtendimentos] = useState([]);
    const [diagnosticos, setDiagnosticos] = useState([]);
    const [cirurgias, setCirurgias] = useState([]);
    const [antiparasitariosEx, setAntiparasitariosEx] = useState([]);
    const Item = ({ data, examesImagem, examesLab, id, atendimentos,diagnosticos, cirurgias, antiparasitariosEx }) => (
        <View style={css.item2}>
            <Text style={css.title}>{data}{examesImagem}{examesLab}{id}
            {atendimentos}{diagnosticos}{cirurgias}{antiparasitariosEx}</Text>
        </View>
    );
    async function listHistoricos() {
        try {
            const response = await axios.get(
                "http://localhost:8080/api/historico/historicos"
            );
            setData(response.data);
            setId(response.id);
            setExamesImagem(response.examesImagem);
            setExamesLab(response.examesLab);
            setAtendimentos(response.atendimentos);
            setDiagnosticos(response.diagnosticos);
            setCirurgias(response.cirurgias);
            setAntiparasitariosEx(response.antiparasitariosEx);
        } catch (err) {
            console.log(err);
        }
    }
    
    useEffect(() => {
        listHistoricos();
    }, [])

    const renderItem = ({ item }) => (
        <Item data={"Id do Pet: " + item.id + ",  "} examesImagem={"Exames de Imagem: " + item.examesImagem + ",  "} examesLab={"Exames Laboratoriais: " + item.examesLab+",  "}
        atendimentos={"Atendimentos realizados: " +item.atendimentos+",  "} diagnosticos={"Diagnósticos: "+item.diagnosticos+",  "}
        cirurgias={"Cirurgias realizadas: "+item.cirurgias+",  "} antiparasitariosEx={"Antiparasitários aplicados: "+item.antiparasitariosEx} />
    );

    return(
        <View style={css.container2}>
        <Text style={css.chamada2}>Historico dos Pacientes</Text>
        <FlatList style={css.FlatList}
            data={data}
            id={id}
            examesImagem={examesImagem}
            examesLab={examesLab}
            atendimentos={atendimentos}
            diagnosticos={diagnosticos}
            cirurgias={cirurgias}
            antiparasitariosEx={antiparasitariosEx}
            renderItem={renderItem}
            keyExtractor={(item) => item.id.toString()}
        />
        <StatusBar style="auto" />
    </View>
    );
}