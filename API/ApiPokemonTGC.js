import { Text, View, StyleSheet } from 'react-native';
import pokemon from 'pokemontcgsdk'
import { useEffect, useState } from 'react';

export const ApiPokemonTGC = () => {

   const [cards, setCards] = useState([])
   let start = 1
   let end = 10

    const ApiFetch = async (start, end) => {
        pokemon.configure({apiKey: ''})
        let cards = []
        for (start; start < end; start++) {
            let test = await pokemon.card.find("base2-" + start)
            cards.push(test)
            
        }
        
        end = start + end
        setCards(cards)
        console.log(cards[0].name)
    }

    useEffect(() => {
        ApiFetch(start, end)
    },[])
    

    return (
        <View>
            {cards.map((card, i) => <Text key={i}>{card.name}</Text>)}
        </View>
    )
}