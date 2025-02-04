import { TabList, Tabs, TabSlot, TabTrigger } from 'expo-router/ui'
import { HomeIcon, MapIcon, SearchIcon, SettingsIcon } from 'lucide-react-native'
import { View } from 'react-native'

import { FloatingTabList } from '@/components/FloatingTabList'
import { TabButton } from '@/components/TabButton'
import { useThemeColor } from '@/hooks/useThemeColor'

export default function TabsLayout() {
  const colors = useThemeColor()

  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <Tabs>
        <TabSlot
          style={{
            backgroundColor: colors.background,
          }}
        />
        <TabList asChild>
          <FloatingTabList>
            <TabTrigger name="index" href="/" asChild>
              <TabButton icon={HomeIcon} />
            </TabTrigger>
            <TabTrigger name="sitemap" href="/(tabs)/map" asChild>
              <TabButton icon={MapIcon} />
            </TabTrigger>
            <TabTrigger name="search" href="/(tabs)/search" asChild>
              <TabButton icon={SearchIcon} />
            </TabTrigger>
            <TabTrigger name="settings" href="/(tabs)/settings" asChild>
              <TabButton icon={SettingsIcon} />
            </TabTrigger>
          </FloatingTabList>
        </TabList>
      </Tabs>
    </View>
  )
}
