
import React from 'react';

interface CardProps {
  title?: string; // Título opcional
  description?: string; // Descripción opcional
  className?: string; // Clase CSS opcional
}

export const Card: React.FC<CardProps> = ({ 
  title = "Título por defecto", 
  description = "Descripción por defecto", 
  className = '' 
}) => {
  return (
    <div className={`bg-white shadow-md rounded-lg p-4 border border-gray-200 ${className}`}>
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};
