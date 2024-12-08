
import React from 'react';
import { Card } from "@/componentes/Card"; 

export default function Ejercicio2() {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Ejemplo de Cards con Props</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <Card 
          title="Primera Tarjeta" 
          description="Esta es la descripción de la primera tarjeta." 
          className="bg-blue-50"
        />

        <Card 
          title="Segunda Tarjeta" 
          description="Descripción de la segunda tarjeta. Con estilos personalizados."
          className="bg-green-50"
        />

        <Card 
          title="Tercera Tarjeta" 
          description="¡Otra tarjeta más! Props dinámicos con estilos."
          className="bg-yellow-50"
        />
      </div>
    </div>
  );
}
