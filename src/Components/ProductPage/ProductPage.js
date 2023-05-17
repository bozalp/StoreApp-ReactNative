import { View, Button, Image, Text, TouchableOpacity, StyleSheet, ActivityIndicator, SafeAreaView, ScrollView, StatusBar, Alert } from 'react-native';
import { useState, useEffect } from 'react';
import axios from 'axios';
import RatingStars from '../RatingStars';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { useSelector, useDispatch } from 'react-redux';
import { addToShoppingCart } from '../../ReduxToolkit/shoppingCartReducer';
import { addToFavorites, deleteFromFavorites } from '../../ReduxToolkit/favoritesReducer';

const productsURL = 'https://fakestoreapi.com/products/';

import styles from './ProductPage.style';

const ProductPage = ({ route, navigation }) => {
    const { productId } = route.params;

    const [products, setProducts] = useState(null);
    const [isLoading, setLoading] = useState(false);
    const [isFavorite, setFavorite] = useState(false);

    //const shoppingCart = useSelector((state) => state.shoppingCarts);
    const favorites = useSelector((state) => state.favorites);
    const dispatch = useDispatch();

    const fetchProducts = async () => {
        try {
            const response = await axios.get(productsURL + productId.toString());
            setProducts(response.data);
            setLoading(true);
            IsFavorites(productId);
        }
        catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    function AddToFavorite() {
        !isFavorite ?
            dispatch(addToFavorites(productId)) :
            dispatch(deleteFromFavorites(productId));
        setFavorite(fav => !fav);
    }

    function IsFavorites(id) {
        favorites.includes(id) ?
            setFavorite(true)
            :
            setFavorite(false);
    }

    function AddToShoppingCart() {
        console.log("product has been successfully added to the shopping cart");
        dispatch(addToShoppingCart(productId));
    }

    return (
        !isLoading ?
            <ActivityIndicator />
            :
            <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
                <View style={styles.back_button}>
                    <TouchableOpacity activeOpacity={0.7} onPress={() => navigation.goBack()}>
                        <MaterialCommunityIcons name={'keyboard-backspace'} color={'#999'} size={24} />
                    </TouchableOpacity>
                </View>

                <View style={styles.add_cart_area}>
                    <Text style={styles.price_text}>
                        ${products.price}
                    </Text>
                    <TouchableOpacity activeOpacity={0.7} style={styles.add_to_cart_button} onPress={AddToShoppingCart}>
                        <Text style={{ color: 'white', fontSize: 20 }}>
                            Add to Cart
                        </Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.like_button}>
                    <TouchableOpacity activeOpacity={0.7} onPress={AddToFavorite}>
                        <MaterialCommunityIcons name={isFavorite ? 'heart' : 'heart-outline'} color={isFavorite ? '#007aff' : '#999'} size={24} />
                    </TouchableOpacity>
                </View>

                <ScrollView>
                    <View style={styles.container}>
                        <Image style={styles.product_image} source={{
                            uri: products.image
                        }} />
                        <View style={styles.line} />
                        <Text style={styles.title}>
                            {products.title}
                        </Text>
                        <RatingStars rate={products.rating.rate} count={products.rating.count} />
                        <View style={styles.line} />

                        <View>
                            <Text style={styles.description_text}>
                                Description
                            </Text>
                            <Text style={styles.description}>
                                {products.description}
                            </Text>
                        </View>
                    </View>
                </ScrollView>
            </SafeAreaView >
    )
}

export default ProductPage;