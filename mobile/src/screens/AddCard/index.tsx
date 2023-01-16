import { useNavigation } from '@react-navigation/native'
import { useState } from 'react'
import { KeyboardAvoidingView, Platform } from 'react-native'
import { Card } from '../../components/Card'
import {
  AddCardButton,
  AddCardButtonText,
  AddCardContainer,
  AddCardHeaderContainer,
  AddCardInputGroup,
  AddCardTitle,
  Input,
  InputContainer,
  Label,
} from './styles'

export function AddCard() {
  const navigation = useNavigation()

  const [name, setName] = useState('')
  const [ownerName, setOwnerName] = useState('')
  const [cardNumber, setCardNumber] = useState('')
  const cardId = Date.now().toString()

  function handleAddNewCard() {
    navigation.navigate('home')
  }

  return (
    <AddCardContainer>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <AddCardHeaderContainer>
          <AddCardTitle>Adicionar cartão</AddCardTitle>
        </AddCardHeaderContainer>
        <Card
          data={{
            id: cardId,
            name,
            cardNumber,
            ownerName,
            flag: 'Bandeira',
          }}
          isCardNumberHidden={false}
        />
        <AddCardInputGroup>
          <InputContainer>
            <Label>Nome do cartão</Label>
            <Input value={name} onChangeText={setName} />
          </InputContainer>
          <InputContainer>
            <Label>Nome completo</Label>
            <Input value={ownerName} onChangeText={setOwnerName} />
          </InputContainer>
          <InputContainer>
            <Label>Número</Label>
            <Input value={cardNumber} onChangeText={setCardNumber} />
          </InputContainer>
        </AddCardInputGroup>
      </KeyboardAvoidingView>
      <AddCardButton onPress={handleAddNewCard}>
        <AddCardButtonText>Adicionar</AddCardButtonText>
      </AddCardButton>
    </AddCardContainer>
  )
}
