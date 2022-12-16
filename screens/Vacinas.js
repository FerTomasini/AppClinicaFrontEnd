import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { Text, View, FlatList} from "react-native";
import axios from "axios";
import { css } from "../assets/css/Css";


export default function Vacinas() {
    const [data, setData] = useState([]);
    const [pet, setPet] = useState([]);
    const [nomeVac, setNomeVac] = useState([]);
    const [dataVacina, setDataVacina] = useState([]);
    const [dataProxVacina, setDataProxVacina] = useState([]);
    const [dataVermifugo, setDataVermifugo] = useState([]);
    const [dataProxVermifugo, setDataProxVermifugo] = useState([]);
    const Item = ({ data, pet, nomeVac, dataVacina, dataProxVacina,dataVermifugo, dataProxVermifugo }) => (
        <View style={css.item2}>
            <Text style={css.title}>{data}{pet}{nomeVac}{dataVacina}
            {dataProxVacina}{dataVermifugo}{dataProxVermifugo}</Text>
        </View>
    );
    async function listVacinas() {
        try {
            const response = await axios.get(
                "http://localhost:8080/api/carteirinha/vacinas"
            );
            setData(response.data);
            setPet(response.pet);
            setNomeVac(response.nomeVac);
            setDataVacina(response.dataVacina);
            setDataProxVacina(response.dataProxVacina);
            setDataVermifugo(response.dataVermifugo);
            setDataProxVermifugo(response.dataProxVermifugo);
        } catch (err) {
            console.log(err);
        }
    }
    
    useEffect(() => {
        listVacinas();
    }, [])

    const renderItem = ({ item }) => (
        <Item data={"Id do Pet: " + item.pet.id + ",  Nome do Aumigo: "+ item.pet.nome+",  "} nomeVac={"Vacinas aplicadas: " + item.nomeVac + ",  "} dataVacina={"data da Vacinação: " + item.dataVacina+",  "}
        dataVermifugo={"Vermifugo aplicado em: " +item.dataVermifugo+",  "} dataProxVacina={"Próxima vacinação em: "+item.dataProxVacina+",  "}
        dataProxVermifugo={"Aplicar vermifugo novamente em: "+item.dataProxVermifugo}/>
    );

    return(
        <View style={css.container2}>
        <Text style={css.chamada2}>Carteirinha de Vacinação</Text>
        <FlatList
            data={data}
            pet={pet}
            nomeVac={nomeVac}
            dataVacina={dataVacina}
            dataProxVacina={dataProxVacina}
            dataVermifugo={dataVermifugo}
            dataProxVermifugo={dataProxVermifugo}
            renderItem={renderItem}
            keyExtractor={(item) => item.id.toString()}
        />
        <StatusBar style="auto" />
    </View>
    );
}