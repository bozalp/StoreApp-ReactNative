import { StyleSheet, View, Text, SafeAreaView, Platform, StatusBar } from 'react-native';
const ShoppingCart = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>
                Shopping Cart
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