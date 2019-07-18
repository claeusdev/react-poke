import React from 'react'



interface SearchFormProps {
    pokeRef: React.RefObject<HTMLInputElement>,
    onSearchClick(): void
}

export function SearchForm({ pokeRef, onSearchClick }: SearchFormProps) {
    return <div className="pa4-l mw7 center pa4">
        <label className="clip" htmlFor="name">Pokemon Name</label>
        <input type="text" ref={pokeRef} name="name" className="f6 f5-l input-reset bn fl black-80 bg-white pa3 lh-solid w-100 w-75-m w-80-l br2-ns br--left-ns" placeholder="Name of Pokemon" />
        <button className="f6 f5-l button-reset fl pv3 tc bn bg-animate bg-black-70 hover-bg-black white pointer w-100 w-25-m w-20-l br2-ns br--right-ns" onClick={onSearchClick}>Find Pokemon</button>
    </div>
}
