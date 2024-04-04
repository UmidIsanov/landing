// Интерфейс для создания коннекта

import { WithDates, WithId } from "./general";

export interface IPostConnect {
  hirerId: number;
  tutorId: number;
}

// После создания коннекта - приходит такой ответ

export interface IPostConnectResponse extends IPostConnect, WithId<{}>, WithDates<{}> {
  statusOfConnectId: number;
  userId: number;
}

export enum ConnectStatuses {
  UNREPLIED = 11,
  ACCEPTED = 22,
  REJECTED = 33,
}
