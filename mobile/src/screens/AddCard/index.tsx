import { useNavigation } from '@react-navigation/native'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
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
import { useForm, Controller } from 'react-hook-form'

const cardRegex = /[0-9]{4} {0,1}[0-9]{4} {0,1}[0-9]{4} {0,1}[0-9]{4}/

const AddCardFormSchema = z.object({
  name: z.string().min(3).max(20),
  ownerName: z.string().min(3).max(30),
  cardNumber: z.string().max(20).regex(cardRegex),
})

type AddCardFormInputs = z.infer<typeof AddCardFormSchema>

export function AddCard() {
  const navigation = useNavigation()

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

  const cardId = Date.now().toString()

  function handleAddNewCard(data: AddCardFormInputs) {
    console.log(data)
    // navigation.navigate('home')

    reset()
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
            name: '',
            cardNumber: '',
            ownerName: '',
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
                  hasError={!!errors.cardNumber}
                />
              )}
              name="cardNumber"
            />
          </InputContainer>
        </AddCardInputGroup>
      </KeyboardAvoidingView>
      <AddCardButton onPress={handleSubmit(handleAddNewCard)}>
        <AddCardButtonText>Adicionar</AddCardButtonText>
      </AddCardButton>
    </AddCardContainer>
  )
}
