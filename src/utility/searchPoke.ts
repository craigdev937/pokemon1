import { ALL_POKE } from "../constants/Poke";

export const searchPoke = 
(query: string): Promise<string[]> => {
    return new Promise((resolve) => {
        const matchingPokemons = 
        ALL_POKE.filter(({ name }) => 
        name.includes(query.toLocaleLowerCase()))
        .map(({ name })=> name);
        setTimeout(() => {
            resolve(matchingPokemons);
        }, 500);
    })
};



