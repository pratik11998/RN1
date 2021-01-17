import React from 'react'
import { StyleSheet } from 'react-native'
import { Text } from 'react-native-paper'

const Paragraph = (props) => <Text style={styles.text} {...props} />

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    lineHeight: 21,
    textAlign: 'center',
    marginBottom: 12,
    color:'#FFFFFF',
    fontStyle:'italic',

  },
})

export default Paragraph
