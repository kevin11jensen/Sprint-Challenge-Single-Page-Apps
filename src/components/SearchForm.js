import React, { useState, useEffect } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";

export default function SearchForm() {
  const [search, setSearch] = useState("");
  const [results, setResults] = useState([]);

  function handleChange(e) {
    e.preventDefault();
    setSearch(e.target.value);
    console.log(e.target.value);
  }
  useEffect(() => {
    axios
      .get("https://rickandmortyapi.com/api/character")
      .then(res => {
        console.log(res.data.results);
        let characters = res.data.results.filter(character =>
          character.name.toLowerCase().includes(search.toLowerCase())
        );
        setResults(characters);
        console.log(results);
      })
      .catch(error => console.log(error));
  }, [search]);
  return (
    <div>

      <form>
        <label htmlFor="search">
          Search
          <br />
        </label>
        <input
          className="searchBar"
          name="search"
          type="text"
          id="search"
          placeholder="enter character name"
          value={search}
          onChange={handleChange}
          autoComplete="off"
        />
        <button type="submit">Submit</button>
      </form>
      <div>

        {results.map(result => 
        <div>
          
          <p>Name: {result.name}</p> 
          
          </div>
        )}
      </div>
    </div>
  );
}
