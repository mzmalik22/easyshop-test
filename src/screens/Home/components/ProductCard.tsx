import React, { memo } from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize'
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen'
import { TextMedium, TextRegular } from '@components'
import { Colors } from '@styles'
import { Product } from '@models'
import { FavoriteIcon } from '@assets/svg'
import { addToCart, markFavorite, useReduxDispatch } from '@store'
import { NavigationService } from '@utilities'

interface Props {
  product: Product
}
const truncateText = (text: string, maxLength: number) => {
  if (text.length > maxLength) {
    return text.slice(0, maxLength) + '...'
  }
  return text
}
const ProductCard = memo(({ product }: Props) => {
  const dispatch = useReduxDispatch()

  return (
    <TouchableOpacity
      style={styles.mainContainer}
      activeOpacity={0.4}
      onPress={() =>
        NavigationService.navigate('ProductDetailScreen', { product })
      }>
      <View style={styles.topContainer}>
        <View style={{ position: 'absolute', zIndex: 10, top: 15, left: 15 }}>
          <TouchableOpacity onPress={() => dispatch(markFavorite(product.id))}>
            <FavoriteIcon isFavorite={product.favorite} />
          </TouchableOpacity>
        </View>
        <View style={styles.imageContainer}>
          <Image
            source={{ uri: product.thumbnail }}
            style={{ flex: 1, width: undefined, height: undefined }}
          />
        </View>
      </View>
      <View style={styles.bottomContainer}>
        <View style={{ flex: 3 }}>
          <TextMedium
            style={styles.itemInfoContainer}>{`$${product.price}`}</TextMedium>
          <Text style={{ fontSize: RFValue(12), color: Colors.textLightGray }}>
            {truncateText(product.title, 12)}
          </Text>
        </View>
        <View style={styles.addToCardMainContainer}>
          <TouchableOpacity
            style={styles.addToCartContainer}
            onPress={() => dispatch(addToCart(product))}>
            <TextRegular style={{ fontSize: RFValue(12), color: Colors.white }}>
              +
            </TextRegular>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  )
})

export { ProductCard }

const styles = StyleSheet.create({
  mainContainer: {
    height: heightPercentageToDP(25),
    width: widthPercentageToDP(40),
    backgroundColor: Colors.white,
    borderRadius: 12,
  },
  topContainer: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomContainer: {
    flex: 1,
    paddingHorizontal: '8%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  imageContainer: {
    height: widthPercentageToDP(25),
    width: widthPercentageToDP(25),
    borderRadius: 10,
    overflow: 'hidden',
  },
  itemInfoContainer: {
    fontSize: RFValue(14),
    marginBottom: 5,
    color: Colors.black,
  },
  addToCardMainContainer: {
    flex: 1,
    alignItems: 'flex-end',
    marginTop: '3%',
  },
  addToCartContainer: {
    height: widthPercentageToDP(6),
    width: widthPercentageToDP(6),
    borderRadius: widthPercentageToDP(3),
    backgroundColor: Colors.primaryBlue,
    justifyContent: 'center',
    alignItems: 'center',
  },
})
