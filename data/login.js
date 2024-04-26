// This file contains constant rewards for consecutive login
const login = [
  {
    key: "yellowcerts",
    dot: "yellow",
    dates: [
      {
        start: new Date(2024, 1, 25),
        repeat: {
          every: "month",
          days: 25,
        },
      },
    ],
    popover: {
      label: "Login Reward | 5 Yellow Certificates",
    },
  },
  {
    key: "greencerts",
    dot: "green",
    dates: [
      {
        start: new Date(2024, 1, 11),
        repeat: {
          every: "month",
          days: 11,
        },
      },
    ],
    popover: {
      label: "Login Reward | 10 Green Certificates",
    },
  },
  {
    key: "hhpermit",
    dot: "orange",
    dates: [
      {
        start: new Date(2024, 1, 17),
        repeat: {
          every: "month",
          days: 17,
        },
      },
    ],
    popover: {
      label: "Login Reward | 1 Headhunting permit",
    },
  },
];

export default login;
