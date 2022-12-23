import { Text, View, StyleSheet, Image } from 'react-native';
import pokemon from 'pokemontcgsdk'
import { useEffect, useState } from 'react';

export const ApiPokemonTGC = () => {

    const [cards, setCards] = useState([])
    let start = 1
    let end = 20

    const ApiFetch = async (start, end) => {
        pokemon.configure({ apiKey: '' })
        let cards = []
        for (start; start < end; start++) {
            let test = await pokemon.card.find("base1-" + start)
            cards.push(test)

        }

        end = start + end
        setCards(cards)
        console.log(cards[0].name)
    }

    useEffect(() => {
        ApiFetch(start, end)
    }, [])


    return (
        <View>
            {cards.map((card, i) =>
                <View style={styles.container} key={i}>
                    <Image style={styles.stretch} source={{ uri: card.images.large }} />
                    <View>{Object.keys(card.tcgplayer.prices).map((name, i) =>
                        <View key={i}>
                            <Text>{console.log(card)}</Text>
                            <Text key={i}>Name : {card.name}</Text>
                            <Text>{card.tcgplayer.prices[name].high.length < 1 ? "" : "high : " + card.tcgplayer.prices[name].high} €</Text>
                            <Text>{card.tcgplayer.prices[name].mid.length < 1 ? "" : "mid : " + card.tcgplayer.prices[name].mid} €</Text>
                            <Text>{card.tcgplayer.prices[name].low.length < 1 ? "" : "low : " + card.tcgplayer.prices[name].low} €</Text>
                            <Text>{card.tcgplayer.prices[name].market.length < 1 ? "" : "market : " + card.tcgplayer.prices[name].market} €</Text>
                            {/* <Text>{card.tcgplayer.url}</Text> */}
                            <Text>rarity : {card.rarity}</Text>
                        </View>
                    )}
                    </View>
                </View>
            )}
        </View>
    )
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