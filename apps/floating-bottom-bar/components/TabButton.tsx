import { TabTriggerSlotProps } from 'expo-router/ui'
import { CircleHelpIcon, type LucideIcon } from 'lucide-react-native'
import { forwardRef, Ref } from 'react'
import { Pressable, View } from 'react-native'

import { Borders } from '@/constants/Borders'
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
          borderRadius: Borders.radius.full,
          aspectRatio: 1,
          padding: 8,
        },
        { backgroundColor: isFocused ? colors.tintColor : colors.surface },
      ]}
    >
      <TabIcon size={28} color={isFocused ? colors.surface : colors.tintColor} />
    </Pressable>
  )
})
