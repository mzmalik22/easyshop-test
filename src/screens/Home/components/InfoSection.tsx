import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize'
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen'
import { CartIcon } from '@assets/svg'
import { SearchBar, TextRegular } from '@components'
import { Colors } from '@styles'
import { NavigationService } from '@utilities'

const InfoSection = () => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.topContainer}>
        <TextRegular style={{ color: Colors.white, fontSize: RFValue(22) }}>
          Hey, User
        </TextRegular>
        <TouchableOpacity
          onPress={() => NavigationService.navigate('CartScreen', {})}>
          <CartIcon />
        </TouchableOpacity>
      </View>
      <View style={styles.middleContainer}>
        <SearchBar />
      </View>
      <View style={styles.bottomContainer}>
        <View style={styles.deliverySubContainer}>
          <Text style={styles.textInfo}>DELIVERY TO</Text>
          <Text style={styles.textInfo}>WITHIN</Text>
        </View>
        <View style={styles.deliverySubContainer}>
          <Text style={styles.textValue}>Green Way 3000, Shlhet</Text>
          <Text style={styles.textValue}>1 Hour</Text>
        </View>
      </View>
    </View>
  )
}

export { InfoSection }

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: Colors.primaryBlue,
    height: heightPercentageToDP(23),
  },
  topContainer: {
    flex: 1,
    paddingHorizontal: widthPercentageToDP(3),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  middleContainer: {
    flex: 1,
    paddingHorizontal: widthPercentageToDP(3),
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottomContainer: {
    flex: 1,
    paddingHorizontal: widthPercentageToDP(3),
    justifyContent: 'flex-end',
    paddingBottom: heightPercentageToDP(1.5),
  },
  deliverySubContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: heightPercentageToDP(0.5),
  },
  textInfo: { fontSize: RFValue(11), color: Colors.textPrimaryGray },
  textValue: { fontSize: RFValue(14), color: Colors.textPrimaryGray },
})
