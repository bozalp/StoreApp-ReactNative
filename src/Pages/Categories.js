import { StyleSheet, View, Text, SafeAreaView, ActivityIndicator, StatusBar, FlatList } from 'react-native';
import { useState, useEffect } from 'react';
import CategoryBox from '../Components/CategoryBox';
import axios from 'axios';

const categoriesUrl = 'https://fakestoreapi.com/products/categories';

const Categories = ({ navigation }) => {
    const [categories, setCategories] = useState(null);
    const [isLoading, setLoading] = useState(false);

    const fetchCategories = async () => {
        try {
            const response = await axios.get(categoriesUrl);
            setCategories(response.data);
            console.log(response.data)
            setLoading(true);
        }
        catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchCategories();
    }, []);


    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>
                Categories
            </Text>
            {
                !isLoading ?
                    <ActivityIndicator />
                    :
                    <FlatList
                        data={categories}
                        renderItem={({ item }) =>
                            <CategoryBox categoryTitle={item} />
                        }
                    />
            }

        </SafeAreaView>
    )
}

const styles = StyleSheet.create(
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

export default Categories;