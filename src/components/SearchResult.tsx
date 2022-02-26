import React from "react";
import Link from "next/link";

type Props = {
    pokemons: string[]
};

export const SearchResult = ({pokemons}: Props) => {
    return pokemons.length > 0 ? (
        <main className="search-grid">
            {pokemons.map((pokemon) => (
                <Link 
                    href={`/pokemon/${pokemon}`} 
                    key={pokemon}
                    ><a>
                        <aside 
                            className="pokemon-card"
                            >{pokemon}
                        </aside>
                    </a>
                </Link>
            ))}
        </main>
    ) : (
        <aside className="search-message">
            No pokemons found
        </aside>
    )
};




