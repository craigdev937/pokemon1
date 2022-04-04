import React from "react";
import { useRouter } from "next/router";
import { GetStaticProps, GetStaticPaths } from "next";
import { useQuery, QueryClient, dehydrate } from "react-query";
import { Card } from "../../components/Card";

const URL = "https://pokeapi.co/api/v2/pokemon";
const fetchPoke = async (id: string) => {
    const res = await fetch(`${URL}/${id}/`);
    if (!res.ok) throw new Error(res.statusText);
    const data = await res.json();
    return data;
};

export default function Pokemon() {
    const router = useRouter();
    const pokeID = typeof router.query?.id === 
        "string" ?
        router.query.id : "";

    const { error, isError, isSuccess, isLoading, data: pokemon } = useQuery(
        ["getPokemon", pokeID], () => fetchPoke(pokeID),
        { enabled: pokeID.length > 0, staleTime: Infinity }
    );

    if (isLoading) return <aside className="center">Loading...</aside>;
    if (isError) {
        return (
            <aside className="center">
                Not Found {error}
                <span role="img" aria-label="sad">😢</span>
            </aside>
        );
    };
        
    if (isSuccess) {
        return (
            <main className="container">
                <Card 
                    name={pokemon.name}
                    image={pokemon.spirites?.other?.["official-artwork"]?.front_default}
                    weight={pokemon.weight}
                    xp={pokemon.base_experience}
                    abilities={pokemon.abilities.map((item: any) => item.ability.name)}
                />
            </main>
        );
    };

    return <></>;
};

export const getStaticProps: GetStaticProps = 
async (context) => {
    const id = context.params?.id as string;
    const QClient = new QueryClient();
    await QClient.prefetchQuery(
        ["getPokemon", id], () => fetchPoke(id)
    );
    return {
        props: {
            dehydratedState: dehydrate(QClient)
        }
    }
};

export const getStaticPaths: GetStaticPaths = 
async () => {
    return {
        paths: [],
        fallback: "blocking"
    }
};



