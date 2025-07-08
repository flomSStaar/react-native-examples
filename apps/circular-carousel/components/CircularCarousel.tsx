import { Dimensions, Image, StyleSheet, View } from 'react-native'
import Animated, {
  clamp,
  FadeIn,
  FadeOut,
  runOnJS,
  useAnimatedScrollHandler,
  useSharedValue,
} from 'react-native-reanimated'
import { IMAGES } from '@/constants/images'
import { CarouselItem } from '@/components/CarouselItem'
import { ITEM_SIZE, ITEM_SPACING, ITEM_TOTAL_SIZE } from '@/constants/sizes'
import { useState } from 'react'

const EVENT_THROTTLE = 1000 / 60
const { width } = Dimensions.get('screen')

export function CircularCarousel() {
  const [activeIndex, setActiveIndex] = useState(0)
  const scrollX = useSharedValue(0)

  const onScroll = useAnimatedScrollHandler(e => {
    scrollX.value = e.contentOffset.x / ITEM_TOTAL_SIZE

    const newActiveIndex = Math.round(clamp(scrollX.value, 0, IMAGES.length - 1))

    if (newActiveIndex !== activeIndex) {
      runOnJS(setActiveIndex)(newActiveIndex)
    }
  })

  return (
    <View style={{ flex: 1, backgroundColor: '#000', justifyContent: 'flex-end' }}>
      <Animated.View
        key={`image-${activeIndex}`}
        style={[StyleSheet.absoluteFillObject]}
        entering={FadeIn.duration(500)}
        exiting={FadeOut.duration(500)}
      >
        <Image source={{ uri: IMAGES[activeIndex] }} style={{ flex: 1 }} />
      </Animated.View>
      <Animated.FlatList
        data={IMAGES}
        style={{
          flexGrow: 0,
          height: ITEM_SIZE * 2,
        }}
        contentContainerStyle={{
          paddingHorizontal: (width - ITEM_SIZE) / 2,
          gap: ITEM_SPACING,
        }}
        renderItem={({ item, index }) => {
          return <CarouselItem index={index} imageUri={item} scrollX={scrollX} />
        }}
        horizontal
        showsHorizontalScrollIndicator={false}
        onScroll={onScroll}
        scrollEventThrottle={EVENT_THROTTLE}
        snapToInterval={ITEM_TOTAL_SIZE}
        decelerationRate="fast"
      />
    </View>
  )
}
