import { Colors } from '@styles'
import React from 'react'
import { RFValue } from 'react-native-responsive-fontsize'
import Svg, { SvgProps, Path, Circle } from 'react-native-svg'
type CombinedProps = SvgProps & { isFocused?: boolean }

const HomeIcon = (props: CombinedProps) => (
  <Svg
    width={RFValue(21)}
    height={RFValue(23)}
    viewBox="0 0 21 23"
    fill="none"
    {...props}>
    <Path
      d="M10.4532 21.6164L10.5 21.6194L10.5468 21.6164L15.779 21.2894C18.1517 21.1411 19.9997 19.1728 19.9983 16.7955L19.9947 10.8105C19.9941 9.66516 19.5566 8.56315 18.7716 7.72908L13.7709 2.41585C11.9942 0.528046 8.9939 0.52805 7.21714 2.41586L2.2231 7.72203C1.43746 8.55677 1 9.65986 1 10.8062V16.7981C1 19.1744 2.84764 21.1411 5.2193 21.2893L10.4532 21.6164Z"
      fill={props.isFocused ? Colors.activeBottomTabIcon : '#F8F9FB'}
      stroke-width="1.5"
      stroke-linecap="round"
    />
    <Path
      d="M10.4532 21.6164L10.5 21.6194L10.5468 21.6164L15.779 21.2894C18.1517 21.1411 19.9997 19.1728 19.9983 16.7955L19.9947 10.8105C19.9941 9.66516 19.5566 8.56315 18.7716 7.72908L13.7709 2.41585C11.9942 0.528046 8.9939 0.52805 7.21714 2.41586L2.2231 7.72203C1.43746 8.55677 1 9.65986 1 10.8062V16.7981C1 19.1744 2.84764 21.1411 5.2193 21.2893L10.4532 21.6164Z"
      stroke={props.isFocused ? Colors.activeBottomTabIcon : '#1E222B'}
      stroke-opacity="0.2"
      stroke-width="1.5"
      stroke-linecap="round"
    />
    <Path
      d="M7 17V14.5146C7 14.1917 7.15597 13.8886 7.41876 13.7009L9.91876 11.9152C10.2665 11.6668 10.7335 11.6668 11.0812 11.9152L13.5812 13.7009C13.844 13.8886 14 14.1917 14 14.5146V17"
      stroke={'#1E222B'}
      stroke-width="1.6"
      stroke-linecap="round"
    />
  </Svg>
)
export { HomeIcon }
