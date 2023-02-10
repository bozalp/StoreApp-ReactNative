import { StyleSheet, View, Text, SafeAreaView, Platform } from 'react-native';
const ShoppingCart = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            <Text>
                Sepet
            </Text>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create(
    {
        container:
        {
            flex: 1,
            backgroundColor:'white',
            paddingTop: Platform.OS === 'android' ? 36 : 0,
            padding: 10
        }
    }
);

export default ShoppingCart;