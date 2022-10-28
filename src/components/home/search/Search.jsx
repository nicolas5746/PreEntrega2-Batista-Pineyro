import React from 'react';
import './Search.sass';

const Search = ({ filter, setFilter }) => {

    const onChange = (event) => {
        setFilter(event.target.value)
    };

    return (
        <div className="search">
            <label for='filter'>Buscar</label>
            <input
                id='filter'
                name='filter'
                type='text'
                value={filter}
                onChange={onChange} />
        </div>
    );
}

export default Search;