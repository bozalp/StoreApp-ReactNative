import { StyleSheet, View, Text, SafeAreaView, Platform, TextInput, FlatList, ActivityIndicator } from 'react-native';
import { useState, useEffect } from 'react';
import axios from 'axios';

import ProductBox from '../Components/ProductBox';

const productsURL = 'https://fakestoreapi.com/products';

const Home = ({ navigation }) => {
    const [products, setProducts] = useState(null);
    const [isLoading, setLoading] = useState(false);

    const fetchProducts = async () => {
        try {
            const response = await axios.get(productsURL);
            setProducts(response.data);
            setLoading(true);
        }
        catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    const renderItem = ({ item }) => <ProductBox products={item} />

    return (
        <SafeAreaView style={styles.container}>
            {
                !isLoading ?
                    <ActivityIndicator />
                    :
                    <FlatList
                        data={products}
                        renderItem={renderItem}
                        numColumns={2}
                        ListHeaderComponent={
                            <View>
                                <View>
                                    <Text>
                                        Burada textbox olacak
                                    </Text>
                                </View>
                                <View>
                                    <Text>
                                        Burada kategoriler sağa doğru kaydırılabilir olacak
                                    </Text>
                                </View>
                            </View>
                        }
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
            backgroundColor:'white',
            paddingTop: Platform.OS === 'android' ? 36 : 0,
            padding: 10,
        }
    }
);

export default Home;