import { Octicons, Ionicons } from '@expo/vector-icons/'
import { useCallback, useState } from 'react'
import { ListRenderItem, View, ViewToken } from 'react-native'
import { Shadow } from 'react-native-shadow-2'
import { theme } from '../../themes'
import { Card, CardData } from '../../components/Card'
import {
  ActionButton,
  ActionButtonText,
  ActionsContainer,
  ActionsSpacingContainer,
  ActionsText,
  AddCardButton,
  CardsList,
  HeaderContainer,
  HomeContainer,
  HomeTitle,
} from './styles'
import { Indicator } from './components/Indicator'

type onViewableItemsChangedType = (info: {
  viewableItems: ViewToken[]
  changed: ViewToken[]
}) => void

export function Home() {
  const [visibleCardIndex, setVisibleCardIndex] = useState(0)
  const [cardNumberHiddenIndex, setCardNumberHiddenIndex] = useState<Number[]>(
    [],
  )

  const renderItem: ListRenderItem<CardData> = ({ item, index }) => (
    <Card
      data={item}
      isCardNumberHidden={cardNumberHiddenIndex.includes(index)}
    />
  )
  const cards = [
    {
      id: '1',
      name: 'Nome do cartão',
      flag: 'Bandeira',
      ownerName: 'Nome completo',
      cardNumber: '1234 1234 1234 1234',
    },
    {
      id: '2',
      name: 'Nome do cartão 2',
      flag: 'Bandeira',
      ownerName: 'Nome completo',
      cardNumber: '1234 1234 1234 1234',
    },
    {
      id: '3',
      name: 'Nome do cartão 3',
      flag: 'Bandeira',
      ownerName: 'Nome completo',
      cardNumber: '1234 1234 1234 1234',
    },
  ]

  const onViewableItemsChanged = useCallback<onViewableItemsChangedType>(
    ({ viewableItems }) => {
      if (viewableItems.length !== 0) {
        const index = viewableItems[0].index
        index !== null && index >= 0 && setVisibleCardIndex(index)
      }
    },
    [],
  )

  function handleHideCardNumber() {
    if (cardNumberHiddenIndex.includes(visibleCardIndex)) {
      const newCardNumberHiddenIndex = cardNumberHiddenIndex.filter(
        (index) => index !== visibleCardIndex,
      )
      setCardNumberHiddenIndex(newCardNumberHiddenIndex)
    } else {
      setCardNumberHiddenIndex((value) => [...value, visibleCardIndex])
    }
  }

  return (
    <HomeContainer>
      <HeaderContainer>
        <HomeTitle>Cartões</HomeTitle>
        <Shadow
          style={{ borderRadius: 10, width: 45, height: 45 }}
          distance={16}
          startColor="#00000009"
          endColor={theme.white}
        >
          <AddCardButton>
            <Octicons name="plus" size={20} />
          </AddCardButton>
        </Shadow>
      </HeaderContainer>
      <CardsList
        data={cards}
        renderItem={renderItem}
        keyExtractor={(item: CardData) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          paddingLeft: 24,
          paddingRight: 24,
        }}
        ItemSeparatorComponent={() => <View style={{ width: 16 }} />}
        onViewableItemsChanged={onViewableItemsChanged}
        viewabilityConfig={{
          itemVisiblePercentThreshold: 60,
        }}
      />
      <Indicator size={cards.length} currentIndex={visibleCardIndex} />
      <ActionsContainer>
        <ActionsText>Ações</ActionsText>
        <Shadow
          style={{ borderRadius: 10, width: '100%' }}
          distance={8}
          startColor="#00000009"
          endColor={theme.white}
        >
          <ActionButton onPress={handleHideCardNumber}>
            {cardNumberHiddenIndex.includes(visibleCardIndex) ? (
              <>
                <Ionicons
                  name="eye-off-outline"
                  size={24}
                  color={theme['action-text']}
                />
                <ActionButtonText>Mostrar número</ActionButtonText>
              </>
            ) : (
              <>
                <Ionicons
                  name="eye-outline"
                  size={24}
                  color={theme['action-text']}
                />
                <ActionButtonText>Esconder número</ActionButtonText>
              </>
            )}
          </ActionButton>
        </Shadow>
        <ActionsSpacingContainer />
        <Shadow
          style={{ borderRadius: 10, width: '100%' }}
          distance={8}
          startColor="#00000009"
          endColor={theme.white}
        >
          <ActionButton>
            <Ionicons name="trash-outline" size={24} color={theme.red} />
            <ActionButtonText style={{ color: theme.red }}>
              Apagar cartão
            </ActionButtonText>
          </ActionButton>
        </Shadow>
      </ActionsContainer>
    </HomeContainer>
  )
}
