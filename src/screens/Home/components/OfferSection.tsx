import React from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize'
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen'
import { OfferCard } from './OfferCard'

const OfferSection = () => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.cardContainer}>
        <FlatList
          data={[1, 2]}
          renderItem={() => <OfferCard />}
          horizontal={true}
          ItemSeparatorComponent={() => (
            <View style={{ width: widthPercentageToDP(5) }} />
          )}
          showsHorizontalScrollIndicator={false}
          ListFooterComponent={() => (
            <View style={{ width: widthPercentageToDP(5) }} />
          )}
          ListHeaderComponent={() => (
            <View style={{ width: widthPercentageToDP(5) }} />
          )}
        />
      </View>
    </View>
  )
}

export { OfferSection }

const styles = StyleSheet.create({
  mainContainer: {
    height: heightPercentageToDP(22),
  },
  cardContainer: {
    paddingVertical: RFValue(21),
  },
})
