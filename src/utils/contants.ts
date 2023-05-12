export const genderEnums = ["male", "female"] as const
export const statusEnums = ["active", "inactive"] as const

export const initValues = {
  name: "",
  email: "",
  gender: "",
  status: "",
}

export const genderOptions = [
  {
    id: 1,
    label: "Male",
    value: "male",
  },
  {
    id: 2,
    label: "Female",
    value: "female",
  },
];

export const statusOptions = [
    {
      id: 1,
      label: "Active",
      value: "active",
    },
    {
      id: 2,
      label: "inActive",
      value: "inactive",
    },
  ];
