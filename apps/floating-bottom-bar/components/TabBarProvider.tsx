import { createContext, PropsWithChildren, useContext, useState } from 'react'

type TabBarValues = {
  /**
   * The height of the tab bar.
   */
  height: number
  /**
   * The bottom margin of the tab bar, including safe area insets.
   */
  bottom: number
}

type TabBarContextType = TabBarValues & {
  setTabBar: (values: TabBarValues) => void
}

const TabBarContext = createContext<TabBarContextType>({} as TabBarContextType)

export function useTabBar() {
  const context = useContext(TabBarContext)

  return {
    height: context.height,
    bottom: context.bottom,
  }
}

export function useSetTabBar() {
  return useContext(TabBarContext).setTabBar
}

export function TabBarProvider({ children }: PropsWithChildren) {
  const [tabBarHeight, setTabBarHeight] = useState<TabBarValues>({
    height: 0,
    bottom: 0,
  })

  return (
    <TabBarContext.Provider
      value={{ height: tabBarHeight.height, bottom: tabBarHeight.bottom, setTabBar: setTabBarHeight }}
    >
      {children}
    </TabBarContext.Provider>
  )
}
