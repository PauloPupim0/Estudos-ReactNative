import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Ionicons } from '@expo/vector-icons';

import HomeScreen from './screens/HomeScreen';
import DetailScreen from './screens/DetailScreen';
import PerfilScreen from './screens/PerfilScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function StackRoutes() {
    return(
        <Stack.Navigator 
            //screenOptions={{headerShown: false}} //para tirar o cabeçalho de cima da tela
        >
            <Stack.Screen name="Home" component={HomeScreen}/>
            <Stack.Screen name="Detalhes" component={DetailScreen}/>
        </Stack.Navigator>
    )
}

function TabRoutes() {
    return(
        <Tab.Navigator 
            screenOptions={
                ({ route }) => ({
                tabBarIcon: ({ color, size }) => {
                    let iconName;

                    if (route.name === 'HomeTab') {
                        iconName = 'home';
                    } else if (route.name === 'PerfilTab'){
                        iconName = 'person';
                    }

                    return <Ionicons name={iconName} size={size} color={color}/>;
                },
                tabBarActiveTintColor: 'blue',
                tabBarinactiveTintColor: 'gray',
            })
            }
        >
            {/* O options aqui, é pra tirar o header da parte do TAB na home (se n ia ficar dois headers, do tab e do stack) */}
            <Tab.Screen name="HomeTab" component={StackRoutes} options={{tabBarLabel: 'Home',headerShown: false}}/>
            <Tab.Screen name="PerfilTab" component={PerfilScreen} options={{tabBarLabel: 'Perfil', title: 'Perfil'}}/>
        </Tab.Navigator>
    )
}

export default TabRoutes; //Define o ponto de entrada (qual modo de navegação vai ser executado primeiro no app)