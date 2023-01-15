import { IndicatorContainer, IndicatorDot } from './styles'

interface IndicatorProps {
  size: number
  currentIndex: number
}

export function Indicator({ size, currentIndex }: IndicatorProps) {
  return (
    <IndicatorContainer>
      {size !== 0 &&
        new Array(size)
          .fill(0)
          .map((_, index) => (
            <IndicatorDot key={index} active={currentIndex === index} />
          ))}
    </IndicatorContainer>
  )
}
