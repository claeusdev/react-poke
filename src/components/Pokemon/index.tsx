import React from "react"
import { Pokemon } from '../../interfaces/Pokemon.interface'

interface PokemonProps {
    pokemon: Pokemon
}

export function PokeMon({ pokemon }: PokemonProps) {
    return <article className='tc pv4 pv5-ns'>
        <img src={pokemon.imageUrl} className='br-100 pa1 ba b--black-10 h3 w3' alt='avatar' />
        <h1 className='f5 f4-ns fw6 mid-gray'>{pokemon.name}</h1>
        <h2 className='f6 gray fw2 ttu tracked'>Experience: {pokemon.baseExperience} / Abilities: {pokemon.numOfAbilities}</h2>
    </article>
}