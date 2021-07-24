import { useState } from 'react';

const SearchBar = (propes) => {

    const setSearchQuery = propes.setSearchQuery;

    const [searchKeyWord , setSearchKeyWord] = useState('');

    const upDateSearch = e => {setSearchKeyWord(e.target.value);}

    return ( 
        <div className="search-bar">
            <input type="text" value={searchKeyWord} onChange={upDateSearch} />
            <button 
            className="search-btn" 
            type="submit" 
            onClick={
                () => {
                    setSearchQuery(searchKeyWord);
                }
            }>search</button>
        </div>
     );
}
 
export default SearchBar;