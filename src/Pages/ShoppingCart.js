import { StyleSheet, View, Text, SafeAreaView, Platform, StatusBar, FlatList, TouchableOpacity } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import ShoppingBox from '../Components/ShoppingBox';
import { useEffect, useState } from 'react';
import axios from "axios"
const productsURL = 'https://fakestoreapi.com/products/';

const ShoppingCart = ({ navigation }) => {
    const shoppingList = useSelector((state) => state.shoppingCarts);
    const [isEmpty, setEmpty] = useState(true);
    const [prices, setPrices] = useState(true);
    const [totalPrice, setTotal] = useState(0)

    useEffect(() => {
        FullnessControl(shoppingList);
        fetchProducts();
    }, [shoppingList]);



    const fetchProducts = async () => {
        try {
            let total = 0;
            for (let i = 0; i < shoppingList.length; i++) {
                const response = await axios.get(productsURL + shoppingList[i]);
                setPrices(response.data);
                total += response.data.price;
            }
            total = total.toFixed(2);
            setTotal(total);
        }
        catch (error) {
            console.log(error);
        }
    };

    function FullnessControl(item) {
        if (item.length !== 0) {
            setEmpty(false);
        }
        else
            setEmpty(true);
    }

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>
                Shopping Cart
            </Text>
            {
                !isEmpty &&
                <View style={styles.complete_shopping_area}>
                    <View style={styles.price_text}>
                        <Text style={{ fontSize: 16, }}>
                            Cart Subtotal:&nbsp;
                        </Text>
                        <Text style={{ fontSize: 16, fontWeight: '700' }}>
                            ${totalPrice}
                        </Text>
                    </View>
                    <TouchableOpacity activeOpacity={0.7} style={styles.add_to_cart_button} onPress={null}>
                        <Text style={{ color: 'white', fontSize: 20 }}>
                            Checkout
                        </Text>
                    </TouchableOpacity>
                </View>
            }
            {
                isEmpty ?
                    <Text style={styles.empty_text}>
                        Cart is empty
                    </Text>
                    :
                    <FlatList
                        data={shoppingList}
                        renderItem={({ item }) =>
                            <ShoppingBox navigation={navigation} productId={item} />
                        }
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
        empty_text:
        {
            fontSize: 18,
            fontWeight: '700',
            textAlign: 'center',
            marginTop: 20,
        },
        price_text:
        {
            flexDirection: 'row',
        },
        list:
        {
            flex: 1,
        },
        complete_shopping_area:
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
            width: 160,
            minHeight: 48,
            borderRadius: 10,
            backgroundColor: '#007aff',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: 10
        },
    }
);

export default ShoppingCart;