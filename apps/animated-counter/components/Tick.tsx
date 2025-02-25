import { Text, TextProps } from 'react-native'

interface Props extends TextProps {
  fontSize: number
}

export function Tick({ children, fontSize, style, ...rest }: Props) {
  return (
    <Text
      {...rest}
      style={[
        style,
        {
          fontSize,
          lineHeight: fontSize * 1.2,
          fontWeight: '900',
          fontVariant: ['tabular-nums'],
        },
      ]}
    >
      {children}
    </Text>
  )
}
