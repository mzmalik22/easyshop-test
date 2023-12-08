import React from 'react'
import { TextProps, Text as Text } from 'react-native'

type TextProp = TextProps & {
  children: React.ReactNode
  numberOfLines?: number | undefined
}

const RNText = ({ ...props }: TextProp) => (
  <Text {...props} style={[{ fontFamily: 'ManropeBold' }, props.style]} />
)

const TextRegular = (props: TextProp) => {
  return (
    <RNText
      {...props}
      style={[{ fontFamily: 'ManropeRegular', fontWeight: '400' }, props.style]}
      numberOfLines={props.numberOfLines}
    />
  )
}
const TextBold = (props: TextProp) => {
  return (
    <RNText
      {...props}
      style={[{ fontFamily: 'ManropeBold', fontWeight: '900' }, props.style]}
      numberOfLines={props.numberOfLines}
    />
  )
}
const TextMedium = (props: TextProp) => {
  return (
    <RNText
      {...props}
      style={[{ fontFamily: 'ManropeMedium', fontWeight: '600' }, props.style]}
      numberOfLines={props.numberOfLines}
    />
  )
}
const TextSemiBold = (props: TextProp) => {
  return (
    <RNText
      {...props}
      style={[{ fontFamily: 'ManropeSemiBold' }, props.style]}
      numberOfLines={props.numberOfLines}
    />
  )
}
export { TextRegular, TextBold, TextMedium, TextSemiBold }
