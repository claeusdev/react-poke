import React, { Component } from "react";

export class Search extends Component<{
  name: string;
  numberOfPokemons: number;
}> {
  render() {
    const {name, numberOfPokemons} = this.props
    return <div>
      <p>User {name} has {numberOfPokemons} pokemons</p>
    </div>;
  }
}
