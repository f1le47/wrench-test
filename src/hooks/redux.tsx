import { bindActionCreators } from "@reduxjs/toolkit";
import { useDispatch, TypedUseSelectorHook, useSelector } from "react-redux";
import { allActionCreators } from "@store/actions/allActionCreators";
import { AppDispatch, RootState } from "@store/store";

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
export const useActions = () => {
  const dispatch = useAppDispatch()
  return bindActionCreators(allActionCreators, dispatch)
}