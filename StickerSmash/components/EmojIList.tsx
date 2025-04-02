import { useState } from 'react'
import { StyleSheet, FlatList, Platform, Pressable} from 'react-native'
import { Image, type ImageSource } from 'expo-image'

type Props = {
    onSelect: (image: ImageSource) => void;
    onCloseModal: () => void;
}

export default function EmojIList() {
  return (
    <View>
      <Text>EmojIList</Text>
    </View>
  )
}

const styles = StyleSheet.create({})