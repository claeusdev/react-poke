import React, { Component } from "react";
import User from "./User.interface";

interface SearchState {
  error: boolean,
  pokemon: Pokemon
}

interface Pokemon {
  name: string,
  numOfAbilities: number,
  imageUrl: string,
  baseExperience: number
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

  onSearchClick = (): void => {
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

    let markup;
    if (error) {
      markup = <p>Pokemon not found, Please try again</p>
    } else if (pokemon) {
      markup = <header className='tc pv4 pv5-ns'>
        <img src={pokemon.imageUrl} className='br-100 pa1 ba b--black-10 h3 w3' alt='avatar' />
        <h1 className='f5 f4-ns fw6 mid-gray'>{pokemon.name}</h1>
        <h2 className='f6 gray fw2 ttu tracked'>Experience: {pokemon.baseExperience} / Abilities: {pokemon.numOfAbilities}</h2>
      </header>
    }
    return <div>
      <p>User {username}
        {numberOfPokemons && <span>has {numberOfPokemons} pokemons</span>} </p>

      <div className="pa4-l mw7 center pa4">
          <label className="clip" htmlFor="name">Pokemon Name</label>
          <input type="text" ref={this.pokeRef} name="name" className="f6 f5-l input-reset bn fl black-80 bg-white pa3 lh-solid w-100 w-75-m w-80-l br2-ns br--left-ns" placeholder="Name of Pokemon" />
          <button className="f6 f5-l button-reset fl pv3 tc bn bg-animate bg-black-70 hover-bg-black white pointer w-100 w-25-m w-20-l br2-ns br--right-ns" onClick={this.onSearchClick}>Find Pokemon</button>
      </div>
      {markup}
    </div>;
  }
}
