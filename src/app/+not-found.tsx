import { Link, Stack } from 'expo-router'
import { StyleSheet, Text, View } from 'react-native'

export default function NotFoundScreen() {
  return (
    <Stack.Screen options={{ title: '404' }}>
      <View style={styles.container}>
        <Link style={styles.button} href='/'>
          Go back home
        </Link>
        <Text style={styles.text}>Not Found</Text>
      </View>
    </Stack.Screen>
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
