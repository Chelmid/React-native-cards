import { useEffect, useState } from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

export default function ApiYugioh() {

    const [pagination, setPagintion] = useState([])
    let cards = []
    const test = async (start, end) => {
        const response = await fetch('https://db.ygoprodeck.com/api/v7/cardinfo.php');
        const resultat = await response.json();
        for (start; start < end; start++) {
            cards.push(resultat.data[start])
        }
        setPagintion(cards)
    }

    useEffect(() => {
        test(0, 10)
    }, []);

    return (
        <View style={styles.container}>
            {pagination.length === 0 && <Text>Loading</Text>}
            {pagination.map((element, i) =>
                <View key={i}>
                    <Text>{element.id}</Text>
                    {Object.values(element.card_images).map((image, i) => (
                        <View key={i}>
                            <Image style={styles.stretch} source={{ uri: image.image_url_small }} key={i}></Image>
                        </View>
                    ))}
                </View>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        margin: 10,
        flexDirection: "row",
        flexWrap: "wrap",
    },
    stretch: {
        width: 100,
        height: 150,
        resizeMode: 'stretch'
    }
});