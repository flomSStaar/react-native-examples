import { ScrollView } from 'react-native'

import { MapSvg } from '@/components/svg/MapSvg'
import { Spacing } from '@/constants/Spacing'

export default function MapScreen() {
  return (
    <ScrollView
      contentContainerStyle={{
        flex: 1,
        paddingVertical: Spacing.xl,
        paddingHorizontal: Spacing.lg,
      }}
    >
      <MapSvg />
    </ScrollView>
  )
}
