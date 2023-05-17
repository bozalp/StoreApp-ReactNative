import { StyleSheet } from "react-native";

export default StyleSheet.create(
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