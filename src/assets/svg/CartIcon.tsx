import React from 'react'
import { StyleSheet, View } from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize'
import { widthPercentageToDP } from 'react-native-responsive-screen'
import Svg, { SvgProps, Path } from 'react-native-svg'
import { TextRegular } from '@components'
import { Colors } from '@styles'
import { useCartSelector } from '@store'

const CartIcon = (props: SvgProps) => {
  const { items } = useCartSelector(state => state)
  return (
    <View>
      <Svg
        width={RFValue(18)}
        height={RFValue(20)}
        viewBox="0 0 18 20"
        fill="none"
        {...props}>
        <Path
          d="M13.4485 5.9995C10.2931 6.51124 7.63269 6.49623 4.56871 5.99535C2.47793 5.65356 0.597986 7.484 1.09451 9.53958L2.86182 16.8562C3.16559 18.1138 4.29303 19 5.58921 19H12.4423C13.7385 19 14.8659 18.1138 15.1697 16.8562L16.9336 9.55363C17.4309 7.49478 15.5431 5.65982 13.4485 5.9995Z"
          stroke={props.color ? props.color : 'white'}
          stroke-width="1.5"
        />
        <Path
          d="M5 8.83231L5.00001 4.49999C5.00001 2.567 6.56701 1 8.50001 1H9.5C11.433 1 13 2.567 13 4.5V9"
          stroke={props.color ? props.color : 'white'}
          stroke-width="1.5"
          stroke-linecap="round"
        />
      </Svg>
      {items.length > 0 && (
        <View style={styles.countContainer}>
          <TextRegular style={styles.countText}>{items.length}</TextRegular>
        </View>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  countContainer: {
    backgroundColor: Colors.secondaryYellow,
    position: 'absolute',
    height: widthPercentageToDP(5),
    width: widthPercentageToDP(5),
    borderRadius: widthPercentageToDP(2.5),
    left: 10,
    top: -10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  countText: { fontSize: RFValue(12), color: Colors.white },
})
export { CartIcon }
