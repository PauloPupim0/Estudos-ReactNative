import { View, Text, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function HomeScreen({ navigation }) {

    const dados = [
        {id: 1, nome: 'Item 1', descricao: 'Descricao 1', preco: 10},
        {id: 2, nome: 'Item 2', descricao: 'Descricao 2', preco: 20},
        {id: 3, nome: 'Item 3', descricao: 'Descricao 3', preco: 30},
    ];
    
    const renderizador = ({item}) => (
        <View style={styles.itemLista}>{/*                                                                          destino        objeto                                                                             */}
            <TouchableOpacity style={styles.botaoItems} onPress={() => navigation.navigate('Detalhes', {dados: item})}><Text>{item.nome}</Text></TouchableOpacity>
        </View>
    )
    return(
        <View style={styles.container}>
            <Text style={styles.titulo}>Home</Text>
            <View style={styles.secaoLista}> 
                <FlatList data={dados} renderItem={renderizador} keyExtractor={item => item.id}/>     
            </View>
        </View>
    )
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
        secaoLista: {
            height: '50%',
            justifyContent: 'space-between',
        },
        itemLista: {
            marginVertical: 5,
        },
        botaoItems:{
            width: 150,
            height: 50,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'lightblue',
            borderRadius: 6,
        },
})