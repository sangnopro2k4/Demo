import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Book, Home2, SearchNormal } from 'iconsax-react-native';
import { Text, View } from 'react-native';
import StackHome from './StackHome';

const Tab = createBottomTabNavigator();


function SearchScreen() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Search</Text>
        </View>
    );
}

function LibraryScreen() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Library</Text>
        </View>
    );
}



function TabNavigation() {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarIcon: ({ focused, color, size }) => {
                    switch (route.name) {
                        case 'StackHome': return <Home2 size={size} color={focused ? '#4838D1' : '#6A6A8B'} />
                        case 'SearchScreen': return <SearchNormal size={size} color={focused ? '#4838D1' : '#6A6A8B'} />
                        case 'LibraryScreen': return <Book size={size} color={focused ? '#4838D1' : '#6A6A8B'} />
                    }
                },
                tabBarLabel: ({ focused, color, size }) => {
                    switch (route.name) {
                        case 'StackHome': return <Text style={{ color: focused ? '#4838D1' : '#6A6A8B', fontWeight: 'bold' }}>Home</Text>
                        case 'SearchScreen': return <Text style={{ color: focused ? '#4838D1' : '#6A6A8B', fontWeight: 'bold' }}>Search</Text>
                        case 'LibraryScreen': return <Text style={{ color: focused ? '#4838D1' : '#6A6A8B', fontWeight: 'bold' }}>Library</Text>
                    }
                },
                tabBarStyle: {
                    height: 65,
                    paddingVertical: 10
                }
            })}
        >
            <Tab.Screen name='StackHome' component={StackHome} />
            <Tab.Screen name='SearchScreen' component={SearchScreen} />
            <Tab.Screen name='LibraryScreen' component={LibraryScreen} />
        </Tab.Navigator>
    );
}

export default TabNavigation;