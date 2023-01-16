import { SafeAreaView } from 'react-native-safe-area-context'
import styled from 'styled-components/native'
import { theme } from '../../themes'

export const AddCardContainer = styled(SafeAreaView)`
  flex: 1;
  padding: 24px;
  background: ${theme.white};
  display: flex;
  justify-content: space-between;
`

export const AddCardHeaderContainer = styled.View`
  margin-bottom: 32px;
`

export const AddCardTitle = styled.Text`
  color: ${theme.title};
  font-size: 20px;
  font-family: 'Raleway_700Bold';
`

export const AddCardInputGroup = styled.View`
  margin-top: 32px;
`

export const InputContainer = styled.View`
  margin-bottom: 10px;
`

export const Label = styled.Text`
  color: ${theme.title};
  font-size: 10px;
  font-family: 'Raleway_600SemiBold';
  text-transform: uppercase;
  margin-bottom: 6px;
`

interface InputProps {
  hasError: boolean
}

export const Input = styled.TextInput<InputProps>`
  border: 1px solid
    ${(props) => (props.hasError ? theme.red : theme['gray-100'])};
  border-radius: 6px;
  font-family: 'Roboto_400Regular';
  font-size: 16px;
  color: ${theme.title};
  padding: 12px 0 12px 14px;
`

export const AddCardButton = styled.TouchableOpacity`
  width: 100%;
  background: ${theme.blue};
  padding: 24px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
`

export const AddCardButtonText = styled.Text`
  font-size: 15px;
  font-family: 'Raleway_700Bold';
  color: ${theme.white};
  text-transform: uppercase;
`
