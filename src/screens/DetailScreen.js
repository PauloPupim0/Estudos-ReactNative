import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


export default function DetailScreen({ route, navigation }) {

    const { dados } = route.params;
    /*
    const dados = route.params.dados; faz a mesma coisa q o de cima, porem se eu fosse passar mais coisas eu teria q fzr uma linha para cada,
    ex:
        const dados = route.params.dados;
        const usuario = route.params.usuario;
        const token = route.params.token;

    fazendo com o de cima ficaria assim:
        const { dados, usuario, token } = route.params;
    */

    React.useLayoutEffect(() => {
        navigation.setOptions({
            title: dados?.nome || 'Detalhes', // "?" serve para caso n exista o dado, ele nao dar erro e imprimiria o "Detalhes"
        });
    }, [navigation, dados]);

    return(
        <View style={styles.container}>
            <Text>Descrição: {dados.descricao}</Text>
            <Text>Preço: {dados.preco}</Text>
        </View>
    );
}
const styles = StyleSheet.create({
        container: {
            flex: 1,
            alignItems: 'center',
        },
        titulo: {
            fontSize: 25,
            fontWeight: 'bold',
        },
});