export interface RegState {
  email?: string;
  password?: string;
  confirmedPassword?: string;
  firstName?: string;
  secondName?: string;
  phone?: string;
  lastName?: string;
}

export type RegStateType = "TUTOR" | "HIRER";
