import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { TextRegular } from './Text'
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen'
import { Colors } from '@styles'
import { RFValue } from 'react-native-responsive-fontsize'

interface Props {
  title: string
  onPress: () => void
  filled?: boolean
}

const Buttom = (props: Props) => {
  return (
    <TouchableOpacity
      onPress={props.onPress}
      activeOpacity={0.4}
      style={[
        styles.mainContainer,
        props.filled ? styles.filled : styles.unfilled,
      ]}>
      <TextRegular
        style={[
          styles.title,
          props.filled ? styles.titleFilled : styles.titleUnfilled,
        ]}>
        {props.title}
      </TextRegular>
    </TouchableOpacity>
  )
}

export { Buttom }

const styles = StyleSheet.create({
  mainContainer: {
    height: widthPercentageToDP(15),
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  filled: {
    backgroundColor: Colors.primaryBlue,
  },
  unfilled: {
    backgroundColor: Colors.white,
    borderColor: Colors.primaryBlue,
    borderWidth: 2,
  },
  title: { fontSize: RFValue(14) },
  titleFilled: {
    color: Colors.white,
  },
  titleUnfilled: {
    color: Colors.primaryBlue,
  },
})
