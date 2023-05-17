import { View, Text, Image } from 'react-native';
import { useEffect } from 'react';
import styles from './Splash.style';
const Splash = ({ navigation }) => {

    function GoHomePage() {
        navigation.navigate('MyTabs');
    }

    useEffect(() => {
        setTimeout(() => {
            GoHomePage();
        }, 1500);
    }, []);

    return (
        <View style={styles.container}>
            <Image
                style={styles.logo}
                source={require('../../../assets/store-logo.png')}
            />
            <Text style={styles.title}>
                Best Store App
            </Text>
            <Text style={styles.by}>
                by bozalp
            </Text>
        </View>
    )
}

export default Splash;