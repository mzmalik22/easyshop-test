import React from 'react'
import { RFValue } from 'react-native-responsive-fontsize'
import Svg, { SvgProps, Path } from 'react-native-svg'
const ImageIcon = (props: SvgProps) => (
  <Svg
    width={RFValue(65)}
    height={RFValue(65)}
    viewBox="0 0 60 60"
    fill="none"
    {...props}>
    <Path
      d="M1.66663 13C1.66663 9.99421 2.86067 7.11154 4.98608 4.98612C7.1115 2.86071 9.99417 1.66667 13 1.66667H47C50.0057 1.66667 52.8884 2.86071 55.0138 4.98612C57.1392 7.11154 58.3333 9.99421 58.3333 13V47C58.3333 50.0058 57.1392 52.8885 55.0138 55.0139C52.8884 57.1393 50.0057 58.3333 47 58.3333H13C9.99417 58.3333 7.1115 57.1393 4.98608 55.0139C2.86067 52.8885 1.66663 50.0058 1.66663 47V13Z"
      stroke="white"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <Path
      d="M20.0833 27.1667C23.9954 27.1667 27.1667 23.9954 27.1667 20.0833C27.1667 16.1713 23.9954 13 20.0833 13C16.1713 13 13 16.1713 13 20.0833C13 23.9954 16.1713 27.1667 20.0833 27.1667Z"
      stroke="white"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <Path
      d="M37.157 31.7596L13 58.3335H47.3768C50.2827 58.3335 53.0695 57.1791 55.1243 55.1244C57.179 53.0696 58.3333 50.2828 58.3333 47.377V47.0001C58.3333 45.6798 57.8375 45.1726 56.945 44.1951L45.5267 31.7426C44.9945 31.1621 44.3472 30.6989 43.626 30.3826C42.9048 30.0662 42.1256 29.9036 41.3381 29.9052C40.5506 29.9068 39.772 30.0726 39.0521 30.3918C38.3322 30.7111 37.6868 31.177 37.157 31.7596V31.7596Z"
      stroke="white"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </Svg>
)
export { ImageIcon }
