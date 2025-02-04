import { ScrollView, StyleSheet, Text, View } from 'react-native'

import { NavigationHeader } from '@/components/NavigationHeader'
import { useTabBar } from '@/components/TabBarProvider'
import { Borders } from '@/constants/Borders'
import { Shadows } from '@/constants/Shadows'
import { Spacing } from '@/constants/Spacing'
import { useThemeColor } from '@/hooks/useThemeColor'

export default function Index() {
  const styles = useStyles()
  const { height: tabBarHeight, bottom } = useTabBar()

  return (
    <>
      <NavigationHeader title="Accueil" />

      <ScrollView
        contentContainerStyle={[
          styles.container,
          {
            paddingBottom: bottom + tabBarHeight + Spacing.xl,
          },
        ]}
      >
        <View style={[styles.section, Shadows.sm]}>
          <Text style={styles.sectionTitle}>Bienvenue</Text>
          <Text style={styles.sectionContent}>
            Bienvenue sur l'écran d'accueil de notre application. Nous sommes ravis de vous avoir parmi nous et espérons
            que vous apprécierez votre expérience.
          </Text>
        </View>
        <View style={[styles.section, Shadows.sm]}>
          <Text style={styles.sectionTitle}>Explorez</Text>
          <Text style={styles.sectionContent}>
            Explorez les différentes fonctionnalités de l'application. Nous avons conçu cette application pour vous
            offrir une expérience utilisateur optimale et intuitive.
          </Text>
        </View>
        <View style={[styles.section, Shadows.sm]}>
          <Text style={styles.sectionTitle}>Navigation</Text>
          <Text style={styles.sectionContent}>
            Utilisez les onglets ci-dessous pour naviguer entre les différentes sections de l'application. Chaque onglet
            vous mènera à une nouvelle fonctionnalité.
          </Text>
        </View>
        <View style={[styles.section, Shadows.sm]}>
          <Text style={styles.sectionTitle}>Contact</Text>
          <Text style={styles.sectionContent}>
            N'hésitez pas à nous contacter pour toute question ou suggestion. Nous sommes là pour vous aider et
            améliorer continuellement notre application grâce à vos retours.
          </Text>
        </View>
        <View style={[styles.section, Shadows.sm]}>
          <Text style={styles.sectionTitle}>Expérience</Text>
          <Text style={styles.sectionContent}>
            Profitez de votre expérience utilisateur. Nous avons mis en place des fonctionnalités innovantes pour rendre
            votre utilisation agréable et efficace.
          </Text>
        </View>
        <View style={[styles.section, Shadows.sm]}>
          <Text style={styles.sectionTitle}>Mises à jour</Text>
          <Text style={styles.sectionContent}>
            Découvrez nos nouvelles mises à jour. Nous travaillons constamment pour ajouter de nouvelles fonctionnalités
            et améliorer les performances de l'application.
          </Text>
        </View>
        <View style={[styles.section, Shadows.sm]}>
          <Text style={styles.sectionTitle}>Retours</Text>
          <Text style={styles.sectionContent}>
            Partagez vos retours avec nous. Votre avis est précieux et nous aide à améliorer continuellement notre
            application pour mieux répondre à vos besoins.
          </Text>
        </View>
        <View style={[styles.section, Shadows.sm]}>
          <Text style={styles.sectionTitle}>Merci</Text>
          <Text style={styles.sectionContent}>
            Merci d'utiliser notre application. Nous espérons que vous apprécierez toutes les fonctionnalités que nous
            avons développées pour vous.
          </Text>
        </View>
      </ScrollView>
    </>
  )
}

function useStyles() {
  const colors = useThemeColor()

  return StyleSheet.create({
    container: {
      gap: Spacing.lg,
      paddingHorizontal: Spacing.md,
      paddingVertical: Spacing.xl,
    },
    section: {
      borderColor: `${colors.tintColor}66`,
      borderWidth: Borders.width.sm,
      borderRadius: Borders.radius.md,
      paddingVertical: Spacing.sm,
      paddingHorizontal: Spacing.md,
      backgroundColor: colors.surface,
      gap: Spacing.sm,
    },
    sectionTitle: {
      fontSize: 18,
      fontWeight: 700,
      color: colors.text,
    },
    sectionContent: {
      color: colors.text,
      fontSize: 14,
    },
  })
}
