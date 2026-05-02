import { View, Text, StyleSheet} from 'react-native';

export default function PerfilScreen () {
    return(
        <View style={styles.container}>
            <Text style={styles.titulo}>Perfil</Text>
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
})