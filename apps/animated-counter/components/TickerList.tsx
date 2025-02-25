import { MotiView } from 'moti'
import { View } from 'react-native'

import { Tick } from '@/components/Tick'

interface Props {
  number: number
  fontSize: number
  index: number
}

const NUMBERS = [...Array(10).keys()]

export function TickerList({ number, fontSize, index }: Props) {
  return (
    <View
      style={{
        height: fontSize,
        overflow: 'hidden',
      }}
    >
      <MotiView
        style={{}}
        animate={{
          translateY: -fontSize * 1.2 * number,
        }}
        transition={{
          damping: 80,
          stiffness: 200,
          delay: index * 50,
        }}
      >
        {NUMBERS.map((num, index) => (
          <Tick key={`number-${num}-${index}`} fontSize={fontSize}>
            {num}
          </Tick>
        ))}
      </MotiView>
    </View>
  )
}
