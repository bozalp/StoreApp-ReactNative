import { View, Text, StyleSheet } from 'react-native';
import { useEffect } from 'react';

const Splash = ({ navigation }) => {

    function GoHomePage() {
        navigation.navigate('MyTabs');
    }

    useEffect(() => {
        setTimeout(() => {
            GoHomePage();
        }, 1000);
    }
        , []);
    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                Best Store App
            </Text>
        </View>
    )
}

const styles = StyleSheet.create(
    {
        container:
        {
            flex: 1,
            backgroundColor:'white',
            justifyContent: 'center',
            alignItems: 'center'
        },
        title:
        {
            fontSize: 28,
            fontWeight: 'bold'
        }
    }
);

export default Splash;