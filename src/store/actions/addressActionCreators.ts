import addressApi from '@http/addressApi/addressApi';
import { IGetAddresses } from '@http/addressApi/IAddressApi';
import { AppDispatch } from './../store';
export const addressActionCreators = {
  getAddresses: ({address}: IGetAddresses) => async (dispatch: AppDispatch) => {
    try {
      addressApi.getAddresses({address})
    } catch(e) {}
  }
}