import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function HomeScreen({ navigation }) {
    return(
        <View style={styles.container}>
            <Text style={styles.titulo}>Home</Text>
            <TouchableOpacity 
                style={styles.botao}
                onPress={() => navigation.navigate('Detalhes')}>
                <Text style={styles.textoBotao}>Ir para detalhes</Text>
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
            width: '10%',
            height: 50,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'lightblue',
            borderRadius: 6,
        },
})