// Обычно данные приходят вместе с датой создания и датой обновления, так что данный тип - must have

export type WithDates<T extends Record<string, any>> = {
  createdAt: string;
  updatedAt: string;
} & T;

// Тип для айдишника

export type WithId<T extends Record<string, any>> = {
  id: number;
} & T;

// При некоторых случаях с бэка могут прийти сообщения. Тип следующий
export interface MessageType {
  message: string;
}

// Список
export type CountAndRows<T extends any[]> = {
  count: number;
  rows: T;
};

// Этим типом обозначаются - города, категории особенностей, сопровождения и т.д

export type IDataFromDict = WithId<{ name: string }>;

export type CustomExclude<T, U> = T extends U ? never : T;

export type CustomOmit<T extends object, U extends keyof T> = { [Key in CustomExclude<keyof T, U>]: T[Key] };

export type ISearchParams<T> = {
  search: string;
  order: "asc" | "desc";
  page: number;
  limit: number;
} & T;

export type GetRType<T extends Record<number, any>[]> = T extends [infer R] ? R : never;
