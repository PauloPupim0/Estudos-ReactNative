import React from 'react'; //Caso seja necessario usar algum hook do React, como useState ou useEffect
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

export default function DetailScreen({ route, navigation }) {

    const { dados } = route.params; //Para funcionar precisa do route ali em cima (ao lado do navigation como parametro)
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