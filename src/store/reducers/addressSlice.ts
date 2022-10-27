import { createSlice } from "@reduxjs/toolkit";

interface IAddressSlice {
  isLoading: boolean;
  addresses: Array<string>
}

const initialState: IAddressSlice = {
  isLoading: false,
  addresses: ['Москва Ленина 103а', 'Армавир Ленина 103б']
}

export const addressSlice = createSlice({
  name: 'address',
  initialState,
  reducers: {}
})

export default addressSlice.reducer