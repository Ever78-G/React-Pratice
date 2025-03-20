import { createContext, useContext, useState,useEffect } from "react";
import frameworksList from '../List/items'
import { SearchContext } from "./SearchContext";

export const ItemsContext= createContext([]);

export function ItemsProvider({children}){
    let [items, setItems] = useState(frameworksList);
    let {search} = useContext(SearchContext)
    

    useEffect(() => {
        if (!search || search === "") {
            setItems(frameworksList);
            return;
        }
        filterItems(search);
    }, [search]);

    function filterItems(searchPattern) {
        let newItems = filterItemsBySearchPattern(searchPattern);
        setItems(newItems);
    }

    function filterItemsBySearchPattern(searchPattern) {
        return frameworksList.filter(item => 
            item.toLowerCase().includes(searchPattern.toLowerCase()) // Evita null en la lista
        );
    }
    return(
        <ItemsContext.Provider value={items}>
            {children} 
        </ItemsContext.Provider>
    )

}
