import { StatusBar } from 'expo-status-bar'
import { StyleSheet, View } from 'react-native'
import { WallpaperCarousel } from '@/components/WallpaperCarousel'

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <WallpaperCarousel />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})
