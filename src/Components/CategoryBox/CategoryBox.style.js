import { StyleSheet } from "react-native";

export default StyleSheet.create(
    {
        container:
        {
            flex: 1,
            width: '100%',
            minHeight: 72,
            backgroundColor: 'white',
            borderWidth: 1,
            borderColor: '#dedede',
            borderRadius: 10,
            flexDirection: 'row',
            padding: 10,
            alignItems: 'center',
            marginBottom: 10,
        },
        image:
        {
            width: 64,
            height: 64,
            borderRadius: 32,
            marginRight: 10,
            alignItems: 'center',
            justifyContent: 'center'
        },
        category_title:
        {
            fontWeight: '700',
            textAlignVertical: 'center',
            paddingLeft: 24,
        },
        slice_title:
        {
            fontWeight: '500',
            fontSize: 20,
            color: 'white'
        },
        colored_area:
        {
            minHeight: 72,
            width: 24,
            borderBottomLeftRadius: 10,
            borderTopLeftRadius: 10,
            position: 'absolute',
            left: 0,
            top: 0,
        }
    }
)