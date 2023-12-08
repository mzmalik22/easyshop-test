import React from 'react'
import { StyleSheet, View } from 'react-native'
import { heightPercentageToDP } from 'react-native-responsive-screen'
import { FullScreenView } from '@components'
import { Colors } from '@styles'
import { InfoSection, OfferSection, ProductList } from './components'

const HomeScreen = () => {
  return (
    <FullScreenView style={styles.mainContainer}>
      <View style={{ backgroundColor: 'white' }}>
        <InfoSection />
        <OfferSection />
        <ProductList />
        <View style={{ height: heightPercentageToDP(10) }} />
      </View>
    </FullScreenView>
  )
}

export { HomeScreen }
const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: Colors.primaryBlue,
  },
})
