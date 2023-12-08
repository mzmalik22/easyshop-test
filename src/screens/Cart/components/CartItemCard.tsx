import React, { memo } from 'react'
import { StyleSheet, TouchableOpacity, View, Image } from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize'
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen'
import { TextMedium, TextRegular } from '@components'
import { Cart } from '@models'
import { Colors } from '@styles'
import { addToCart, removeFromCart, useReduxDispatch } from '@store'
interface Props {
  item: Cart
}

const CartItemCard = memo(({ item }: Props) => {
  const dispatch = useReduxDispatch()
  return (
    <View style={styles.mainContainer}>
      <View style={styles.imageMainContaienr}>
        <View style={styles.imageContaienr}>
          <Image
            source={{ uri: item.thumbnail }}
            style={{
              resizeMode: 'cover',
              flex: 1,
            }}
          />
        </View>
      </View>
      <View
        style={{
          flex: 2.5,
          paddingHorizontal: widthPercentageToDP(1),
          justifyContent: 'center',
        }}>
        <TextRegular style={{ color: Colors.black, fontSize: RFValue(12) }}>
          {item.title}
        </TextRegular>
        <TextRegular
          style={{
            color: Colors.black,
            fontSize: RFValue(12),
          }}>{`$${item.price}`}</TextRegular>
      </View>
      <View style={styles.cartQuantityContainer}>
        <TouchableOpacity
          style={styles.cardButtonContainer}
          activeOpacity={0.4}
          onPress={() => dispatch(removeFromCart(item))}>
          <TextMedium style={styles.cardButtonIcon}>-</TextMedium>
        </TouchableOpacity>
        <TextRegular style={styles.cardItemNumber}>{item.quantity}</TextRegular>
        <TouchableOpacity
          style={styles.cardButtonContainer}
          activeOpacity={0.4}
          onPress={() => dispatch(addToCart(item))}>
          <TextMedium style={styles.cardButtonIcon}>+</TextMedium>
        </TouchableOpacity>
      </View>
    </View>
  )
})

export { CartItemCard }

const styles = StyleSheet.create({
  mainContainer: {
    borderBottomColor: Colors.textLightGray,
    borderBottomWidth: 0.5,
    width: '90%',
    alignSelf: 'center',
    flexDirection: 'row',
    paddingBottom: heightPercentageToDP(2),
  },
  imageMainContaienr: {
    flex: 1.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContaienr: {
    width: widthPercentageToDP(14),
    height: widthPercentageToDP(14),
    borderRadius: 5,
    overflow: 'hidden',
  },
  cartQuantityContainer: {
    flex: 2,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  cardButtonContainer: {
    width: widthPercentageToDP(10),
    height: widthPercentageToDP(10),
    borderRadius: widthPercentageToDP(5),
    backgroundColor: Colors.primaryGray,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardButtonIcon: { color: Colors.black, fontSize: RFValue(18) },
  cardItemNumber: { color: Colors.black, fontSize: RFValue(14) },
})
