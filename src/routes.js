import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from './screens/HomeScreen';
import DetailScreen from './screens/DetailScreen';

const Stack = createNativeStackNavigator();

export default function StackRoutes() {
    return(
        <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen}/>
            <Stack.Screen name="Detalhes" component={DetailScreen}/>
        </Stack.Navigator>
    )
}