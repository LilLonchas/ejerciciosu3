import React from "react";
import heroes from "../heroes.json"; // Importamos el archivo JSON

// Componente que muestra los héroes según el publisher
export const ListarHeroes = ({ publisher }: { publisher: string }) => {
  // Filtrar los héroes según el publisher
  const heroesFiltrados = heroes.filter(heroe => heroe.publisher === publisher);

  return (
    <div>
      <h2 className="text-2xl font-bold">{publisher}</h2>
      <ul className="list-disc pl-5">
        {heroesFiltrados.map(heroe => (
          <li key={heroe.id}>{heroe.superhero}</li>
        ))}
      </ul>
    </div>
  );
};
