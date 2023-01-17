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
  cardNumberHiddenIndex: Number[]
}

const initialState: CardState = {
  cards: [],
  cardNumberHiddenIndex: [],
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
    toggleCardNumberHiddenIndex: (state, action: PayloadAction<number>) => {
      if (state.cardNumberHiddenIndex.includes(action.payload)) {
        const newCardNumberHiddenIndex = state.cardNumberHiddenIndex.filter(
          (index) => index !== action.payload,
        )
        state.cardNumberHiddenIndex = newCardNumberHiddenIndex
      } else {
        state.cardNumberHiddenIndex.push(action.payload)
      }
    },
  },
})

export const { addCard, removeCard, toggleCardNumberHiddenIndex } =
  cardSlice.actions
export const cardReducer = cardSlice.reducer
