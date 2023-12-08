import React, { useState } from 'react'
import {
  View,
  TextInput as RNTextInput,
  StyleSheet,
  StyleProp,
  ViewStyle,
} from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize'

import { TextRegular } from './Text'
import { Colors } from '@styles'
type TextInputProps = React.ComponentProps<typeof RNTextInput> & {
  label?: string
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
  touched?: boolean
  error?: string
  containerStyle?: StyleProp<ViewStyle>
  optionalText?: string
}

const TextInput = (props: TextInputProps) => {
  const [secureTextEntry, setSecureTextEntry] = useState(
    props.secureTextEntry || false,
  )
  return (
    <View style={styles.mainContainer}>
      {!!props.label && (
        <TextRegular
          style={{
            color: Colors.black,
            fontSize: RFValue(13),
            marginBottom: 5,
            marginLeft: 5,
          }}>
          {props.label}
        </TextRegular>
      )}
      <View style={[styles.container, props.containerStyle]}>
        {props.leftIcon && (
          <View style={[styles.leftIconContainer]}>
            <View style={styles.leftIconSubContainer}>{props.leftIcon}</View>
            <View style={styles.divider} />
          </View>
        )}
        <View style={[styles.textInputContainer]}>
          <RNTextInput
            {...props}
            secureTextEntry={secureTextEntry}
            style={[styles.textInput, props.style]}
            placeholderTextColor={props.placeholderTextColor || 'gray'}
            autoCorrect={props.autoCorrect ?? false}
          />
        </View>
        {props.rightIcon && (
          <View style={[styles.rightIconContainer]}>{props.rightIcon}</View>
        )}
      </View>
      {props.touched && props.error && (
        <TextRegular style={styles.errorMessage}>{props.error}</TextRegular>
      )}
      {props.optionalText && (
        <View style={styles.optionalContainer}>
          <TextRegular style={styles.optionalMessage}>
            {props.optionalText}
          </TextRegular>
          <TextRegular style={styles.optionalMessage}>
            {`${props.value?.length}/${props.maxLength}`}
          </TextRegular>
        </View>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  mainContainer: {
    marginBottom: 15,
  },
  container: {
    width: '100%',
    height: 55,
    borderRadius: 10,
    borderColor: 'gray',
    flexDirection: 'row',
    borderWidth: 1,
    overflow: 'hidden',
    backgroundColor: Colors.white,
  },
  textInput: {
    height: '100%',
    fontSize: RFValue(14),
    color: Colors.black,
    fontFamily: 'Jost-Regular',
  },
  leftIconContainer: {
    flex: 1.5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  divider: {
    height: '70%',
    width: 1,
    backgroundColor: 'gray',
  },
  leftIconSubContainer: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInputContainer: {
    flex: 5,
    paddingLeft: 15,
    paddingRight: 15,
  },
  rightIconContainer: {
    flex: 1.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorMessage: {
    color: 'red',
    marginTop: 2,
    marginLeft: 5,
    fontSize: 12,
  },
  optionalContainer: { flexDirection: 'row', justifyContent: 'space-between' },
  optionalMessage: {
    color: Colors.black,
    marginTop: 2,
    marginLeft: 5,
    fontSize: 12,
  },
})

export { TextInput }
