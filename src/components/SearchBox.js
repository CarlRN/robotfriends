import React from 'react';

const SearchBox = ({onSearchFieldChange}) => {
    return(
        <div className='pa2'>          
            <input 
                className='pa3 ba b--green bg-lightest-blue'
                type='search' 
                placeholder='Search Robots'
                onChange={onSearchFieldChange}
            />
        </div>
    )
}

export default SearchBox;