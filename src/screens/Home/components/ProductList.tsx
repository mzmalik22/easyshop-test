import React from 'react'
import { FlatList, StyleSheet, View } from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize'
import { getProductList, useProductSelector } from '@store'
import { TextRegular } from '@components'
import { ProductCard } from './ProductCard'
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen'
import { usePagination } from '@hooks'

const ProductList = () => {
  const { products, onEndReached } = useProductSelector(state => state)
  const { refreshing, onRefresh, handleLoadMore } = usePagination(
    getProductList,
    onEndReached,
  )
  return (
    <View style={styles.mainContainer}>
      <TextRegular style={{ fontSize: RFValue(30) }}>Recommended</TextRegular>
      <FlatList
        data={products}
        renderItem={({ item, index }) => (
          <ProductCard product={item} key={index} />
        )}
        numColumns={2}
        columnWrapperStyle={{
          justifyContent: 'space-between',
        }}
        refreshing={refreshing}
        onRefresh={onRefresh}
        onEndReachedThreshold={0.5}
        onEndReached={handleLoadMore}
        contentContainerStyle={{}}
        ItemSeparatorComponent={() => (
          <View style={{ height: widthPercentageToDP(5) }} />
        )}
        ListFooterComponent={() => (
          <View style={{ height: widthPercentageToDP(5) }} />
        )}
        showsVerticalScrollIndicator={false}
      />
    </View>
  )
}

export { ProductList }

const styles = StyleSheet.create({
  mainContainer: {
    paddingHorizontal: widthPercentageToDP(5),
    height: heightPercentageToDP(40),
  },
})
