import React from "react";
import { useQuery } from "react-query";
import { SearchResult } from "../components/SearchResult";
import { useDebounce } from "../utility/useDebounce";
import { searchPoke } from "../utility/searchPoke";

export default function Index() {
    const [searchValue, setSearchValue] = React.useState("");
    const debounedSearchValue = useDebounce(searchValue, 300);

    const { isError, error, isLoading, isSuccess, data } = useQuery(
        ["searchPokemons", debounedSearchValue],
        () => searchPoke(debounedSearchValue),
        {enabled: debounedSearchValue.length > 0}
    );

    const renderResult = () => {
        if (isLoading) return <h1>Loading...</h1>;
        if (isError) return <h1>Error: {error}</h1>;
        if (isSuccess) return <SearchResult pokemons={data} />;
        return <main></main>
    };

    return (
        <React.Fragment>
            <h1>Search Your Pokemon</h1>
            <input 
                type="text" 
                value={searchValue}
                onChange={({target: {value}}) => 
                    setSearchValue(value)}
            />
            {renderResult()}
        </React.Fragment>
    );
};



