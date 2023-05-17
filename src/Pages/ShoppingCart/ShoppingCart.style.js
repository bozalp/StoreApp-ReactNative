import { StyleSheet, StatusBar } from "react-native";

export default StyleSheet.create(
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