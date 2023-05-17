import { StyleSheet, View, Text, SafeAreaView, StatusBar, TextInput, FlatList, ActivityIndicator, Image, TouchableOpacity } from 'react-native';
import { useState, useEffect } from 'react';
import axios from 'axios';

import ProductBox from '../../Components/ProductBox';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialIcons';

import { useSelector, useDispatch } from 'react-redux';
import styles from './Home.styles';

const productsURL = 'https://fakestoreapi.com/products';

const Home = ({ navigation }) => {
    const [products, setProducts] = useState(null);
    const [isLoading, setLoading] = useState(false);
    const [searchText, setSearchText] = useState('');
    const favorites = useSelector((state) => state.favorites);

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
    },[]);

    const renderItem = ({ item }) => <ProductBox products={item} navigation={navigation} />

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
                        showsVerticalScrollIndicator={false}
                        ListHeaderComponent={
                            <View>
                                <View style={styles.header}>
                                    <Image
                                        style={styles.logo}
                                        source={require('../../../assets/store-logo.png')}
                                    />
                                    <TextInput
                                        placeholder="Search Product..."
                                        onChangeText={searchText => setSearchText(searchText)}
                                        style={styles.textbox}
                                    />
                                    <TouchableOpacity activeOpacity={0.7} style={styles.search_button}>
                                        <MaterialCommunityIcons name={'search'} color={'#007aff'} size={28} />
                                    </TouchableOpacity>
                                </View>
                            </View>
                        }
                    />
            }
        </SafeAreaView>
    )
}

export default Home;