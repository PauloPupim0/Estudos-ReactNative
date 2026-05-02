import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function DetailScreen({ navigation }) {
    return(
        <View style={styles.container}>
            <Text style={styles.titulo}>Detalhes</Text>
            <TouchableOpacity
                style={styles.botao}
                onPress={() => navigation.goBack()}>
                <Text>Voltar para Home</Text>
            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
        container: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
        },
        titulo: {
            fontSize: 25,
            fontWeight: 'bold',
        },
        botao: {
            width: '30%',
            height: 50,
            justifyContent: 'center',
            alignItems: 'center',
        },
        botao: {
            width: '10%',
            height: 50,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'lightblue',
            borderRadius: 6,
        },
})