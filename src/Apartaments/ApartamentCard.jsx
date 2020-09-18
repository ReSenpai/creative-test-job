import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import FavoriteIcon from '@material-ui/icons/Favorite';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    width: 345,
    margin: 10
  },
  grid: {
    flexBasis: 0
  },
  media: {
    height: 140,
  },
});

export default function ApartamentCard({apartaments, addLike, removeLike}) {
  const classes = useStyles();

  return apartaments.map(apartament => (
    <Grid item xs={12} key={ apartament.id } className={ classes.grid } >
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={ apartament.attributes.photo }
            title={ apartament.attributes.title }
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              { apartament.attributes.title }
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Площадь: { apartament.attributes.area } { apartament.attributes.unit }
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Комнаты: { apartament.attributes.rooms }
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Адрес: Улица { apartament.attributes.address.street } Дом { apartament.attributes.address.house } кв. { apartament.attributes.address.room }
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
            Продавец: { apartament.relationships.attributes.first_name } { apartament.relationships.attributes.middle_name }
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          { apartament.liked 
            ? <IconButton color="primary" aria-label="add to favorites" 
                onClick={ () => removeLike(apartament.id) }>
                <FavoriteIcon />
              </IconButton> 
            : <IconButton aria-label="add to favorites" onClick={ () => addLike(apartament.id) }>
                <FavoriteIcon />
              </IconButton>
          } 
        </CardActions>
      </Card>
    </Grid>
  ))
}