import { TouchableOpacity, StyleSheet, Text, View, Image, ActivityIndicator } from "react-native"
import axios from "axios"
import { useState, useEffect } from "react"
import RatingStars from '../Components/RatingStars';

const productsURL = 'https://fakestoreapi.com/products/';

const FavoritesBox = ({ productId }) => {
    const [products, setProducts] = useState(null);
    const [isLoading, setLoading] = useState(false);

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

    function GoToProduct() {

    }

    return (
        <View>
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
                                    {products.title}
                                </Text>
                                <RatingStars rate={products.rating.rate} count={products.rating.count} />
                            </View>
                            <View>
                                <TouchableOpacity activeOpacity={0.7} style={styles.add_to_cart_button}>
                                    <Text style={{color:'white'}}>
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
            marginRight: 10,
        },
        title:
        {
            fontWeight: 'bold',
            fontSize: 16,
        },
        add_to_cart_button:
        {
            width: 160,
            minHeight: 48,
            borderRadius: 10,
            backgroundColor: '#007aff',
            alignItems: 'center',
            justifyContent: 'center',
        },
    }
)

export default FavoritesBox;