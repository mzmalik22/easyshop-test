import React from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native'
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen'
import { RFValue } from 'react-native-responsive-fontsize'
import { NavigationService } from '@utilities'
import { CartIcon, LeftIcon } from '@assets/svg'
import { Colors } from '@styles'
import { TextRegular } from './Text'
const HeaderBar = ({
  showCart,
  headerText,
}: {
  showCart?: boolean
  headerText?: string
}) => {
  return (
    <View style={[styles.container]}>
      <View style={[styles.leftIconContainer]}>
        <TouchableOpacity
          style={{
            backgroundColor: Colors.primaryGray,
            height: widthPercentageToDP(10),
            width: widthPercentageToDP(10),
            borderRadius: widthPercentageToDP(5),
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={() => NavigationService.goBack()}>
          <LeftIcon />
        </TouchableOpacity>
      </View>
      {!!headerText && (
        <View style={{ flex: 4 }}>
          <TextRegular style={{ fontSize: RFValue(16), color: Colors.black }}>
            {headerText}
          </TextRegular>
        </View>
      )}
      <View style={styles.rightIconContainer}>
        {showCart && (
          <TouchableOpacity
            onPress={() => NavigationService.navigate('CartScreen', {})}>
            <CartIcon color={'#1E222B'} />
          </TouchableOpacity>
        )}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: heightPercentageToDP(8),
    alignItems: 'center',
    width: widthPercentageToDP(90),
    alignSelf: 'center',
  },
  leftIconContainer: {
    flex: 1,
    justifyContent: 'center',
    paddingLeft: 5,
    height: '100%',
  },
  rightIconContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end',
    height: '100%',
  },
})
export { HeaderBar }
