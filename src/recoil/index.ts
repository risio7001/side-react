import { atom } from "recoil";

export const textState = atom({
    key: 'textState', // unique ID (with respect to other atoms/selectors)
    default: 'item', // default value (aka initial value)
  });