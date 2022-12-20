import { Text, View, StyleSheet, Image } from 'react-native';

const YugiohDetailScreen = ( props ) => {

    const {cardDetail} = props

    return(
        <>
            {cardDetail[0].card_images.map((image,i) =>  <Image style={styles.stretch} source={{ uri: image.image_url }} key={i}></Image>)}
            <Text>card id : {cardDetail[0].id}</Text>
            <Text>card name : {cardDetail[0].name}</Text>
            <Text>card atk : {cardDetail[0].atk}</Text>
            <Text>card def : {cardDetail[0].def}</Text>
            <Text>card description : {cardDetail[0].desc}</Text>
            {cardDetail[0].card_prices.map((price,i) => 
                <View key={i}>
                    {Object.keys(price).map((priceName, i) => <Text key={i}>{priceName} : {price[priceName]} € </Text>)}
                </View>
            )}
            <Text>card type : {cardDetail[0].type}</Text>
            <Text>card race : {cardDetail[0].race}</Text>
        </>
    )
}

const styles = StyleSheet.create({
    stretch: {
        width: 218 * 1.5,
        height: 286 * 1.5,
        resizeMode: 'stretch',
        margin: 10
    },
});

export default YugiohDetailScreen