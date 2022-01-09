import { createContext, useState } from "react";

const FavoritesContext = createContext({
    favorites: [],
    totalFavorites: 0,
    addFavorite: (favoriteMeetup) => {},
    removeFavorite: (meetupId) => {},
    itemsFavorite: (meetupId) => {}
});

export function FavoritesContextProvider(props) {
    const [userFavorites, setUserFavorites] = useState([]);
 
    function addFavoriteHandler(favoriteMeetup) {
        // we should not do it liek this way 
        // setUserFavorites(userFavorites.concat(favoriteMeetup));
        setUserFavorites((prevUserFavorites) => {
            return prevUserFavorites.concat(favoriteMeetup);
        })
    }

    function removeFavoriteHandler(meetupId) {
        setUserFavorites((prevUserFavorites) => {
            return prevUserFavorites.filter(meetup => meetup.is !== meetupId);
        })
    }

    function itemIsFavoriteHandlerfavorites(meetupId) {
        return userFavorites.some(meetup => meetup.id === meetupId)
    }


    const context = {
        favorites: userFavorites,
        totalFavorites: userFavorites.length,
        addFavorite: addFavoriteHandler,
        removeFavorite: removeFavoriteHandler,
        itemIsFavorite: itemIsFavoriteHandlerfavorites
    };

    return <FavoritesContext.Provider value={context}>
        {props.children}
    </FavoritesContext.Provider>
}

export default FavoritesContext;
