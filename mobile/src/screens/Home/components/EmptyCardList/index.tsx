import {
  Canvas,
  LinearGradient,
  RoundedRect,
  Text,
  useFont,
  vec,
} from '@shopify/react-native-skia'
import { Dimensions, View } from 'react-native'
import { Loading } from '../../../../components/Loading'
import { theme } from '../../../../themes'
import RobotoBold from '../../../../assets/fonts/Roboto-Bold.ttf'

export function EmptyCardList() {
  const robotoBoldFont = useFont(RobotoBold, 20)

  const ratio = 10 / 16

  const width = Dimensions.get('window').width - 48
  const height = width * ratio

  const center = vec(width / 2 - 50, height / 2 - 100)

  if (robotoBoldFont === null) {
    return (
      <View style={{ width, height }}>
        <Loading />
      </View>
    )
  }

  return (
    <Canvas style={{ width, height }}>
      <RoundedRect x={0} y={0} width={width} height={height} r={15} />
      <LinearGradient
        start={vec(0, 256)}
        end={vec(256, 0)}
        colors={theme['linear-alt']}
      />
      <Text
        x={center.x - 70}
        y={center.y + 100}
        text="Adicione um cartão à lista"
        font={robotoBoldFont}
        color={theme.white}
      />
    </Canvas>
  )
}
