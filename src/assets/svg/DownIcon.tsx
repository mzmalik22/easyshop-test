import React from 'react'
import { RFValue } from 'react-native-responsive-fontsize'
import Svg, { SvgProps, Path } from 'react-native-svg'

const DownIcon = (props: SvgProps) => (
  <Svg
    width={RFValue(5)}
    height={RFValue(9)}
    viewBox="0 0 5 9"
    fill="none"
    {...props}>
    <Path
      d="M4.25062 0.557249C4.05962 0.557249 3.86762 0.630249 3.72162 0.776249L0.234623 4.24625C0.0936236 4.38725 0.0146236 4.57825 0.0146236 4.77825C0.0146236 4.97725 0.0936236 5.16825 0.234623 5.30925L3.72162 8.78125C4.01462 9.07325 4.48862 9.07325 4.78162 8.77925C5.07362 8.48525 5.07262 8.01025 4.77962 7.71825L1.82662 4.77825L4.77962 1.83825C5.07262 1.54625 5.07362 1.07225 4.78162 0.77825C4.63562 0.63025 4.44262 0.557249 4.25062 0.557249Z"
      fill="#1E222B"
    />
  </Svg>
)
export { DownIcon }
