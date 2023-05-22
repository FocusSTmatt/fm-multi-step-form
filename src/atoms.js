import { atom } from "recoil";

export const toggleChecked = atom({
    key: 'isChecked',
    default: false,
});

export const setNameEmailPhoneNumber = atom({
    key: 'userInfo',
    default: []
})