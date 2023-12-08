import React from 'react'
import { RFValue } from 'react-native-responsive-fontsize'
import Svg, { SvgProps, Path, G } from 'react-native-svg'
type CombinedProps = SvgProps & { isFavorite?: boolean }

const FavoriteIcon = (props: CombinedProps) => (
  <Svg
    width={RFValue(15)}
    height={RFValue(14)}
    viewBox="0 0 15 14"
    fill="none"
    {...props}>
    <Path
      d="M6.55689 12.0199L6.55617 12.0193C4.67274 10.3114 3.15003 8.9295 2.09215 7.63615C1.04001 6.34981 0.5 5.21213 0.5 4.00136C0.5 2.03674 2.03674 0.5 4.00136 0.5C5.11585 0.5 6.19333 1.02126 6.89453 1.84469L7.2752 2.29172L7.65588 1.84469C8.35708 1.02126 9.43455 0.5 10.549 0.5C12.5137 0.5 14.0504 2.03674 14.0504 4.00136C14.0504 5.21214 13.5104 6.34984 12.4581 7.63719C11.4005 8.93119 9.87829 10.3144 7.99553 12.0254L7.99492 12.0259L7.99384 12.0269L7.27648 12.675L6.55689 12.0199Z"
      stroke={props.isFavorite ? '#FF8181' : '#323743'}
      fill={props.isFavorite ? '#FF8181' : '#ffff'}
    />
  </Svg>
)
export { FavoriteIcon }
