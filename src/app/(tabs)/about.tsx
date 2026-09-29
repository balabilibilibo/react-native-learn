import { Link } from 'expo-router'
import { StyleSheet, Text, View } from 'react-native'
export default function About() {
  return (
    <View style={styles.container}>
      <Link style={styles.button} href='/'>
        Go back home
      </Link>
      <Text style={styles.text}>About</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#fff',
  },
  button: {
    fontSize: 20,
    textDecorationLine: 'underline',
    color: '#fff',
  },
})
