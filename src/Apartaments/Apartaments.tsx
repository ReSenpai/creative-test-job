import { Grid } from '@material-ui/core';
import React from 'react';
import Badge from '@material-ui/core/Badge';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ApartamentCard from './ApartamentCard';
import { EntitiesType } from '../types/types';
import { AddLikeAT, RemoveLikeAT } from '../redux/apartaments_reducer';

type PropsType = {
    apartaments: Array<EntitiesType>
    likes: number
    addLike: (cardId: number) => AddLikeAT
    removeLike: (cardId: number) => RemoveLikeAT
}

const Apartaments: React.FC<PropsType> = ({apartaments, addLike, removeLike, likes}) => {

    return (
        <Grid container spacing={2} justify='center' alignItems='center' direction='column'
            style={{ minHeight: '100vh', width: '100%' }} >
            <Badge badgeContent={ likes } color="error" 
                style={{ position: 'fixed', top: '6%', right: '6%', zIndex: 1 }}>
                { likes
                    ? <FavoriteIcon color='primary' />
                    : <FavoriteIcon color='disabled' /> 
                }
            </Badge>
            <Grid item>
                <Grid container justify='center'>
                    <ApartamentCard {...{apartaments, addLike, removeLike}} />
                </Grid>
            </Grid>
        </Grid>
    )
}

export default Apartaments;