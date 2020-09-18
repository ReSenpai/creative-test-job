import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { addLike, getApartaments, removeLike } from '../redux/apartaments_reducer';
import { getApartamentsData, getIsInitialization, getLikes } from '../redux/apartaments_selectors';
import Apartaments from './Apartaments';


const ApartamentContainer = ({
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

const mapStateToProps = (state) => ({
    apartaments: getApartamentsData(state),
    isInitialization: getIsInitialization(state),
    likes: getLikes(state)
}) 


export default connect(mapStateToProps, {
    getApartaments,
    addLike, 
    removeLike
})(ApartamentContainer);