import { View, Text } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

import MyTabs from './MyTabs';
import Splash from '../Pages/Splash';
import ProductPage from '../Components/ProductPage';
import ProductBox from '../Components/ProductBox';

import store from '../ReduxToolkit/store';
import { Provider } from 'react-redux'

const Root = () => {
    return (
        <Provider store={store}>
            <NavigationContainer>
                <Stack.Navigator>
                    {/*<Stack.Screen name="Splash" component={Splash} options={{ headerShown: false }} />*/}
                    <Stack.Screen name="MyTabs" component={MyTabs} options={{ headerShown: false }} />
                    <Stack.Screen name="ProductPage" component={ProductPage} options={{ headerShown: false }} />
                    <Stack.Screen name="ProductBox" component={ProductBox} options={{ headerShown: false }} />

                </Stack.Navigator>
            </NavigationContainer>
        </Provider>
    )
}

export default Root;