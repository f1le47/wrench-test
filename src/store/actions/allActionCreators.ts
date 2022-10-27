import { articleActionCreators } from './articleActionCreators';
import { addressActionCreators } from "./addressActionCreators";

export const allActionCreators = {
  ...addressActionCreators,
  ...articleActionCreators
}