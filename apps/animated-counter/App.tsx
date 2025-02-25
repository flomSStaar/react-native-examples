import { StatusBar } from 'expo-status-bar'
import { useState } from 'react'
import { Pressable, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'

import { Ticker } from '@/components/Ticker'

export default function App() {
  const [randomValue, setRandomValue] = useState(12351)
  const [percent, setPercent] = useState(0.4342)

  const handleRandomValue = () => {
    setRandomValue(Math.random() * 100000)
    setPercent(Math.random())
  }

  const usFormatter = new Intl.NumberFormat('en-US')
  const frenchFormatter = new Intl.NumberFormat('fr-FR')

  const currencyFormatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  })

  const frenchCurrencyFormatter = new Intl.NumberFormat('fr-FR', {
    style: 'currency',
    currency: 'EUR',
  })

  const percentFormatter = new Intl.NumberFormat('en-US', {
    style: 'percent',
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  })
  const frenchPercentFormatter = new Intl.NumberFormat('fr-FR', {
    style: 'percent',
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  })

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <StatusBar style="auto" />
        <Text style={styles.header}>Number Formatter Examples</Text>
        <View style={styles.section}>
          <Text style={styles.sectionHeader}>US Formatter</Text>
          <Ticker value={randomValue} fontSize={50} numberFormatter={usFormatter} />
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionHeader}>French Formatter</Text>
          <Ticker value={randomValue} fontSize={50} numberFormatter={frenchFormatter} />
        </View>
        <Text style={styles.header}>Currency Formatters</Text>
        <View style={styles.section}>
          <Text style={styles.sectionHeader}>Currency Formatter</Text>
          <Ticker value={randomValue} fontSize={50} numberFormatter={currencyFormatter} />
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionHeader}>French Currency Formatter</Text>
          <Ticker value={randomValue} fontSize={50} numberFormatter={frenchCurrencyFormatter} />
        </View>
        <Text style={styles.header}>Percent Formatters</Text>
        <View style={styles.section}>
          <Text style={styles.sectionHeader}>US Percent Formatter</Text>
          <Ticker value={percent} fontSize={50} numberFormatter={percentFormatter} />
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionHeader}>French Percent Formatter</Text>
          <Ticker value={percent} fontSize={50} numberFormatter={frenchPercentFormatter} />
        </View>
      </ScrollView>

      <Pressable
        style={({ pressed }) => [styles.floatingButton, pressed && styles.floatingButtonPressed]}
        onPress={handleRandomValue}
      >
        <Text>🔀</Text>
      </Pressable>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingVertical: 24,
  },
  scrollView: {
    position: 'absolute',
    gap: 16,
    paddingHorizontal: 24,
  },
  header: {
    fontSize: 24,
    fontWeight: '700',
    borderBottomWidth: 2,
    borderBottomColor: '#EDEDED',
    paddingBottom: 4,
  },
  section: {
    gap: 8,
  },
  sectionHeader: {
    fontSize: 18,
    fontWeight: '700',
    borderBottomWidth: 1,
    borderBottomColor: '#EDEDED',
    paddingBottom: 2,
  },
  floatingButton: {
    position: 'absolute',
    bottom: 16,
    right: 16,
    backgroundColor: '#212121',
    borderColor: '#212121',
    borderWidth: 1,
    padding: 8,
    width: 64,
    aspectRatio: 1,
    borderRadius: 32,
    alignItems: 'center',
    justifyContent: 'center',
  },
  floatingButtonPressed: {
    backgroundColor: '#8b8b8b',
  },
})
