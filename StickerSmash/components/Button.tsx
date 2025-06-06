import { StyleSheet, Text, View, Pressable } from 'react-native'
import FontAwesome from '@expo/vector-icons/FontAwesome'

type Props = {
    label: string;
    theme?: 'primary';
    onPress?: () => void;
}

export default function Button({ label, theme, onPress }: Props) {
  if (theme === 'primary') {
   return (
     <View style={[
       styles.buttonContainer,
       {borderWidth: 4, borderColor: '#8473FA', borderRadius: 18}
     ]}>
        <Pressable style={[ styles.button, { backgroundColor: '#414DF2'}]}
         onPress={onPress}>
         <FontAwesome name='cloud-upload' size={18} color='#fff' style={{ paddingRight: 8 }} />
         <Text style={[styles.buttonLabel, { color: '#fff'}]}>{label}</Text>
        </Pressable>
     </View>
    ) 
  }
  return (
    <View style={styles.buttonContainer}>
        <Pressable style={styles.button}  onPress={onPress}>
         <Text style={styles.buttonLabel}>{label}</Text>
        </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
    buttonContainer: {
      width: 320,
      height: 68,
      marginHorizontal: 20,
      alignItems: 'center',
      justifyContent: 'center',
      padding: 3,
    },
    button: {
      borderRadius: 10,
      width: '100%',
      height: '100%',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'row',
    },
    buttonLabel: {
      color: '#fff',
      fontSize: 16,
    },
});
