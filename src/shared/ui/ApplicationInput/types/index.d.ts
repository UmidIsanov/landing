export interface IApplicationInput {
  label: string;
  id: string;
  value: string;
  className?: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  disabled: boolean;
  type?: string;
}

export interface Value {
  city: string;
  education: string;
  dopEducation: string;
  languages: string;
  features: string;
  interests: string;
  hobby: string;
  extraInfo: string;
  otherInfo?: string;
}

export type ValueKeys = keyof Value;
