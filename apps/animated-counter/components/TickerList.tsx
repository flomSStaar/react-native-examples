import { useEffect } from 'react'
import { View } from 'react-native'
import Animated, { useAnimatedStyle, useSharedValue, withDelay, withSpring } from 'react-native-reanimated'

import { Tick } from '@/components/Tick'

interface Props {
  number: number
  fontSize: number
  index: number
}

const NUMBERS = [...Array(10).keys()]

export function TickerList({ number, fontSize, index }: Props) {
  const currentNumber = useSharedValue(number)

  useEffect(() => {
    currentNumber.value = withDelay(
      index * 50,
      withSpring(number, {
        damping: 80,
        stiffness: 200,
      }),
    )
  }, [number])

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: -fontSize * 1.2 * currentNumber.value,
        },
      ],
    }
  })

  return (
    <View
      style={{
        height: fontSize,
        overflow: 'hidden',
      }}
    >
      <Animated.View style={animatedStyle}>
        {NUMBERS.map((num, index) => (
          <Tick key={`number-${num}-${index}`} fontSize={fontSize}>
            {num}
          </Tick>
        ))}
      </Animated.View>
    </View>
  )
}
