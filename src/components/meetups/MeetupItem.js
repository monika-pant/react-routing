import classes from './MeetupItem.module.css'
import Card from '../ui/Card';
import {useContext} from 'react';
import FavoritesContext from '../../store/favorites-context';

function MeetupItem(props) {
    const favoritesCtx = useContext(FavoritesContext);
    
    const itemsFavorite = favoritesCtx.itemIsFavorite(props.id);


    function toggleFavoriteStatusHandler() {
        if(itemsFavorite) {
            favoritesCtx.removeFavorite(props.id);
        } else {
            favoritesCtx.addFavorite({
                id:props.id,
                title: props.title,
                image: props.image,
                address: props.address,
                description: props.description
            })
        }
    }


    return (
    <Card>
        <li className={classes.item} key={props.id}>
        <div className={classes.image}>
            <img src={props.image} alt={props.title}></img>
        </div>
        <div className={classes.content}>
            <h3>{props.title}</h3>
            <address>{props.address}</address>
            <p>{props.description}</p>
        </div>
        <div className={classes.actions}>
            <button onClick={toggleFavoriteStatusHandler}>{itemsFavorite ? 'Remove from Favorites': 'Add to Favorites'}</button>
        </div>
    </li>
    </Card>
    )
}

export default MeetupItem;