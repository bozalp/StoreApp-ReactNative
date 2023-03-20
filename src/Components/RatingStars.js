import { View, Text, StyleSheet } from 'react-native';
import { Rating } from 'react-native-ratings';

const RatingStars = ({ rate, count }) => {
    return (
        <View style={styles.rating}>
            <Rating
                type='star'
                ratingCount={5}
                startingValue={rate}
                imageSize={16}
                readonly
            />
            <Text style={{ marginLeft: 5 }}>
                ({count})
            </Text>
        </View>
    )
}

const styles = StyleSheet.create(
    {
        rating:
        {
            flexDirection: 'row',
            paddingTop: 5,
        },
    }
)

export default RatingStars;