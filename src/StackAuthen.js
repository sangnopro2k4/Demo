import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RegisterScreen from './RegisterScreen';
import TabNavigation from './TabNavigation';

const Stack = createNativeStackNavigator();

const StackAuthen = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
                <Stack.Screen name="TabNavigation" component={TabNavigation}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default StackAuthen