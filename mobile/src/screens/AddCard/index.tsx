import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Card, CardData } from '../../components/Card'
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
import { useForm, Controller, useWatch } from 'react-hook-form'
import { addCard } from '../../redux/slice'
import { useAppDispatch } from '../../redux/hooks'
import { ScrollView } from 'react-native-gesture-handler'

const cardRegex = /[0-9]{4} {0,1}[0-9]{4} {0,1}[0-9]{4} {0,1}[0-9]{4}/

const AddCardFormSchema = z.object({
  name: z.string().min(3).max(20),
  ownerName: z.string().min(3).max(30),
  cardNumber: z.string().max(20).regex(cardRegex),
})

type AddCardFormInputs = z.infer<typeof AddCardFormSchema>

export function AddCard() {
  const dispatch = useAppDispatch()
  const {
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm<AddCardFormInputs>({
    resolver: zodResolver(AddCardFormSchema),
    defaultValues: {
      cardNumber: '',
      name: '',
      ownerName: '',
    },
  })

  const { name, ownerName, cardNumber } = useWatch({ control })

  const cardId = Date.now().toString()

  function handleAddNewCard(data: AddCardFormInputs) {
    const cardData: CardData = {
      ...data,
      id: cardId,
      flag: 'Bandeira',
    }
    dispatch(addCard(cardData))

    reset()
  }

  return (
    <AddCardContainer>
      <ScrollView showsVerticalScrollIndicator={false}>
        <AddCardHeaderContainer>
          <AddCardTitle>Adicionar cartão</AddCardTitle>
        </AddCardHeaderContainer>
        <Card
          data={{
            id: cardId,
            name: name || '',
            cardNumber: cardNumber || '',
            ownerName: ownerName || '',
            flag: 'Bandeira',
          }}
          isCardNumberHidden={false}
        />
        <AddCardInputGroup>
          <InputContainer>
            <Label>Nome do cartão</Label>
            <Controller
              control={control}
              render={({ field: { onChange, onBlur, value } }) => (
                <Input
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  hasError={!!errors.name}
                />
              )}
              name="name"
            />
          </InputContainer>
          <InputContainer>
            <Label>Nome completo</Label>
            <Controller
              control={control}
              render={({ field: { onChange, onBlur, value } }) => (
                <Input
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  hasError={!!errors.ownerName}
                />
              )}
              name="ownerName"
            />
          </InputContainer>
          <InputContainer>
            <Label>Número</Label>
            <Controller
              control={control}
              render={({ field: { onChange, onBlur, value } }) => (
                <Input
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  keyboardType="numbers-and-punctuation"
                  hasError={!!errors.cardNumber}
                />
              )}
              name="cardNumber"
            />
          </InputContainer>
        </AddCardInputGroup>
      </ScrollView>
      <AddCardButton onPress={handleSubmit(handleAddNewCard)}>
        <AddCardButtonText>Adicionar</AddCardButtonText>
      </AddCardButton>
    </AddCardContainer>
  )
}
