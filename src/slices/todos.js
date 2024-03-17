import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
  name: "todooperation",
  initialState: { todolist: ["Gautham","Nithya"], todolistSize: 0 },
  reducers: {
    addtodo(state, action) {
      state.todolist.push(action.payload);
      state.todolistSize = state.todolist.length;
    },
    removetodo(state, action) {
      state.pop();
    },
  },
});

export const { addtodo, removetodo } = todoSlice.actions;
export default todoSlice.reducer;
