import { View, Text } from 'react-native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();
import Home from '../Pages/Home';
import Categories from '../Pages/Categories';
import ShoppingCart from '../Pages/ShoppingCart';
import Favorites from '../Pages/Favorites';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const MyTabs = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={Home} options={{
                headerShown: false,
                tabBarLabel: 'Home',
                tabBarIcon: ({ color }) => (
                    <MaterialCommunityIcons name="home" color={color} size={24} />
                ),
            }} />
            <Tab.Screen name="Categories" component={Categories}
                options={{
                    headerShown: false,
                    tabBarLabel: 'Categories',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="shape" color={color} size={24} />
                    ),
                }} />
            <Tab.Screen name="ShoppingCart" component={ShoppingCart}
                options={{
                    headerShown: false,
                    tabBarLabel: 'Shopping Cart',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="shopping" color={color} size={24} />
                    ),
                }} />
            <Tab.Screen name="Favorites" component={Favorites}
                options={{
                    headerShown: false,
                    tabBarLabel: 'Favorites',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="heart" color={color} size={24} />
                    ),
                }} />
        </Tab.Navigator>
    )
}

export default MyTabs;