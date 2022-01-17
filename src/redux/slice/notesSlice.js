import { createSlice, nanoid } from '@reduxjs/toolkit';

export const notesSlice = createSlice({
  name: 'notes',
  initialState: {
    items: localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [],
  },
  reducers: {
    addTodo: {
      reducer: (state, action) => {
        state.items.push(action.payload);
        localStorage.setItem('items', JSON.stringify(state.items));
      },
      prepare: ({ description, color }) => {
        return {
          payload: {
            id: nanoid(),
            color,
            description
          }
        }
      }
    }
  }
})

export const { addDescription, addColor, addTodo } = notesSlice.actions;
export default notesSlice.reducer;