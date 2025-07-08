import Animated, { Extrapolation, interpolate, type SharedValue, useAnimatedStyle } from 'react-native-reanimated'
import { ITEM_BORDER_RADIUS, ITEM_HEIGHT, ITEM_WIDTH } from '@/constants/sizes'
import { View } from 'react-native'

interface Props {
  imageUri: any
  index: number
  scrollX: SharedValue<number>
}

export function WallpaperItem({ imageUri, index, scrollX }: Props) {
  const animatedImageStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          scale: interpolate(scrollX.value, [index - 1, index, index + 1], [1.4, 1, 1.4]),
        },
        {
          rotate: `${interpolate(scrollX.value, [index - 1, index, index + 1], [10, 0, -10], Extrapolation.CLAMP)}deg`,
        },
      ],
    }
  })

  return (
    <View
      style={{
        width: ITEM_WIDTH,
        height: ITEM_HEIGHT,
        borderRadius: ITEM_BORDER_RADIUS,
        overflow: 'hidden',
      }}
    >
      <Animated.Image source={{ uri: imageUri }} style={[animatedImageStyle, { flex: 1 }]} />
    </View>
  )
}
