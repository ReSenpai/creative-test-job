import { AppStateType } from "./store";

export const getApartamentsData = (state: AppStateType) => state.apartamentsPage.apartaments;
export const getIsInitialization = (state: AppStateType) => state.apartamentsPage.isInitialization;
export const getLikes = (state: AppStateType) => state.apartamentsPage.likes;
