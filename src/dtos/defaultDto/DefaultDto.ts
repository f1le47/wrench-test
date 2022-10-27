import { IDefaultDto } from "./IDefaultDto";

export class DefaultDto {
  status;

  constructor({status}: IDefaultDto) {
    this.status = status;
  }
}