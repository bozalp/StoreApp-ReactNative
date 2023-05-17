import { View, TouchableOpacity, Text, Image, StyleSheet } from 'react-native';
import styles from './CategoryBox.style';

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
            <View style={[{ backgroundColor: '#' + randomColor() }, styles.colored_area]} />
            <Text style={styles.category_title}>
                {BeautifyTitle(categoryTitle)}
            </Text>
        </TouchableOpacity>
    )
}

export default CategoryBox;