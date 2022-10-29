import React from 'react';
import FilterContext from 'context/FilterContext';

const FilterProvider = () => {
    const [filter, setFilter] = React.useState('');

    return (
        <FilterContext.Provider
            value={{ filter, setFilter }}
        >
        </FilterContext.Provider>
    );
}

export default FilterProvider;