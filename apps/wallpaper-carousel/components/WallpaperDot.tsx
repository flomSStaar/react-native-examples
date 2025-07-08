import Animated, {
  Extrapolation,
  interpolate,
  interpolateColor,
  type SharedValue,
  useAnimatedStyle,
} from 'react-native-reanimated'
import { DOT_ACTIVE_COLOR, DOT_ACTIVE_SIZE, DOT_INACTIVE_COLOR, DOT_RADIUS, DOT_SIZE } from '@/constants/sizes'

interface Props {
  index: number
  scrollX: SharedValue<number>
}

export function WallpaperDot({ index, scrollX }: Props) {
  const animatedStyle = useAnimatedStyle(() => {
    return {
      width: interpolate(
        scrollX.value,
        [index - 1, index, index + 1],
        [DOT_SIZE, DOT_ACTIVE_SIZE, DOT_SIZE],
        Extrapolation.CLAMP,
      ),
      backgroundColor: interpolateColor(
        scrollX.value,
        [index - 1, index, index + 1],
        [DOT_INACTIVE_COLOR, DOT_ACTIVE_COLOR, DOT_INACTIVE_COLOR],
      ),
    }
  })

  return (
    <Animated.View
      key={`dot-${index}`}
      style={[
        animatedStyle,
        {
          height: DOT_SIZE,
          borderRadius: DOT_RADIUS,
        },
      ]}
    />
  )
}
