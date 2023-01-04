import { useEffect, useState, useCallback } from 'react';
import { Text, View, StyleSheet, Image, Button, TouchableHighlight, TextInput } from 'react-native';
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

    const randomCards = async () => {
        setPagintion([])
        let cards = []
        for (let index = 0; index < 9; index++) {
            const response = await fetch('https://db.ygoprodeck.com/api/v7/randomcard.php');
            const resultat = await response.json();
            cards.push(resultat)
        }
        setPagintion(cards)
    }

    const upAndDown = async (value) => {
        if (value === "up") {
            await displayCard(initial + 9, last + 9)
        } else {
            if (initial >= 9) {
                await displayCard(initial - 9, last - 9)
            }
        }
    }

    const detailCard = (id) => {
        let detail = []
        const card = pagination.find(element => element.id === id)
        detail.push(card)
        setCardDetail(detail)
    }

    const onChangeText = async (e) => {
        setPagintion([])
        const response = await fetch('https://db.ygoprodeck.com/api/v7/cardinfo.php?name=' + e);
        const resultat = await response.json();
        setPagintion(resultat.data)
    }

    const debounce = (func) => {
        let timer;
        return function (...args) {
          const context = this;
          if (timer) clearTimeout(timer);
          timer = setTimeout(() => {
            timer = null;
            func.apply(context, args);
          }, 2000);
        };
      };
    
    
      const optimizedFn = useCallback(debounce(onChangeText), []);

    useEffect(() => {
        displayCard(initial, last)
    }, []);

    return (
        <View>
            {cardDetail.length < 1 && pagination.length > 1 && <TextInput placeholder={"Name card"} style={styles.input} onChangeText={text => optimizedFn(text)}></TextInput>}
            <View style={styles.container}>
                {pagination.length < 1 &&
                    <View style={styles.centerElementScreen}>
                        <Text >Loading</Text>
                    </View>
                }
                {cardDetail.length > 0 && <Button title='retour' onPress={() => setCardDetail([])} />}
                {cardDetail.length < 1  && pagination.map((element, i) =>
                    <View key={i}>
                        {Object.values(element.card_images).length > 1 
                        ?
                        <View style={styles.container}>
                        {Object.values(element.card_images).map((image, i) => (
                            <TouchableHighlight key={i} onPress={() => detailCard(element.id)}>
                                <Image style={styles.stretch} source={{ uri: image.image_url_small }} key={i}></Image>
                            </TouchableHighlight >
                        ))}
                        </View>
                        :
                        Object.values(element.card_images).map((image, i) => (
                            <TouchableHighlight key={i} onPress={() => detailCard(element.id)}>
                                <Image style={styles.stretch} source={{ uri: image.image_url_small }} key={i}></Image>
                            </TouchableHighlight >
                        ))}
                    </View>
                )}
                {pagination.length > 8 && cardDetail.length < 1 &&
                    <View style={styles.containerPagination}>
                        <View style={styles.buttonCenter}>
                            <Button title='-' onPress={() => upAndDown("down")} />
                        </View>
                        <View style={styles.buttonCenter}>
                            <Button title='random' onPress={() => randomCards("random")} />
                        </View>
                        <View style={styles.buttonCenter}>
                            <Button title='+' onPress={() => upAndDown("up")} />
                        </View>
                    </View>
                }
                {cardDetail.length > 0 && <YugiohDetailScreen cardDetail={cardDetail} />}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        
        flexDirection: "row",
        flexWrap: "wrap",
        marginLeft : 15
    },
    stretch: {
        width: 100,
        height: 150,
        resizeMode: 'stretch',
        marginTop: 10,
        marginRight: 10,
        marginLeft : 10
    },
    containerPagination: {
        flexDirection: 'row',
        justifyContent: 'center',
        width: "90%",
        margin: 10
    },
    centerElementScreen: {
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center',
        flexDirection: 'column',
        marginTop: 250
    },
    buttonCenter: {
        width: "30%",
        marginRight: 10,
        marginLeft : 10
    },
    input :{
        backgroundColor: "white",
        borderWidth: 2,
        padding : 5,
        marginRight: 25,
        marginLeft : 25,
        marginTop : 10
    }
});