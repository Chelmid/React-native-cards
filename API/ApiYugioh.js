import { useEffect, useState } from 'react';
import { Text, View, StyleSheet, Image, Button, TouchableHighlight } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import YugiohDetailScreen from '../client/screens/YugiohDetailScreen';

export default function ApiYugioh(props) {

    const [pagination, setPagintion] = useState([])
    const [initial, setInitial] = useState(0)
    const [last, setLast] = useState(9)
    const [cardDetail, setCardDetail] = useState([])
    const navigation = useNavigation()

    const displayCard = async (start, end) => {
        setInitial(start)
        setLast(end)
        setPagintion([])
        let cards = []
        const response = await fetch('https://db.ygoprodeck.com/api/v7/cardinfo.php');
        const resultat = await response.json();
        for (start; start < end; start++) {
            cards.push(resultat.data[start])
        }

        setPagintion(cards)
    }

    const upAndDown = async (value) => {
        if (value === "up") {
            await displayCard(initial + 9, last + 9)
        } else {
            await displayCard(initial - 9, last - 9)
        }
    }

    const test = (id) => {
        let detail = []
        const card = pagination.find(element => element.id === id)
        detail.push(card)
        setCardDetail(detail)
    }

    useEffect(() => {
        displayCard(initial, last)
    }, []);

    return (
        <View style={styles.container}>
            {pagination.length < 8 &&
                <View style={styles.centerElementScreen}>
                    <Text >Loading</Text>
                </View>
            }
            {pagination.length > 8 && cardDetail.length > 0 && <Button title='retour' onPress={() => setCardDetail([])} />}
            {cardDetail.length < 1 && pagination.length > 8 && pagination.map((element, i) =>
                <View key={i}>
                    {Object.values(element.card_images).map((image, i) => (
                        <TouchableHighlight  key={i} onPress={() => test(element.id)}>
                            <Image style={styles.stretch} source={{ uri: image.image_url_small }} key={i}></Image>
                        </TouchableHighlight >
                    ))}
                </View>
            )}
            {pagination.length > 8 && cardDetail.length < 1 &&
                <View style={styles.containerPagination}>
                    <Button title='-' onPress={() => upAndDown("down")} />
                    <Button title='+' onPress={() => upAndDown("up")} />
                </View>
            }
            {cardDetail.length > 0 && <YugiohDetailScreen cardDetail={cardDetail} /> }
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
        resizeMode: 'stretch',
        margin: 10
    },
    containerPagination: {
        flexDirection: "row",
        flexWrap: "wrap",
    },
    centerElementScreen: {
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center',
        flexDirection: 'column',
        marginTop: 250
    }
});