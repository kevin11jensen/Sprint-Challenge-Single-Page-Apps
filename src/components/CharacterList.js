import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import axios from 'axios';

import SearchForm from './SearchForm';
import CharacterCard from './CharacterCard';


export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [people, setPeople] = useState ([]);
  const [url] = useState ('https://rickandmortyapi.com/api/character/');
  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
      axios
      .get(url)
      .then(response => {
        console.log(response.data);
        setPeople(response.data.results);
  })
  .catch(error => console.log({error}));
  
}, []);

  return (
    <section className="character-list">
      <Link to = '/'>Home</Link>
      <SearchForm />
      {people.map((person, index) =>(
        <CharacterCard
        key={index}
        person ={person}/>
      ))}
    </section>
  );
}
