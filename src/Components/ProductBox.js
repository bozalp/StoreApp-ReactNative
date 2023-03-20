import { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import RatingStars from './RatingStars';

const ProductBox = ({ products, navigation }) => {
    const [isFavorite, setFavorite] = useState(false);

    function GetTitle(title) {
        if (title.length > 20)
            return title.slice(0, 20) + "..."
        else
            return title;
    }

    function AddToFavorite() {
        setFavorite(fav => !fav);
    }

    function GoToProductPage(productId) {
        navigation.navigate('ProductPage', { productId });
    }

    return (
        <TouchableOpacity style={styles.container} activeOpacity={0.7} onPress={() => GoToProductPage(products.id)}>
            <Image style={styles.product_image} source={{
                uri: products.image
            }} />
            <Text>
                {GetTitle(products.title)}
            </Text>
            <RatingStars rate={products.rating.rate} count={products.rating.count} />
            <Text style={styles.price_text}>
                ${products.price}
            </Text>

            <TouchableOpacity activeOpacity={0.7} style={styles.like_button} onPress={AddToFavorite}>
                <MaterialCommunityIcons name={isFavorite ? 'heart' : 'heart-outline'} color={isFavorite ? '#007aff' : '#999'} size={24} />
            </TouchableOpacity>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create(
    {
        container:
        {
            flex: 0.5,
            padding: 10,
            borderWidth: 1,
            margin: 5,
            borderRadius: 10,
            borderColor: '#dedede',
            minHeight: 250,
        },
        product_image:
        {
            flex: 1,
            resizeMode: 'center',
            marginBottom: 10,
            maxHeight: 180,
        },
        zero_stars:
        {
            width: 80,
            height: 15,
            resizeMode: 'contain',
            marginRight: 5
        },
        five_stars:
        {
            width: '50%',
            height: 15,
            resizeMode: 'contain',
            position: 'absolute',
        },
        price_text:
        {
            fontSize: 16,
            color: '#007aff',
            fontWeight: '700',
        },
        like_button:
        {
            width: 36,
            height: 36,
            borderRadius: 18,
            position: 'absolute',
            top: 5,
            right: 5,
            borderWidth: 1,
            borderColor: '#dedede',
            alignItems: 'center',
            justifyContent: 'center'
        }
    }
);

export default ProductBox;