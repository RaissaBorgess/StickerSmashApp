import { StyleSheet, Text, Pressable } from 'react-native'
import React from 'react'
import MaterialIcons from '@expo/vector-icons/MaterialIcons'

type Props = {
    icon: keyof typeof MaterialIcons.glyphMap;
    label: string;
    onPress: () => void;
}

export default function IconButton({ icon, label, onPress }: Props) {
  return (
      <Pressable style={styles.iconButton} onPress={onPress}>
        <MaterialIcons name={icon} size={24} color='#414DF2' />
        <Text style={styles.iconButtonLabel}>{label}</Text>
      </Pressable>
  )
}

const styles = StyleSheet.create({
    iconButton: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    iconButtonLabel: {
        color: '#414DF2',
        marginTop: 12,
    }
})