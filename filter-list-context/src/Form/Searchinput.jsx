import { useContext } from "react";
import { SearchContext } from "../Context/SearchContext";

function SearchInput(){
    const {setSearch} =useContext(SearchContext);
    //console.log(info)
    return(
        
        <input type="text" onChange={ev => setSearch(ev.target.value) } />

        
    )
}

export default SearchInput;