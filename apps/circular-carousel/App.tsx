import { StatusBar } from 'expo-status-bar'
import { StyleSheet, View } from 'react-native'
import { CircularCarousel } from '@/components/CircularCarousel'

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <CircularCarousel />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})
