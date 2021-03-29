
{/* <ul className="filter__list">
   
    <li>
        <h4>Filter Using:</h4>
    </li>
    <li>
        <span>sub category:</span>
        <select className="filter__dropdown" name='sub' onChange={(event) => setFilter([event.target.name, event.target.value])}>
            {
                count.sub && Object.entries(count.sub).map(([key, value]) => (<option key={key} value={key}>{`${key} (${value})`}</option>))
            }
        </select>
    </li>
    <li>
        <strong>- OR -</strong>
    </li>
    <li>
        <span>topic:</span>
        <select className="filter__dropdown" name='topic' onChange={(event) => setFilter([event.target.name, event.target.value])}>
            {
                count.topic && Object.entries(count.topic).map(([key, value]) => (<option key={key} value={key}>{`${key} (${value})`}</option>))
            }
        </select>
    </li>
    <li>
        <button onClick={() => setFilter([])}>RESET</button>
    </li>
</ul> */}