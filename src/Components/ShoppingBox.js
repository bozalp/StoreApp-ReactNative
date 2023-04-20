import { TouchableOpacity, StyleSheet, Text, View, Image, ActivityIndicator } from "react-native"
import axios from "axios"
import { useState, useEffect } from "react"
import RatingStars from '../Components/RatingStars';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
const productsURL = 'https://fakestoreapi.com/products/';
import { useSelector, useDispatch } from 'react-redux';
import { deleteFromShoppingCart } from '../ReduxToolkit/shoppingCartReducer';

const ShoppingBox = ({ navigation, productId }) => {
    const [products, setProducts] = useState(null);
    const [isLoading, setLoading] = useState(false);

    const dispatch = useDispatch();

    const fetchProducts = async () => {
        try {
            const response = await axios.get(productsURL + productId);
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

    function DeleteToShoppingCart() {
        console.log("product has been successfully removed to the shopping cart");
        dispatch(deleteFromShoppingCart(productId));
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
            <View style={styles.trash_button}>
                <TouchableOpacity activeOpacity={0.7} onPress={DeleteToShoppingCart}>
                    <MaterialCommunityIcons name={'trash-can-outline'} color={'#007aff'} size={24} />
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
                            {/* <View>
                                <TouchableOpacity activeOpacity={0.7} style={styles.add_to_cart_button} onPress={AddToShoppingCart}>
                                    <Text style={{ color: 'white' }}>
                                        Add to Cart
                                    </Text>
                                </TouchableOpacity>
                            </View>
                    */}
                        </View>
                    </TouchableOpacity>
            }
        </View>
    )
}

const styles = StyleSheet.create(
    {
        container:
        {
            flex: 1,
            flexDirection: 'row',
            height: 180,
            marginBottom: 5,
            padding: 10,
            borderRadius: 10,
            borderWidth: 1,
            borderColor: '#dedede'
        },
        product_image:
        {
            width: 120,
            borderRadius: 10,
            resizeMode: 'center',
            marginRight: 20,
        },
        price_text:
        {
            fontSize: 18,
            color: '#007aff',
            fontWeight: '700',
        },
        title:
        {
            fontWeight: 'bold',
            fontSize: 16,
        },
        trash_button:
        {
            width: 40,
            height: 40,
            borderRadius: 20,
            position: 'absolute',
            top: 10,
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

export default ShoppingBox;