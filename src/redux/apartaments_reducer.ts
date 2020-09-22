import { ThunkAction } from "redux-thunk";
import { apartamentsAPI } from "../api/api";
import { changeObjToArr } from "../helpers/objects_helpers";
import { EntitiesType } from "../types/types";
import { AppStateType } from "./store";

const GET_APARTAMENTS = 'apartaments/GET_APARTAMENTS';
const ADD_LIKE = 'apartaments/ADD_LIKE';
const REMOVE_LIKE = 'apartaments/REMOVE_LIKE';

let initialState = {
    apartaments: [] as Array<EntitiesType>,
    likes: 0 as number,
    isInitialization: true as boolean
}
type InitialStateType = typeof initialState;
// Reducer
const apartamentsReducer = (state = initialState, action: ActionsTypes): InitialStateType => {

    switch (action.type) {
        case GET_APARTAMENTS: {
            return {
                ...state,
                apartaments: [...action.apartaments]
            }
        }
        case ADD_LIKE: {
            return {
                ...state,
                apartaments: changeObjToArr(state.apartaments, action.cardId, { liked: true }),
                likes: state.likes + 1
            }
        }
        case REMOVE_LIKE: {
            return {
                ...state,
                apartaments: changeObjToArr(state.apartaments, action.cardId, { liked: false }),
                likes: state.likes - 1
            }
        }
        default:
            return state;
    }  
}

// Actions. AT = Action Type
type ActionsTypes = SetApartamentsAT | AddLikeAT | RemoveLikeAT;
type SetApartamentsAT = {
    type: typeof GET_APARTAMENTS
    apartaments: Array<EntitiesType>
}
export const setApartaments = (apartaments: Array<EntitiesType>): SetApartamentsAT => ({ type: GET_APARTAMENTS, apartaments });
export type AddLikeAT = {
    type: typeof ADD_LIKE
    cardId: number
}
export const addLike = (cardId: number): AddLikeAT => ({ type: ADD_LIKE, cardId });
export type RemoveLikeAT = {
    type: typeof REMOVE_LIKE
    cardId: number
}
export const removeLike = (cardId: number): RemoveLikeAT => ({ type: REMOVE_LIKE, cardId });

// Thunks
export type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionsTypes>;

export const getApartaments = (): ThunkType => async (dispatch) => {
    const apartaments = await apartamentsAPI.getData();
    dispatch(setApartaments(apartaments));
}


export default apartamentsReducer;