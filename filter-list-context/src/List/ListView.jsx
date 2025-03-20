import { useContext } from 'react';
import SearchInput from '../Form/Searchinput'
import { ItemsContext } from '../Context/ItemsContext';

function ListView() {
	let elements= useContext(ItemsContext)
	return(
		<div>
			<SearchInput />
			<ul>
				{
					elements.map((nombre, index) => nombre && <li key={index}>{nombre}</li>)
				}
			</ul>
		</div>
	);
}

export default ListView;