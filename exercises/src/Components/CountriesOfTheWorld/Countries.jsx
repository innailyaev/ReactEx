import React, { useEffect, useState } from 'react';
import axios from 'axios';


const Countries = () => {
const [countriesList,setCountriesList] = useState([]);
const [search,setSearch]=useState('');

useEffect(()=>{
    (async () =>{
        const response =await axios.get('https://restcountries.eu/rest/v2/all');
        setCountriesList(response.data);
    })(); 

},[]);
  
const changeHandler=(e)=>{
    setSearch(e.target.value);
}

const DisplayCountries =()=>{
    return countriesList.filter((c)=>{
        const countryName = c.name.toLowerCase();
        return countryName.startsWith(search);
    }).map((c,index)=>{
        return <li key={index}>{c.name}</li>
    })
}

    return (
      <div>
            <label htmlFor="">Search:</label>
            <input type="text" onChange={changeHandler}/>          
            <ul>
              {
                  <DisplayCountries/>
              }
          </ul>
      </div>
    );
};

  export default Countries;