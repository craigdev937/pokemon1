import React from "react";

type Props = {
    name: string,
    image: string,
    weight: number,
    xp: number,
    abilities: string[]
};

export const Card = 
({name, image, weight, abilities, xp}: Props) => {
    return (
        <main className="pokemon-card-large">
            <h2>{name}</h2>
            <img alt={name} width="100px" src={image} />
            <aside className="card-section">
                <p className="card-section-title">XP</p>
                <section className="card-section-content">{xp}</section>
            </aside>
            <aside className="card-section">
                <p className="card-section-title">Weight</p>
                <section className="card-section-content">{weight / 10}</section>
            </aside>
            <aside className="card-section">
                <p className="card-section-title">Abilities</p>
                <ul>
                    {abilities.map((ability) => (
                        <li key={ability}>{ability}</li>
                    ))}
                </ul>
            </aside>
        </main>
    );
};



