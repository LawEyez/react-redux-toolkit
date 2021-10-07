import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CounterState {
  value: number;
}

const initialState: CounterState = {
  value: 5,
}

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    // increment
    incremented(state) {
      // Emmer makes state immutable under the hood
      state.value++
    },

    // amount added
    amountAdded(state, action: PayloadAction<number>) {
      state.value += action.payload
    }

    // decrement

  }
})

export const { incremented, amountAdded } = counterSlice.actions

export default counterSlice.reducer