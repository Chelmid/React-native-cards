import { StyleSheet, Text, View, Button, Image, TouchableOpacity } from 'react-native';

export default function SignInButtom(props) {

  return (
    <View style={props.container} >
        <TouchableOpacity
            styles={styles.button}
            onPress={props.onPress}>
            <Image
                source={props.src}
                style={props.image}
            />
        </TouchableOpacity>
        <Button
            styles={styles.button}
            //disabled={!props.request}
            title={props.title}
            onPress={props.onPress}
        />
    </View>
  );
}

const styles = StyleSheet.create({
    button : {
        borderRadius:10
    }
});