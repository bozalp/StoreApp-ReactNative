import { StyleSheet, StatusBar } from "react-native";

export default StyleSheet.create(
    {
        container:
        {
            flex: 1,
            backgroundColor: 'white',
            //paddingTop: Platform.OS === 'android' ? 36 : 0,
            paddingTop: StatusBar.currentHeight,
            padding: 10,
        },
        header:
        {
            flexDirection: 'row',
            flex: 1,
            padding: 7,
            alignItems: 'center',
        },
        logo:
        {
            width: 40,
            height: 40,
            marginRight: 10,
        },
        textbox:
        {
            flex: 1,
            height: 42,
            borderWidth: 1,
            borderRadius: 10,
            borderColor: '#999',
            padding: 5
        },
        search_button:
        {
            width: 42,
            height: 42,
            position: 'absolute',
            right: 10,
            alignItems: 'center',
            justifyContent: 'center'
        }
    }
);