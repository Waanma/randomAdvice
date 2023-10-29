import * as React from "react"
import Svg, { G, Path, Rect } from "react-native-svg"
const SvgComponent = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" {...props}>
    <G fillRule="evenodd">
      <Path d="M0 8h122v1H0zm173 0h122v1H173z" />
      <G transform="translate(138)">
        <Rect width={6} height={16} rx={3} />
        <Rect width={6} height={16} x={14} rx={3} />
      </G>
    </G>
  </Svg>
)
export default SvgComponent
