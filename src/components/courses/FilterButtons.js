import React from 'react'
import FilterButton from './FilterButton'

// This component generates a list of buttons that will be able to filtered the search data

const FilterButtons = ({ lists = {}, handleClick, selected = 'NONE' }) => (
    <div className="filter">
        <ul className="filter__list">
            {
                Object.entries(lists).map(list => <FilterButton list={list} key={list[0]} handleClick={handleClick} selected={selected} />)
            }
            <li>
                <button className="filter__button" onClick={() => handleClick([])}>RESET</button>
            </li>
        </ul>
    </div>
)

export default FilterButtons