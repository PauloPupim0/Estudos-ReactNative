import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from './screens/HomeScreen';
import DetailScreen from './screens/DetailScreen';

const Stack = createNativeStackNavigator();
const Stack = createBottomTabNavigator();

export default function StackRoutes() {
    return(
        <Stack.Navigator 
            //screenOptions={{headerShown: false}} //para tirar o cabeçalho de cima da tela
        >
            <Stack.Screen name="Home" component={HomeScreen}/>
            <Stack.Screen name="Detalhes" component={DetailScreen}/>
        </Stack.Navigator>
    )
}