import { Stack } from 'expo-router'

import { TabBarProvider } from '@/components/TabBarProvider'

export default function RootLayout() {
  return (
    <TabBarProvider>
      <Stack>
        <Stack.Screen
          name="(tabs)"
          options={{
            headerShown: false,
          }}
        />
      </Stack>
    </TabBarProvider>
  )
}
