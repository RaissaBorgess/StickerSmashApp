import { Pressable, StyleSheet, Text, View } from 'react-native'

type Props= {
    label: string;
}

export default function Button({label}: Props) {
  return (
    <View style={styles.buttonContainer}>
        <Pressable style={styles.button} onPress={() => alert("AHHHHHHHHHHHH")}>
        <Text style={styles.buttonLabel}>{label}</Text>
        </Pressable>
     
    </View>
  )
}

const styles = StyleSheet.create({
    buttonContainer: {

    },
    button: {

    },
    buttonLabel: {

    },
});
