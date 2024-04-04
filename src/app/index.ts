import ReduxProvider from "./providers/ReduxProvider";
export { type RootState, type AppDispatch } from "./lib/store";
export { $privateApi, $publicApi } from "./config/axios";
export { ClientType } from "./types/clientTypes";
export { UserActiveType } from "./types/activeTypes";

export default ReduxProvider;
