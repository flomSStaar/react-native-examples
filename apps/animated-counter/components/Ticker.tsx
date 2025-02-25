import { useState } from 'react'
import { View } from 'react-native'

import { Tick } from '@/components/Tick'
import { TickerList } from '@/components/TickerList'

interface Props {
  value: number
  fontSize?: number
  numberFormatter?: Intl.NumberFormat
}

export function Ticker({ value, fontSize = 50, numberFormatter = new Intl.NumberFormat() }: Props) {
  const intNumber = numberFormatter.format(value)

  const splitValue = intNumber.toString().split('')
  const [newFontSize, setNewFontSize] = useState(fontSize)

  return (
    <View>
      <Tick
        fontSize={fontSize}
        numberOfLines={1}
        adjustsFontSizeToFit
        onTextLayout={e => {
          const line = e.nativeEvent.lines[0]
          setNewFontSize(line.capHeight + line.descender)
        }}
        style={{
          position: 'absolute',
          left: 1000000,
          top: 1000000,
        }}
      >
        {intNumber}
      </Tick>
      <View
        style={{
          flexDirection: 'row',
          flexWrap: 'wrap',
        }}
      >
        {splitValue.map((number, index) => {
          const parsedNumber = parseInt(number, 10)

          if (!isNaN(parsedNumber)) {
            return <TickerList fontSize={newFontSize} number={parsedNumber} index={index} key={index} />
          }

          return (
            <Tick key={index} fontSize={newFontSize} style={{ opacity: 0.2 }}>
              {number}
            </Tick>
          )
        })}
      </View>
    </View>
  )
}
