import { StyleSheet, View, Text, SafeAreaView, Platform, StatusBar, FlatList } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import FavoritesBox from '../Components/FavoritesBox';
import { useEffect, useState } from 'react';

const Favorites = ({ navigation }) => {
    const favorites = useSelector((state) => state.favorites);
    const [isEmpty, setEmpty] = useState(true);

    useEffect(() => {
        FullnessControl(favorites)
    }, [favorites]);

    function FullnessControl(item) {
        // console.log(">>" + item.length);
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
        },
        empty_text:
        {
            fontSize: 18,
            fontWeight: '700',
            textAlign: 'center',
            marginTop: 20,
        },
    }
);

export default Favorites;