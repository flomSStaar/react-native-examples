import Animated, { interpolate, type SharedValue, useAnimatedStyle } from 'react-native-reanimated'
import { StyleSheet } from 'react-native'

interface Props {
  imageUri: string
  index: number
  scrollX: SharedValue<number>
}

export function WallpaperBackdrop({ imageUri, scrollX, index }: Props) {
  const animatedStyle = useAnimatedStyle(() => {
    return {
      opacity: interpolate(scrollX.value, [index - 1, index, index + 1], [0, 1, 0]),
    }
  })

  return (
    <Animated.Image source={{ uri: imageUri }} style={[animatedStyle, StyleSheet.absoluteFillObject]} blurRadius={60} />
  )
}
