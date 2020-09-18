import { apartamentsAPI } from "../api/api";
import { changeObjToArr } from "../helpers/objects_helpers";

const GET_APARTAMENTS = 'apartaments/GET_APARTAMENTS';
const ADD_LIKE = 'apartaments/ADD_LIKE';
const REMOVE_LIKE = 'apartaments/REMOVE_LIKE';

let initialState = {
    apartaments: [],
    likes: 0,
    isInitialization: true
}
// Reducer
const apartamentsReducer = (state = initialState, action) => {

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
                apartaments: changeObjToArr(state.apartaments, action.userId, 'id', { liked: true }),
                likes: state.likes + 1
            }
        }
        case REMOVE_LIKE: {
            return {
                ...state,
                apartaments: changeObjToArr(state.apartaments, action.userId, 'id', { liked: false }),
                likes: state.likes - 1
            }
        }
        default:
            return state;
    }  
}

// Actions
export const setApartaments = (apartaments) => ({ type: GET_APARTAMENTS, apartaments });
export const addLike = (userId) => ({ type: ADD_LIKE, userId });
export const removeLike = (userId) => ({ type: REMOVE_LIKE, userId });

// Thunks
export const getApartaments = () => async (dispatch) => {
    const apartaments = await apartamentsAPI.getData();
    dispatch(setApartaments(apartaments));
}


export default apartamentsReducer;