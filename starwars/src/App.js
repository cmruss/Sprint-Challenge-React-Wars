import React, {useState, useEffect} from 'react';
import './App.css';
import axios from "axios";
import CharacterCard from "./components/CharacterCard";
import styled from "styled-components";

const Character = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: space-evenly;
`
const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
const [character, setCharacter] = useState([]);
  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
useEffect(()=>{
  axios
  .get('https://corsanywhere.herokuapp.com/https://lambda-swapi.herokuapp.com/api/people/')
  .then(response => {
    setCharacter(response.data.results)
    console.log(response.data.results
      );

})
.catch(err => {
    console.log(`no dice`, err);
})
}, []);
  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      <Character>
        {character.map((character, index)=>{
          return(
            <CharacterCard key={index}
            name={character.name}
            dob={character.birth_year}
            eyes={character.eye_color}
            gender={character.gender}
            height={character.height}
            mass={character.mass}
            skin={character.skin_color}
            films={character.films.length}
            homeworld={character.homeworld}/>
          )
        })}
      </Character>
    </div>
  );
}

export default App;
