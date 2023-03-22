import { StyleSheet, View, Text, SafeAreaView, Platform, StatusBar, FlatList } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import FavoritesBox from '../Components/FavoritesBox';

const Favorites = ({ navigation }) => {
    const favorites = useSelector((state) => state.favorites);

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>
                Favorites
            </Text>
            <FlatList
                data={favorites}
                renderItem={({ item }) => <FavoritesBox productId={item} />}
                style={styles.list}
            />
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
            padding: 10,
        },
        title:
        {
            fontWeight: 'bold',
            padding: 10,
            fontSize: 16
        },
        list:
        {
            flex: 1,
        }
    }
);

export default Favorites;