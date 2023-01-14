import styled from 'styled-components/native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { theme } from '../../themes'
import { FlatList } from 'react-native'
import { CardData } from './components/Card'

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
`
