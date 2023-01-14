import {
  Canvas,
  RoundedRect,
  LinearGradient,
  vec,
} from '@shopify/react-native-skia'
import { Dimensions } from 'react-native'
import { theme } from '../../../../themes'

export interface CardData {
  name: string
  flag: string
  ownerName: string
  cardNumber: string
}

interface CardProps {
  data: CardData
}

export function Card({ data }: CardProps) {
  const ratio = 10 / 16

  const width = Dimensions.get('window').width - 48
  const height = width * ratio

  console.log(width, height)

  return (
    <Canvas style={{ flex: 1, width, height }}>
      <RoundedRect x={0} y={0} width={width} height={height} r={15} />
      <LinearGradient
        start={vec(0, 256)}
        end={vec(256, 0)}
        colors={theme.linear}
      />
    </Canvas>
  )
}
