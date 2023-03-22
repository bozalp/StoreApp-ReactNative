import { View, Button, Image, Text, TouchableOpacity, StyleSheet, ActivityIndicator, SafeAreaView, ScrollView, StatusBar, Alert } from 'react-native';
import { useState, useEffect } from 'react';
import axios from 'axios';
import RatingStars from './RatingStars';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { useSelector, useDispatch } from 'react-redux';
import { addToShoppingCart } from '../ReduxToolkit/shoppingCartReducer';
import { addToFavorites, deleteFromFavorites } from '../ReduxToolkit/favoritesReducer';

const productsURL = 'https://fakestoreapi.com/products/';

const ProductPage = ({ route, navigation }) => {
    const { productId } = route.params;

    const [products, setProducts] = useState(null);
    const [isLoading, setLoading] = useState(false);
    const [isFavorite, setFavorite] = useState(false);

    const shoppingCart = useSelector((state) => state.shoppingCarts);
    const favorites = useSelector((state) => state.favorites);
    const dispatch = useDispatch();

    const fetchProducts = async () => {
        try {
            const response = await axios.get(productsURL + productId.toString());
            setProducts(response.data);
            setLoading(true);
            console.log(favorites);
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

const styles = StyleSheet.create(
    {
        container:
        {
            backgroundColor: 'white',
            flex: 1,
            paddingTop: StatusBar.currentHeight + 20,
            padding: 10
        },
        product_image:
        {
            flex: 1,
            resizeMode: 'center',
            marginBottom: 30,
            minHeight: 250,
        },
        title: {
            fontSize: 18,
            fontWeight: '700',
            paddingBottom: 10,
        },
        line:
        {
            marginBottom: 5,
            marginTop: 5,
            borderBottomColor: '#dedede',
            borderBottomWidth: 1
        },
        add_cart_area:
        {
            flexDirection: 'row',
            zIndex: 120,
            position: 'absolute',
            bottom: 0,
            padding: 10,
            alignItems: 'center',
            width: '100%',
            justifyContent: 'space-between',
            backgroundColor: 'white',
            minHeight: 64,
            borderTopColor: '#dedede',
            borderTopWidth: 1,

        },
        add_to_cart_button:
        {
            minWidth: 200,
            minHeight: 48,
            borderRadius: 10,
            backgroundColor: '#007aff',
            alignItems: 'center',
            justifyContent: 'center',
            alignSelf: 'center',
        },
        price_text:
        {
            fontWeight: '700',
            fontSize: 24,
            color: '#007aff',
            paddingTop: 10,
            paddingBottom: 10
        },
        description_text:
        {
            fontWeight: '700',
        },
        back_button:
        {
            position: 'absolute',
            top: StatusBar.currentHeight + 20,
            left: 10,
            width: 40,
            height: 40,
            borderRadius: 20,
            borderWidth: 1,
            borderColor: '#dedede',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 100,
            backgroundColor: 'white',
            shadowColor: "#000",
            shadowOffset: {
                width: 0,
                height: 3,
            },
            shadowOpacity: 0.27,
            shadowRadius: 4.65,
            elevation: 6,
        },
        like_button:
        {
            width: 40,
            height: 40,
            borderRadius: 20,
            position: 'absolute',
            top: StatusBar.currentHeight + 20,
            right: 10,
            borderWidth: 1,
            borderColor: '#dedede',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 100,
            backgroundColor: 'white',
            shadowColor: "#000",
            shadowOffset: {
                width: 0,
                height: 3,
            },
            shadowOpacity: 0.27,
            shadowRadius: 4.65,
            elevation: 6,
        }
    }
)

export default ProductPage;