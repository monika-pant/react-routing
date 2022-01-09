import { Link } from 'react-router-dom';
import { useContext } from 'react';

import classes from './MainNavigation.module.css' 
import FavoritesContext from '../../store/favorites-context';


function MainNavigation() {

    const favoriteCtx = useContext(FavoritesContext);
    return <header className={classes.header}>
        <div className={classes.logo}>React Meetups</div>
        <nav>
            <ul>
                {/* disadvantage: a req is send to the server this way */}
                {/* <li><a herf="">Some Link</a></li> */}
                {/* use this instead */}
                <li><Link to="/">All Meetups</Link></li>
                <li><Link to="/new-meetups">New Meetups</Link></li>
                <li><Link to="/favorites">My Favorites
                <span className={classes.badge}>
                    {favoriteCtx.totalFavorites}
                </span>
                </Link></li>
            </ul>
        </nav>
    </header>
}

export default MainNavigation;