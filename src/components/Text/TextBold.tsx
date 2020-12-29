import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

interface Props {
  styleText?: Object
  children: string
}

const TextBold: React.FC <Props> = ({styleText, children}) => {
  return (
    <View>
      <Text style = {{...styleText, ... styles.text}}>{children}</Text>
    </View>
  )
}

export default TextBold

const styles = StyleSheet.create({
  text: {
    fontFamily:"Mulish-Bold"
  }
})
