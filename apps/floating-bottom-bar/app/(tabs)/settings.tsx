import { ScrollView } from 'react-native'

import { NavigationHeader } from '@/components/NavigationHeader'
import { SettingsSvg } from '@/components/svg/SettingsSvg'
import { Spacing } from '@/constants/Spacing'

export default function SettingsScreen() {
  return (
    <>
      <NavigationHeader title="Paramètres" />

      <ScrollView
        contentContainerStyle={{
          flex: 1,
          paddingVertical: Spacing.xl,
          paddingHorizontal: Spacing.lg,
        }}
      >
        <SettingsSvg />
      </ScrollView>
    </>
  )
}
