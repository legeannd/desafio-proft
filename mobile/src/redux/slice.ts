import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface CardData {
  id: string
  name: string
  ownerName: string
  cardNumber: string
  flag: string
}
interface CardState {
  cards: CardData[]
}

const initialState: CardState = {
  cards: [],
}

export const cardSlice = createSlice({
  name: 'card',
  initialState,
  reducers: {
    addCard: (state, action: PayloadAction<CardData>) => {
      state.cards.push(action.payload)
    },
    removeCard: (state, action: PayloadAction<string>) => {
      const cardIndex = state.cards.findIndex(
        (card) => card.id === action.payload,
      )

      if (cardIndex !== -1) {
        state.cards.splice(cardIndex, 1)
      }
    },
  },
})

export const { addCard, removeCard } = cardSlice.actions
export const cardReducer = cardSlice.reducer
