import React, { Component } from "react";
import User from "../interfaces/User.interface";
import { PokeMon } from "./Pokemon";
import { SearchForm } from "./SearchForm";
import { Pokemon } from "../interfaces/Pokemon.interface";

interface SearchState {
  error: boolean,
  pokemon: Pokemon
}

export class Search extends Component<User, SearchState> {
  pokeRef: React.RefObject<HTMLInputElement>;
  constructor(props: User) {
    super(props)
    this.pokeRef = React.createRef()

    this.state = {
      error: false,
      pokemon: null
    }
  }

  onSearchClick = () => {
    const val = this.pokeRef.current.value
    fetch(`https://pokeapi.co/api/v2/pokemon/${val}`).then(res => {
      if (res.status !== 200) {
        this.setState({ error: true })
        return;
      }
      res.json().then(data => {
        this.setState({ error: false, pokemon: { name: data.name, numOfAbilities: data.abilities.length, baseExperience: data.base_experience, imageUrl: data.sprites.front_default } })
      })
    })
  }

  render() {
    const { name: username, numberOfPokemons } = this.props
    const { pokemon, error } = this.state

    return <div>
      <p>User {username}
        {numberOfPokemons && <span>has {numberOfPokemons} pokemons</span>} </p>

      <SearchForm pokeRef={this.pokeRef} onSearchClick={this.onSearchClick}/>
      {error ? <p>Pokemon not found, try again</p> : ""}
      {pokemon && <PokeMon pokemon={pokemon} />}
    </div>;
  }
}

