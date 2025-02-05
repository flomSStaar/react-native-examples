import { TabTriggerSlotProps } from 'expo-router/ui'
import { CircleHelpIcon, type LucideIcon } from 'lucide-react-native'
import { forwardRef, Ref } from 'react'
import { Pressable, View } from 'react-native'

import { Borders } from '@/constants/Borders'
import { Spacing } from '@/constants/Spacing'
import { useThemeColor } from '@/hooks/useThemeColor'

export type TabButtonProps = TabTriggerSlotProps & {
  icon?: LucideIcon
}

export const TabButton = forwardRef(({ icon, children, isFocused, ...props }: TabButtonProps, ref: Ref<View>) => {
  const colors = useThemeColor()
  const TabIcon = icon ?? CircleHelpIcon

  return (
    <Pressable
      ref={ref}
      {...props}
      style={[
        {
          padding: Spacing.sm,
          margin: -Spacing.sm,
          borderRadius: Borders.radius.full,
        },
      ]}
    >
      <View
        style={[
          {
            borderRadius: Borders.radius.full,
            aspectRatio: 1,
            padding: Spacing.sm,
          },
          { backgroundColor: isFocused ? colors.tintColor : colors.surface },
        ]}
      >
        <TabIcon size={28} color={isFocused ? colors.surface : colors.tintColor} />
      </View>
    </Pressable>
  )
})
