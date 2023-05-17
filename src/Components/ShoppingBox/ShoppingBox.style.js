import { StyleSheet, StatusBar } from "react-native";

export default StyleSheet.create(
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
);