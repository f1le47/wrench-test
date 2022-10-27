import { $instance } from ".."
import { IGetAddresses } from "./IAddressApi"


class AddressApi {
  async getAddresses({address}: IGetAddresses) {
    const response = await $instance.post('/address', {
      query: address
    })
    
    
    return response
  }
}

export default new AddressApi()