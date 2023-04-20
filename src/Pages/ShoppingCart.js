import { StyleSheet, View, Text, SafeAreaView, Platform, StatusBar, FlatList, TouchableOpacity } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import ShoppingBox from '../Components/ShoppingBox';
import { useEffect } from 'react';

const ShoppingCart = ({ navigation }) => {
    const shoppingList = useSelector((state) => state.shoppingCarts);

    useEffect(() => {

        FullnessControl();
    }, [shoppingList]);

    function Total() {
        console.log(shoppingList.length);
        for (let i = 0; i < shoppingList.length; i++) {
            console.log(">" + shoppingList[i]);
            //serverdan veri çekip onun fiyat değerini almam gerek. burada sadece id aliyorum
        }
    }

    function FullnessControl(item) {
        console.log(">>" + item.length);
        if (shoppingList.length !== 0)
            return <ShoppingBox navigation={navigation} productId={item} />
        else
            return <Text>Sepet Boş</Text>
    }

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>
                Shopping Cart
            </Text>
            <View style={styles.complete_shopping_area}>
                <Text style={styles.price_text}>
                    total
                </Text>
                <TouchableOpacity activeOpacity={0.7} style={styles.add_to_cart_button} onPress={null}>
                    <Text style={{ color: 'white', fontSize: 20 }}>
                        Add to Cart
                    </Text>
                </TouchableOpacity>
            </View>
            <FlatList
                data={shoppingList}
                renderItem={({ item }) =>
                    <ShoppingBox navigation={navigation} productId={item} />
                }
                style={styles.list}
                showsVerticalScrollIndicator={false}
            />
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