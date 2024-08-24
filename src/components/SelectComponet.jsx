import React, { useState } from 'react';

export function MiComponente() {
  const [cantidad, setCantidad] = useState(''); // Estado para la cantidad seleccionada

  // Simula obtener las opciones desde tu API (reemplaza esto con tus datos reales)
  const opciones = ['1', '2', '3', '4','5', '6', '7', '8', '9']; // Ejemplo: ['1', '2', '3'] según tus unidades

  const handleSelectChange = (event) => {
    setCantidad(event.target.value); // Actualiza el estado con la opción seleccionada
  };

  return (
    <div>
      <p className="rating">
        <span>Cantidad:</span>
        <select value={cantidad} onChange={handleSelectChange}>
          <option value="">1 unidad</option>
          {opciones.map((opcion) => (
            <option key={opcion} value={opcion}>
              {opcion}
            </option>
          ))}
        </select>
      </p>
    </div>
  );
}

