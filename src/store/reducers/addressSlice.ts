import { createSlice } from "@reduxjs/toolkit";

interface IAddressSlice {
  isLoading: boolean;
  addresses: Array<string>
}

const initialState: IAddressSlice = {
  isLoading: false,
  addresses: []
}

export const addressSlice = createSlice({
  name: 'address',
  initialState,
  reducers: {}
})

export default addressSlice.reducer