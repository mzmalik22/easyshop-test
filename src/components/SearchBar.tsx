import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize'
import { heightPercentageToDP } from 'react-native-responsive-screen'
import { SearchIcon } from '@assets/svg'
import { Colors } from '@styles'

const SearchBar = () => {
  return (
    <View style={styles.mainContainer}>
      <SearchIcon />
      <Text style={styles.text}>Search Products or store</Text>
    </View>
  )
}

export { SearchBar }

const styles = StyleSheet.create({
  mainContainer: {
    width: '95%',
    backgroundColor: Colors.secondaryBlue,
    height: heightPercentageToDP(7),
    borderRadius: 30,
    paddingHorizontal: '7%',
    alignItems: 'center',
    flexDirection: 'row',
  },
  text: {
    fontSize: RFValue(14),
    color: Colors.textGray,
    marginLeft: 15,
  },
})
