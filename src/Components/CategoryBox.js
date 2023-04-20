import { View, TouchableOpacity, Text, Image, StyleSheet } from 'react-native';

const CategoryBox = ({ categoryTitle }) => {

    function BeautifyTitle(title) {
        return title.charAt(0).toUpperCase() + title.slice(1);
    }

    function SliceTitle(title) {
        randomColor();
        return title.slice(0, 2).toUpperCase()
    }

    function randomColor() {
        let x = Math.floor(Math.random() * 16777215).toString(16)
        return x;
    }

    return (
        <TouchableOpacity activeOpacity={0.7} style={styles.container}>
            {/*<View style={[{ backgroundColor: '#' + randomColor() }, styles.image]}>
                <Text style={styles.slice_title}>
                    {SliceTitle(categoryTitle)}
                </Text>
             </View>*/}
            <View style={[{ backgroundColor: '#' + randomColor() }, styles.colored_area]} />
            <Text style={styles.category_title}>
                {BeautifyTitle(categoryTitle)}
            </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create(
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

export default CategoryBox;