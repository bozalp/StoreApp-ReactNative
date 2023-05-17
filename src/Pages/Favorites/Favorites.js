import { StyleSheet, View, Text, SafeAreaView, Platform, StatusBar, FlatList } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import FavoritesBox from '../../Components/FavoritesBox';
import { useEffect, useState } from 'react';
import styles from './Favorites.style';

const Favorites = ({ navigation }) => {
    const favorites = useSelector((state) => state.favorites);
    const [isEmpty, setEmpty] = useState(true);

    useEffect(() => {
        FullnessControl(favorites)
    }, [favorites]);

    function FullnessControl(item) {
        if (item.length !== 0)
            setEmpty(false);
        else
            setEmpty(true);
        console.log(isEmpty);
    }

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>
                Favorites
            </Text>
            {
                isEmpty
                    ?
                    <Text style={styles.empty_text}>
                        Favorites is empty
                    </Text>
                    :
                    <FlatList
                        data={favorites}
                        renderItem={({ item }) => <FavoritesBox navigation={navigation} productId={item} />}
                        style={styles.list}
                        showsVerticalScrollIndicator={false}
                    />
            }
        </SafeAreaView>
    )
}

export default Favorites;