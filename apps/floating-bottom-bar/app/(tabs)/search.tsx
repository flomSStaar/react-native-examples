import { ScrollView } from 'react-native'

import { NavigationHeader } from '@/components/NavigationHeader'
import { SearchSvg } from '@/components/svg/SearchSvg'
import { Spacing } from '@/constants/Spacing'

export default function SearchScreen() {
  return (
    <>
      <NavigationHeader title="Recherche" />

      <ScrollView
        contentContainerStyle={{
          flex: 1,
          paddingVertical: Spacing.xl,
          paddingHorizontal: Spacing.lg,
        }}
      >
        <SearchSvg />
      </ScrollView>
    </>
  )
}
