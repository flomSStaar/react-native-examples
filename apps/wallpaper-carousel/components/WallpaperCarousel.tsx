import { StyleSheet, View } from 'react-native'
import { IMAGES } from '@/constants/images'
import Animated, {
  clamp,
  Easing,
  FadeInUp,
  LinearTransition,
  runOnJS,
  useAnimatedScrollHandler,
  useSharedValue,
} from 'react-native-reanimated'
import { WallpaperItem } from '@/components/WallpaperItem'
import { useState } from 'react'
import { DOT_SPACING, ITEM_SPACING, ITEM_WIDTH, SCREEN_WIDTH } from '@/constants/sizes'
import { WallpaperBackdrop } from '@/components/WallpaperBackdrop'
import { WallpaperDot } from '@/components/WallpaperDot'

const SCROLL_EVENT_THROTTLE = 1000 / 60

export function WallpaperCarousel() {
  const [activeIndex, setActiveIndex] = useState(0)
  const scrollX = useSharedValue(0)

  const onScroll = useAnimatedScrollHandler(e => {
    scrollX.value = e.contentOffset.x / (ITEM_WIDTH + ITEM_SPACING)

    const newActiveIndex = Math.round(clamp(scrollX.value, 0, IMAGES.length - 1))

    if (newActiveIndex !== activeIndex) {
      runOnJS(setActiveIndex)(newActiveIndex)
    }
  })

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', gap: 32 }}>
      <View style={StyleSheet.absoluteFillObject}>
        {IMAGES.map((item, index) => (
          <WallpaperBackdrop imageUri={item} index={index} key={`backdrop-${index}`} scrollX={scrollX} />
        ))}
      </View>
      <Animated.FlatList
        data={IMAGES}
        renderItem={({ item, index }) => <WallpaperItem imageUri={item} index={index} scrollX={scrollX} />}
        style={{ flexGrow: 0 }}
        contentContainerStyle={{
          gap: ITEM_SPACING,
          paddingHorizontal: (SCREEN_WIDTH - ITEM_WIDTH) / 2,
        }}
        horizontal
        entering={FadeInUp.duration(1000).easing(Easing.elastic(0.9))}
        showsHorizontalScrollIndicator={false}
        snapToInterval={ITEM_WIDTH + ITEM_SPACING}
        decelerationRate="fast"
        onScroll={onScroll}
        scrollEventThrottle={SCROLL_EVENT_THROTTLE}
      />
      <Animated.View
        style={{ flexDirection: 'row', gap: DOT_SPACING }}
        layout={LinearTransition}
        entering={FadeInUp.delay(500).duration(1000).easing(Easing.elastic(0.9))}
      >
        {IMAGES.map((_, index) => (
          <WallpaperDot index={index} scrollX={scrollX} key={`dot-${index}`} />
        ))}
      </Animated.View>
    </View>
  )
}
