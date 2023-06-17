import { atom } from "recoil";

export const toggleSwitch = atom({
    key: 'toggleSwitch',
    default: false,
});

export const selectedActivePlan = atom({
    key: 'selectedActivePlan',
    default: {activeObject: null},
});

export const AddonAtom = atom({
    key: 'AddonAtom',
    default: [false, false, false],
});

// export const OnlineServicesCheck = atom({
//     key: 'OnlineServicesCheck',
//     default: false,
// });

// export const LargerStorageCheck = atom({
//     key: 'LargerStorageCheck',
//     default: false,
// });

// export const CustomizableProfileCheck = atom({
//     key: 'CustomizableProfileCheck',
//     default: false,
// });

export const setPlan = atom({
    key: 'addonService',
    default: {
        name: "",
        terms: "",
        price: ""
    }
});

export const OnlineServices = atom({
    key: 'OnlineServices',
    default: {
        name: "",
        terms: "",
        price: "",
    }
});

export const LargerStorage = atom({
    key: 'LargerStorage',
    default: {
        name: "",
        terms: "",
        price: "",
    }
});

export const CustomizableProfile = atom({
    key: 'CustomizableProfile',
    default: {
        name: "",
        terms: "",
        price: "",
    }
});


export const setNameEmailPhoneNumber = atom({
    key: 'setNameEmailPhoneNumber',
    default: []
});