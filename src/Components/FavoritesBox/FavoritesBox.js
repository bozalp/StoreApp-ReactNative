import { TouchableOpacity, StyleSheet, Text, View, Image, ActivityIndicator } from "react-native"
import axios from "axios"
import { useState, useEffect } from "react"
import RatingStars from '../RatingStars';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
const productsURL = 'https://fakestoreapi.com/products/';
import { useSelector, useDispatch } from 'react-redux';
import { addToFavorites, deleteFromFavorites } from '../../ReduxToolkit/favoritesReducer';
import { addToShoppingCart } from '../../ReduxToolkit/shoppingCartReducer';

import styles from './FavoritesBox.style';

const FavoritesBox = ({ navigation, productId }) => {
    const [products, setProducts] = useState(null);
    const [isLoading, setLoading] = useState(false);
    const [isFavorite, setFavorite] = useState(false);

    const favorites = useSelector((state) => state.favorites);
    const dispatch = useDispatch();

    const fetchProducts = async () => {
        try {
            const response = await axios.get(productsURL + productId);
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

    function GoToProduct() {
        navigation.navigate('ProductPage', { productId });
    }

    function GetTitle(title) {
        if (title.length > 16)
            return title.slice(0, 16) + "...";
        else
            return title;
    }

    return (
        <View>
            <View style={styles.like_button}>
                <TouchableOpacity activeOpacity={0.7} onPress={AddToFavorite}>
                    <MaterialCommunityIcons name={isFavorite ? 'heart' : 'heart-outline'} color={isFavorite ? '#007aff' : '#999'} size={24} />
                </TouchableOpacity>
            </View>
            {
                !isLoading ?
                    <ActivityIndicator />
                    :
                    <TouchableOpacity style={styles.container} activeOpacity={0.7} onPress={GoToProduct}>
                        <Image style={styles.product_image} source={{
                            uri: products.image
                        }} />
                        <View style={{ justifyContent: 'space-between' }}>
                            <View>
                                <Text style={styles.title}>
                                    {GetTitle(products.title)}
                                </Text>
                                <RatingStars rate={products.rating.rate} count={products.rating.count} />
                                <Text style={styles.price_text}>
                                    ${products.price}
                                </Text>
                            </View>
                            <View>
                                <TouchableOpacity activeOpacity={0.7} style={styles.add_to_cart_button} onPress={AddToShoppingCart}>
                                    <Text style={{ color: 'white' }}>
                                        Add to Cart
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </TouchableOpacity>
            }
        </View>
    )
}

export default FavoritesBox;