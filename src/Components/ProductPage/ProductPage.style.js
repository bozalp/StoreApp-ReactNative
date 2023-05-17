import { StyleSheet, StatusBar } from "react-native";

export default StyleSheet.create(
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
);