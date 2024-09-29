import React from 'react'
import '../../App.css';
import Data from '../StateData.json';

function Search(){
    return (
        <div className="w-25 p-3">
            <input className="form-control me-2" list='states' type="search" placeholder="e.g. Gujarat" aria-label="Search"/>
            <datalist id='states'>
            {Data.map((val,key)=>{
                return <option value={val.text}/>
            })}
            </datalist>
        </div>
    );
}

export default Search;