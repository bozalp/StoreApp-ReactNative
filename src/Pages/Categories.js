import { StyleSheet, View, Text, SafeAreaView, Platform } from 'react-native';
const Categories = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            <Text>
                Categories
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

export default Categories;