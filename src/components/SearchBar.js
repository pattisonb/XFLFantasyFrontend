import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import './SearchBar.css'

function SearchBar(props) {

    const [searchTerm, setSearchTerm] = useState('')

    const searchTermHandler = (event) => {
        setSearchTerm(event.target.value)
    };

    const onSearch = () => {
        props.onSearch(searchTerm)
    }

    const onClear = () => {
        props.onClear()
        setSearchTerm('')
    }

    return (
            <div className='rowC'>
            <input placeholder="Search for a player..." type="text" value = {searchTerm} onChange={searchTermHandler}/>
            <Button onClick = {onSearch} className = "btn btn-info btn-sm"> Search</Button>
            <Button onClick = {onClear} className = "btn btn-danger btn-sm"> Clear</Button>
            </div>
      );
}

export default SearchBar;