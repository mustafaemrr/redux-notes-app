import { createSlice, nanoid } from '@reduxjs/toolkit';

export const notesSlice = createSlice({
  name: 'notes',
  initialState: {
    items: localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [],
    description: null,
    color: null
  },
  reducers: {
    addDescription: {
      reducer: (state, action) => {
        state.description = action.payload;
      }
    },
    addColor: {
      reducer: (state, action) => {
        state.color = action.payload;
      }
    },
    addTodo: {
      reducer: (state) => {
        state.items.push({ id: nanoid(), description:state.description, color:state.color });
        localStorage.setItem('items', JSON.stringify(state.items));
      }
    }
  }
})

export const { addDescription, addColor, addTodo } = notesSlice.actions;
export default notesSlice.reducer;