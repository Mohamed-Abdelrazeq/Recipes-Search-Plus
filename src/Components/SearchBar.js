import { useState } from 'react';
import useFetchRecipes from '../Hooks/FetchAll';

const SearchBar = () => {

    const [searchKeyWord , setSearchKeyWord] = useState('');
    const [searchQuery , setSearchQuery] = useState('');

    const upDateSearch = e => {setSearchKeyWord(e.target.value);}

    const [hits , isPending] = useFetchRecipes(searchQuery);

    return ( 
        <div className="search-bar">
            <input type="text" value={searchKeyWord} onChange={upDateSearch} />
            <button 
            className="search-btn" 
            type="submit" 
            onClick={
                () => {
                    console.log(searchKeyWord);
                    setSearchQuery(searchKeyWord);
                }
            }>
                search</button>
        </div>
     );
}
 
export default SearchBar;