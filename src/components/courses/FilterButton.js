import React from 'react'

// Creates the Filtered Button 

// list has the following area structure 
//
// ['sub',{web:3,video:5,adverting:2}]

// list[0] = the type of the list  - example  "sub" or "topic"
// list[1] = An object containing a list of all occurrences this types {web:3,video:5,amobile:2}

const LIST_TYPE = 0
const LIST = 1


const FilterButton = ({ list, handleClick, selected }) => {
    
    if(!list[LIST]) return null

    return(
        Object.entries(list[LIST])
        .map(([key, value]) => (
            <li key={key}>
                <button
                    className="filter__button"
                    style={{ backgroundColor: selected === key ? '#FCD900' : '#0073cf' }}
                    value={key}
                    onClick={() => handleClick([list[LIST_TYPE], key])}
                >
                    {`${key} (${value})`}
                </button>
            </li>
        ))
    )
}
export default FilterButton
