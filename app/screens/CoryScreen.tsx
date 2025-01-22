import { StyleSheet, View } from 'react-native'
import React from 'react'
import { Text } from "../components"  // ✅ Import custom Text component
import { useAppTheme } from "@/utils/useAppTheme"  // ✅ Import themed
import type { ThemedStyle } from "@/theme"  
import { TextStyle } from "react-native"

export const CoryScreen = () => {
  const { themed } = useAppTheme()  // ✅ Themed support

  return (
    <View>

        <Text>CoryScreen</Text>
        <Text>CoryScreen</Text>
        <Text>CoryScreen</Text>
        <Text>CoryScreen</Text>
        <Text>CoryScreen</Text>
        <Text>CoryScreen</Text>
      <Text preset="heading" tx="coryScreen:corySays" style={themed($title)} />
    </View>
  )
}

const $title: ThemedStyle<TextStyle> = ({ spacing }) => ({
  marginBottom: spacing.sm,
})

const styles = StyleSheet.create({})
