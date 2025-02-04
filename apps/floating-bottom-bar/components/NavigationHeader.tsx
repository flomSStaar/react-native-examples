import { StyleSheet, Text, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import { Borders } from '@/constants/Borders'
import { Spacing } from '@/constants/Spacing'
import { useThemeColor } from '@/hooks/useThemeColor'

interface Props {
  title: string
}

export function NavigationHeader({ title }: Props) {
  const styles = useStyles()
  const insets = useSafeAreaInsets()

  return (
    <View
      style={[
        styles.container,
        {
          paddingTop: insets.top,
        },
      ]}
    >
      <View style={styles.inner}>
        <Text style={styles.title}>{title}</Text>
      </View>
    </View>
  )
}

function useStyles() {
  const colors = useThemeColor()

  return StyleSheet.create({
    container: {
      backgroundColor: colors.headerBackground,
      borderBottomWidth: Borders.width.xs,
      borderBottomColor: `${colors.tintColor}66`,
    },
    inner: {
      paddingTop: 6,
      paddingBottom: 10,
      paddingHorizontal: Spacing.md,
    },
    title: {
      fontSize: 18,
      fontWeight: 600,
      textAlign: 'center',
      color: colors.text,
    },
  })
}
