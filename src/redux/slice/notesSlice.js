import { createSlice, nanoid } from '@reduxjs/toolkit';

export const notesSlice = createSlice({
  name: 'notes',
  initialState: {
    items: localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [],
    filterKey: 'all'
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
    },
    filter: {
      reducer: (state, action) => {
        state.filterKey = action.payload;
      }
    }
  }
})

export const selectTodosFiltered = (state) => {
  if (state.notes.filterKey === 'all') {
    return state.notes.items;
  } 

  return state.notes.items.filter((note) => 
    note.description.toLowerCase().includes(state.notes.filterKey.toLowerCase()));
}
export const { addTodo, filter } = notesSlice.actions;
export default notesSlice.reducer;