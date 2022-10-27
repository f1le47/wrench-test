import { DefaultDto } from "../defaultDto/DefaultDto";
import { IGetAddressesDto } from "./IGetAddressesDto";

export class AddressApiDto extends DefaultDto {
  addresses

  constructor({addresses, status}: IGetAddressesDto) {
    super({status})

    this.addresses = addresses
  }
}