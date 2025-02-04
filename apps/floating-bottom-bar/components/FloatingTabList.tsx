import { forwardRef, ReactNode, Ref } from 'react'
import { StyleSheet, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import { useSetTabBar } from '@/components/TabBarProvider'
import { Borders } from '@/constants/Borders'
import { Shadows } from '@/constants/Shadows'
import { Spacing } from '@/constants/Spacing'
import { useThemeColor } from '@/hooks/useThemeColor'

interface Props {
  children: ReactNode
}

export const FloatingTabList = forwardRef(({ children }: Props, ref: Ref<View>) => {
  const styles = useStyles()
  const insets = useSafeAreaInsets()
  const setTabBarHeight = useSetTabBar()

  const spaceWithBottom = insets.bottom + Spacing.md

  return (
    <View
      ref={ref}
      style={[
        styles.container,
        {
          marginBottom: spaceWithBottom,
        },
        Shadows.md,
      ]}
      onLayout={event => {
        setTabBarHeight({
          height: event.nativeEvent.layout.height,
          bottom: spaceWithBottom,
        })
      }}
    >
      {children}
    </View>
  )
})

function useStyles() {
  const colors = useThemeColor()

  return StyleSheet.create({
    container: {
      position: 'absolute',
      alignSelf: 'center',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      bottom: 0,
      backgroundColor: colors.surface,
      gap: Spacing.xl,
      padding: Spacing.sm,
      borderRadius: Borders.radius.full,
    },
  })
}
