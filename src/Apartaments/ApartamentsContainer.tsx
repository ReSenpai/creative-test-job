import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { addLike, AddLikeAT, getApartaments, removeLike, RemoveLikeAT } from '../redux/apartaments_reducer';
import { getApartamentsData, getIsInitialization, getLikes } from '../redux/apartaments_selectors';
import { AppStateType } from '../redux/store';
import { EntitiesType } from '../types/types';
import Apartaments from './Apartaments';

type MapStatePropsType = {
    apartaments: Array<EntitiesType>
    isInitialization: boolean
    likes: number
}
type MapDispatchPropsType = {
    getApartaments: () => void
    addLike: (cardId: number) => AddLikeAT
    removeLike: (cardId: number) => RemoveLikeAT
}
type OwnPropsType = {
}
export type PropsType = MapStatePropsType & MapDispatchPropsType & OwnPropsType;


const ApartamentContainer: React.FC<PropsType> = ({
    apartaments,
    isInitialization,
    likes,
    getApartaments,
    addLike,
    removeLike
}) => {
    useEffect(() => {
        getApartaments();
    }, [isInitialization])

    return (
        <Apartaments {...{apartaments, addLike, removeLike, likes}} />
    )  
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => ({
    apartaments: getApartamentsData(state),
    isInitialization: getIsInitialization(state),
    likes: getLikes(state)
}) 


export default connect<MapStatePropsType, MapDispatchPropsType, OwnPropsType, AppStateType>(mapStateToProps, {
    getApartaments,
    addLike, 
    removeLike
})(ApartamentContainer);