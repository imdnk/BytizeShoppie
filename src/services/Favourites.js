import react, {createContext, useEffect, useState} from 'react';

export const FavouriteContext =  createContext();

export const FavouriteContextProvider = ({children}) => {

    const [favourites, addFavourites] = useState([]);
    
    const add = (item) => {
        try{
            addFavourites([...favourites,item])
        }
        catch(e)
        {
            console.log("Error",e); 
        }
         
    }
    const remove = (item) => {
        try{
            const newFavourites = favourites.filter(
                (x) => x.id !== item.id
              );
          
              addFavourites(newFavourites);
        }
        catch(e)
        {
            console.log("Error",e); 
        }
         
    }
    return(
        <FavouriteContext.Provider
          value={{
              favourites,
              add,
              remove,
          }}
        >
            {children}
        </FavouriteContext.Provider>
    );
}