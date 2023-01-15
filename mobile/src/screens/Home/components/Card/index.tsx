import {
  Canvas,
  RoundedRect,
  LinearGradient,
  vec,
  useFont,
  Text,
} from '@shopify/react-native-skia'
import { Dimensions } from 'react-native'
import { theme } from '../../../../themes'

import RalewayBold from '../../../../assets/fonts/Raleway-Bold.ttf'
import RalewayMedium from '../../../../assets/fonts/Raleway-Medium.ttf'
import RobotoBold from '../../../../assets/fonts/Roboto-Bold.ttf'
import { Loading } from '../../../../components/Loading'

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
  const ralewayBoldFont = useFont(RalewayBold, 20)
  const ralewayMediumFont = useFont(RalewayMedium, 16)
  const robotoBoldFont = useFont(RobotoBold, 20)

  if (
    ralewayBoldFont === null ||
    ralewayMediumFont === null ||
    robotoBoldFont === null
  ) {
    return <Loading />
  }

  const ratio = 10 / 16

  const width = Dimensions.get('window').width - 48
  const height = width * ratio

  return (
    <Canvas style={{ width, height }}>
      <RoundedRect x={0} y={0} width={width} height={height} r={15} />
      <LinearGradient
        start={vec(0, 256)}
        end={vec(256, 0)}
        colors={theme.linear}
      />
      <Text
        x={20}
        y={45}
        text={data.name}
        font={ralewayBoldFont}
        color={theme.white}
      />
      <Text
        x={width - 110}
        y={45}
        text={data.flag}
        font={ralewayBoldFont}
        color={theme.white}
      />
      <Text
        x={20}
        y={height - 70}
        text={data.ownerName}
        font={ralewayMediumFont}
        color={theme.white}
      />
      <Text
        x={20}
        y={height - 50}
        text={data.cardNumber}
        font={robotoBoldFont}
        color={theme.white}
      />
    </Canvas>
  )
}
