export interface LoginInputs {
  id: number;
  name: string;
  type: string;
  label: string;
  required: boolean;
}

export const loginInputs: LoginInputs[] = [
  {
    id: 1,
    name: "username",
    type: "text",
    label: "Username",
    required: true,
  },
  {
    id: 3,
    name: "password",
    type: "password",
    label: "Password",
    required: true,
  },
];
