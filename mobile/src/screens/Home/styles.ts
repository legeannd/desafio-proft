import styled from 'styled-components/native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { theme } from '../../themes'
import { FlatList } from 'react-native'
import { CardData } from '../../components/Card'

export const HomeContainer = styled(SafeAreaView)`
  flex: 1;
  background-color: ${theme.white};
`
export const HeaderContainer = styled.View`
  padding: 24px 24px 0 24px;
  line-height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`
export const AddCardButton = styled.TouchableOpacity`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const HomeTitle = styled.Text`
  color: ${theme.title};
  font-size: 40px;
  font-family: 'Raleway_700Bold';
`

export const CardsList = styled(FlatList<CardData>)`
  margin-top: 32px;
  flex-grow: 0;
`

export const EmptyCardListContainer = styled.View`
  width: 100%;
  display: flex;
  align-items: center;
  margin-top: 32px;
  flex-grow: 0;
`

export const ActionsContainer = styled.View`
  width: 100%;
  padding: 0 24px;
`

export const ActionsText = styled.Text`
  font-family: 'Raleway_700Bold';
  font-size: 16px;
  color: ${theme['gray-500']};
  margin-bottom: 24px;
`

export const ActionsSpacingContainer = styled.View`
  width: 100%;
  height: 16px;
`

export const ActionButton = styled.TouchableOpacity`
  padding: 20px;
  background: ${theme.white};
  border-radius: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
`

export const ActionButtonText = styled.Text`
  font-family: 'Raleway_700Bold';
  font-size: 14px;
  margin-left: 20px;
  text-transform: uppercase;
`
