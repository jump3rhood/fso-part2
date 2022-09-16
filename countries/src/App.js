import React, {useState, useEffect} from 'react'
import axios from 'axios';

import Filter from './components/Filter';
import Countries from './components/Countries';

// require('dot-env').config({path:'~fsopen/part2/countries/.env'})

const App = () => {
    const [countries, setcCountries] = useState([])
    const [filter, setFilter] = useState('')

    useEffect(()=> {
        axios.get('https://restcountries.com/v3.1/all')
            .then(response => setcCountries(response.data))
    }, [])
    

    const countriesToShow = filter.length === 0 ? countries 
            : countries.filter(country => country.name.common.toLowerCase().indexOf(filter) >= 0);

    const handleFilterChange = (e) => {
        setFilter(e.target.value.toLowerCase())
    }
  return (
    <div>
        <Filter filter={filter} onFilterChange={handleFilterChange} />
        <Countries countries={countriesToShow} filter={filter} onFilterChange={handleFilterChange}/>
    </div>
  )
}

export default App