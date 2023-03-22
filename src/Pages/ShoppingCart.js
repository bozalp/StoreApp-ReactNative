import { StyleSheet, View, Text, SafeAreaView, Platform, StatusBar } from 'react-native';

import { useSelector, useDispatch } from 'react-redux';

const ShoppingCart = ({ navigation }) => {

    const shoppingCart = useSelector((state) => state.shoppingCarts);

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>
                Shopping Cart
            </Text>
            <Text>
                {shoppingCart}
            </Text>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create(
    {
        container:
        {
            flex: 1,
            backgroundColor: 'white',
            paddingTop: StatusBar.currentHeight,
            padding: 10
        },
        title:
        {
            fontWeight: 'bold',
            padding: 10,
            fontSize: 16
        }
    }
);

export default ShoppingCart;