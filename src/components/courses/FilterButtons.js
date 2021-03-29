import React from 'react'

// of course should be one  ... last minute change as i didnt really like the oldfilter using drop down .. late now...

const FilterButtons = ({ lists, handleClick, selected = 'NONE' }) => {
    console.log("buttons", lists.sub)
    return (
        <div className="filter">
            <ul className="filter__list">
                {
                    lists.sub && Object.entries(lists.sub)
                        .map(([key, value]) => (
                            <li>
                                <button
                                    className="filter__button"
                                    style={{ backgroundColor: selected === key ? 'green' : '#0073cf' }}
                                    key={key}
                                    value={key}
                                    onClick={() => handleClick(["sub", key])}
                                >
                                    {`${key} (${value})`}
                                </button>
                            </li>
                        ))
                }
                {
                    lists.topic && Object.entries(lists.topic)
                        .map(([key, value]) => (
                            <li>
                                <button
                                    className="filter__button"
                                    style={{ backgroundColor: selected === key ? 'green' : '#0073cf' }}
                                    key={key}
                                    value={key}
                                    onClick={() => handleClick(["topic", key])}
                                >
                                    {`${key} (${value})`}
                                </button>
                            </li>
                        ))
                }
                <li>
                    <button className="filter__button" onClick={() => handleClick([])}>RESET</button>
                </li>
            </ul>
        </div>
    )
}

export default FilterButtons