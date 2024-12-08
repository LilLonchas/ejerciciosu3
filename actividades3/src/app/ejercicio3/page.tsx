import React from "react";
import { ListarHeroes } from "@/componentes/Listaheroes"; // Asegúrate de importar el componente correctamente

export default function ejercicio3() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Lista de Héroes</h1>
      <ListarHeroes publisher="Marvel Comics" />
      <ListarHeroes publisher="DC Comics" />
    </div>
  );
}
