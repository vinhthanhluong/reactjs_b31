import { createSlice } from "@reduxjs/toolkit";
const jsonData = [
  { id: 1, name: "thanhLV", phone: "0123", email: "abc@gmail.com" },
  { id: 2, name: "hasqwe", phone: "456", email: "abc2@gmail.com" },
  { id: 3, name: "thanhLV3", phone: "678", email: "abc3@gmail.com" },
];

const initialState = {
  dataList: [],
  dataObj: {},
  isEditBtn: false,
};

export const studentSlice = createSlice({
  name: "studentSlice",
  initialState,
  reducers: {
    addStudent: (state, action) => {
      const isCheck = state.dataList.find(
        (item) => item.id == action.payload.id
      );
      if (!isCheck) {
        state.dataList = [...state.dataList, action.payload];
      }
    },
    deleteStudent: (state, action) => {
      state.dataList = state.dataList.filter(
        (item) => item.id !== action.payload.id
      );
    },
    getIdStudent: (state, action) => {
      state.dataObj = action.payload;
    },
    editStudent: (state, action) => {
      state.dataList = state.dataList.map((item) => {
        return item.id === action.payload.id
          ? { ...item, ...action.payload }
          : item;
      });
    },
    showBtn: (state, action) => {
      state.isEditBtn = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addStudent, deleteStudent, getIdStudent, editStudent, showBtn } =
  studentSlice.actions;

export default studentSlice.reducer;
