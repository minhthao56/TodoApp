import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

interface Props {
    styleText?: Object
    children: string
  }
const TextBlack:  React.FC <Props> = ({styleText, children}) => {
    return (
        <View>
        <Text style = {{...styleText, ... styles.text}}>{children}</Text>
      </View>
    )
}

export default TextBlack

const styles = StyleSheet.create({
    text: {
        fontFamily:"Mulish-Black"
      }
})
