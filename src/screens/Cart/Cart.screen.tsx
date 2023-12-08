import React from 'react'
import { FlatList, StyleSheet, View } from 'react-native'
import {
  Buttom,
  FullScreenView,
  HeaderBar,
  TextMedium,
  TextRegular,
} from '@components'
import { useCartSelector } from '@store'
import { CartItemCard } from './components'
import { heightPercentageToDP } from 'react-native-responsive-screen'
import { Colors } from '@styles'
import { RFValue } from 'react-native-responsive-fontsize'
import { Cart } from '@models'

const CartScreen = () => {
  const { items } = useCartSelector(state => state)
  const calculateTotalPrice = (cartItems: Cart[]) => {
    return cartItems.reduce((total, item) => {
      return total + item.price * item.quantity
    }, 0)
  }

  return (
    <FullScreenView>
      <HeaderBar headerText={`Shopping Cart (${items.length})`} />
      <View
        style={{
          height: heightPercentageToDP(55),
          paddingVertical: 10,
        }}>
        <FlatList
          data={items}
          renderItem={({ item, index }) => (
            <CartItemCard item={item} key={index} />
          )}
          ItemSeparatorComponent={() => (
            <View style={{ height: heightPercentageToDP(2) }} />
          )}
          ListEmptyComponent={() => (
            <View
              style={{
                height: heightPercentageToDP(2),
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <TextRegular
                style={{ color: Colors.black, fontSize: RFValue(16) }}>
                No Item
              </TextRegular>
            </View>
          )}
        />
      </View>
      <View style={styles.totalContainer}>
        <View style={styles.priceContainer}>
          <View style={styles.priceInfoContainer}>
            <TextRegular style={styles.priceData}>Subtotal</TextRegular>
            <TextMedium style={styles.princeValue}>{`$${calculateTotalPrice(
              items,
            )}`}</TextMedium>
          </View>
          <View style={styles.priceInfoContainer}>
            <TextRegular style={styles.priceData}>Delivery</TextRegular>
            <TextMedium style={styles.princeValue}>{`$${
              calculateTotalPrice(items) > 0 ? 2 : 0
            }`}</TextMedium>
          </View>
          <View style={styles.priceInfoContainer}>
            <TextRegular style={styles.priceData}>Total</TextRegular>
            <TextMedium style={styles.princeValue}>{`$${
              calculateTotalPrice(items) > 0
                ? calculateTotalPrice(items) + 2
                : 0
            }`}</TextMedium>
          </View>
        </View>
        <View style={{ flex: 2 }}>
          <Buttom title="Proceed To Checkout" filled onPress={() => {}} />
        </View>
      </View>
    </FullScreenView>
  )
}

export { CartScreen }
const styles = StyleSheet.create({
  totalContainer: {
    backgroundColor: Colors.primaryGray,
    width: '95%',
    height: heightPercentageToDP(35),
    alignSelf: 'center',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  priceInfoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: '5%',
  },
  priceContainer: { flex: 2, paddingHorizontal: '10%', paddingVertical: '10%' },
  priceData: { fontSize: RFValue(14), color: Colors.textLightGray },
  princeValue: { fontSize: RFValue(14), color: Colors.black },
})
