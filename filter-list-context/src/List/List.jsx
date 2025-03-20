
import { SearchProvider } from "../Context/SearchContext";
import { ItemsProvider } from "../Context/ItemsContext";
import ListView from '../List/ListView'

function List() {

	return (
		<SearchProvider>
			<ItemsProvider>
				
				<ListView/>

			</ItemsProvider>
		</SearchProvider>
	)
}


export default List;
