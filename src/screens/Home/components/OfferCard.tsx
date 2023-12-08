import React from 'react'
import { StyleSheet, View } from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize'
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen'
import { ImageIcon } from '@assets/svg'
import { TextBold, TextRegular } from '@components'
import { Colors } from '@styles'

const OfferCard = () => {
  return (
    <View style={styles.mainContainer}>
      <View style={{ flex: 1, justifyContent: 'center' }}>
        <ImageIcon />
      </View>
      <View
        style={{
          flex: 2,
          justifyContent: 'center',
          paddingLeft: widthPercentageToDP(10),
        }}>
        <TextRegular style={[styles.discountText, { fontSize: RFValue(18) }]}>
          Get
        </TextRegular>
        <TextBold style={[styles.discountText, { fontSize: RFValue(22) }]}>
          50 % OFF
        </TextBold>
        <TextRegular style={[styles.discountText, { fontSize: RFValue(14) }]}>
          On first 03 order
        </TextRegular>
      </View>
    </View>
  )
}

export { OfferCard }

const styles = StyleSheet.create({
  mainContainer: {
    alignSelf: 'flex-start',
    backgroundColor: Colors.primaryYellow,
    paddingVertical: heightPercentageToDP(2),
    paddingHorizontal: widthPercentageToDP(5),
    flexDirection: 'row',
    width: widthPercentageToDP(75),
    height: heightPercentageToDP(16),
    borderRadius: 15,
  },
  cardContainer: {
    paddingLeft: RFValue(15),
    paddingVertical: RFValue(30),
  },
  discountText: {
    color: Colors.white,
  },
})
