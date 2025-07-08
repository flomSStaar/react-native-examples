import { Image } from 'react-native'
import { ITEM_BORDER_WIDTH, ITEM_RADIUS, ITEM_SIZE } from '@/constants/sizes'
import Animated, { interpolate, interpolateColor, type SharedValue, useAnimatedStyle } from 'react-native-reanimated'

interface Props {
  index: number
  imageUri: string
  scrollX: SharedValue<number>
}

export function CarouselItem({ imageUri, index, scrollX }: Props) {
  const animatedStyle = useAnimatedStyle(() => {
    return {
      borderColor: interpolateColor(
        scrollX.value,
        [index - 1, index, index + 1],
        ['transparent', 'white', 'transparent'],
      ),
      transform: [
        { translateY: interpolate(scrollX.value, [index - 1, index, index + 1], [ITEM_SIZE / 3, 0, ITEM_SIZE / 3]) },
      ],
    }
  })

  return (
    <Animated.View
      style={[
        animatedStyle,
        {
          width: ITEM_SIZE,
          height: ITEM_SIZE,
          borderRadius: ITEM_RADIUS,
          borderWidth: ITEM_BORDER_WIDTH,
        },
      ]}
    >
      <Image source={{ uri: imageUri }} style={{ flex: 1, borderRadius: ITEM_RADIUS }} />
    </Animated.View>
  )
}
