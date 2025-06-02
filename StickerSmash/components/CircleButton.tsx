import { StyleSheet, View, Pressable } from 'react-native'
import React from 'react'
import MaterialIcons from '@expo/vector-icons/MaterialIcons'

type Props = {
    onPress: () => void;
}

export default function CircleButton( {onPress }: Props) {
  return (
    <View style={styles.circleButtonContainer}>
      <Pressable style={styles.circleButton} onPress={onPress}>
        <MaterialIcons name='add' size={38} color='#BBA6F5' />
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
    circleButtonContainer: {
        width: 84,
        height: 84,
        marginHorizontal: 60,
        borderWidth: 4,
        borderColor: '#BBA6F5',
        padding: 3,
        borderRadius: 42,
    },
    circleButton: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 42,
        backgroundColor: '#414DF2'
    }
})