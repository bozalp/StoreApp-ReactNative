import { StyleSheet, StatusBar } from "react-native";

export default StyleSheet.create(
    {
        container:
        {
            flex: 1,
            backgroundColor: 'white',
            paddingTop: StatusBar.currentHeight,
            padding: 10
        },
        title:
        {
            fontWeight: 'bold',
            padding: 10,
            fontSize: 16
        }
    }
);