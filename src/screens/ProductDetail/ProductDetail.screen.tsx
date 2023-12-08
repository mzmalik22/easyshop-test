import React, { useState } from 'react'
import { StyleSheet, TouchableOpacity, View } from 'react-native'
import { Rating } from 'react-native-ratings'
import { RFValue } from 'react-native-responsive-fontsize'
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen'
import {
  Buttom,
  FullScreenView,
  HeaderBar,
  ImageCarousel,
  TextBold,
  TextMedium,
  TextRegular,
  VirtualizedView,
} from '@components'
import { Product } from '@models'
import { Colors } from '@styles'
import { HeartIcon } from '@assets/svg'
import { addToCart, markFavorite, useReduxDispatch } from '@store'

const ProductDetailScreen = ({ route }) => {
  const { product }: { product: Product } = route.params
  const dispatch = useReduxDispatch()
  const [isFavorite, setIsFavorite] = useState(product.favorite)
  const handleFavorite = (id: number) => {
    setIsFavorite(prev => !prev)
    dispatch(markFavorite(id))
  }
  return (
    <FullScreenView>
      <HeaderBar showCart={true} />
      <VirtualizedView contentContainerStyle={{ paddingBottom: 20 }}>
        <View style={{ paddingHorizontal: widthPercentageToDP(3) }}>
          <TextRegular style={{ fontSize: RFValue(50), fontWeight: '300' }}>
            {product.brand}
          </TextRegular>
          <TextBold style={{ fontSize: RFValue(50) }}>{product.title}</TextBold>
        </View>
        <View style={styles.ratingContainer}>
          <Rating
            type="star"
            ratingCount={5}
            imageSize={RFValue(14)}
            startingValue={product.rating}
            readonly={true}
          />
          <TextRegular style={styles.reviewText}>{`110 Reviews`}</TextRegular>
        </View>
        <View style={{}}>
          <TouchableOpacity
            onPress={() => handleFavorite(product.id)}
            activeOpacity={0.4}
            style={styles.favoriteContainer}>
            <HeartIcon isFocused={isFavorite} focusedColor={'#FF8181'} />
          </TouchableOpacity>
          <ImageCarousel images={product.images} />
        </View>
        <View style={styles.priceInfoMainContainer}>
          <View style={{ flexDirection: 'row' }}>
            <TextMedium style={styles.price}>{`$${product.price}`}</TextMedium>
            {/* <TextRegular style={styles.unit}>{'/KG'}</TextRegular> */}
          </View>
          <View style={styles.discountContainer}>
            <TextRegular style={{ color: Colors.white }}>
              {`${product.discountPercentage}% OFF`}
            </TextRegular>
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <View style={styles.buttonSubContainer}>
            <Buttom
              title="Add To Cart"
              onPress={() => dispatch(addToCart(product))}
            />
          </View>
          <View style={styles.buttonSubContainer}>
            <Buttom title="Buy Now" onPress={() => {}} filled />
          </View>
        </View>
        <View style={{ paddingHorizontal: widthPercentageToDP(3) }}>
          <TextRegular style={styles.detailText}>Detail</TextRegular>
          <TextRegular
            style={[
              styles.detailText,
              {
                color: Colors.textGray,
              },
            ]}>
            {product.description}
          </TextRegular>
        </View>
      </VirtualizedView>
    </FullScreenView>
  )
}

export { ProductDetailScreen }

const styles = StyleSheet.create({
  ratingContainer: {
    alignItems: 'flex-start',
    paddingHorizontal: widthPercentageToDP(5),
    flexDirection: 'row',
    marginVertical: heightPercentageToDP(2),
  },
  reviewText: {
    color: Colors.grayScale,
    fontSize: RFValue(14),
    marginLeft: 10,
  },
  favoriteContainer: {
    position: 'absolute',
    backgroundColor: Colors.white,
    width: widthPercentageToDP(14),
    height: widthPercentageToDP(14),
    zIndex: 1,
    right: 25,
    top: 25,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  priceInfoMainContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: widthPercentageToDP(3),
    marginVertical: widthPercentageToDP(5),
  },
  price: {
    color: Colors.secondaryBlue,
    fontSize: RFValue(14),
    fontWeight: '800',
  },
  unit: {
    color: Colors.secondaryBlue,
    fontSize: RFValue(14),
  },
  discountContainer: {
    backgroundColor: Colors.secondaryBlue,
    paddingVertical: widthPercentageToDP(1),
    paddingHorizontal: widthPercentageToDP(5),
    borderRadius: 15,
    marginLeft: widthPercentageToDP(3),
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: widthPercentageToDP(2),
  },
  buttonSubContainer: {
    width: '50%',
    paddingHorizontal: '5%',
  },
  detailText: {
    fontSize: RFValue(16),
    color: Colors.black,
    marginTop: widthPercentageToDP(2),
  },
})
