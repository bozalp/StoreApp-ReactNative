import { StyleSheet, View, Text, SafeAreaView, Platform, TextInput, FlatList } from 'react-native';
const Home = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            
        </SafeAreaView>
    )
}

const styles = StyleSheet.create(
    {
        container:
        {
            flex: 1,
            paddingTop: Platform.OS === 'android' ? 36 : 0,
            padding: 10
        }
    }
);

export default Home;