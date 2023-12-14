import React, { useState, useMemo } from 'react';
import DataTable from 'react-data-table-component';
import { Input } from 'reactstrap';

const Tabla = ({ columnas, registros }) => {
  const [busquedaTexto, setBusquedaTexto] = useState('');
  const filtrados = registros.filter(item => JSON.stringify(item).toLowerCase().indexOf(busquedaTexto.toLowerCase()) !== -1);

  const subCabecera = useMemo(() => {
    return (
        <Input className='mb-4' name="busqueda" placeholder='Búsqueda...' type="text" onChange={(e) => setBusquedaTexto(e.target.value)} />
    );
  }, [busquedaTexto]);

  const sinResultados = (
    <div className="text-center">
      <p>Sin resultados disponibles</p>
    </div>
  );

  return (
    <DataTable
      columns={columnas}
      data={filtrados}
      subHeader
      subHeaderComponent={subCabecera}
      persistTableHead
      paginationComponentOptions={{
        rowsPerPageText: 'Filas por página',
        rangeSeparatorText: 'de',
        selectAllRowsItem: true,
        selectAllRowsItemText: 'Todos'
      }}
      pagination
      dense
      noDataComponent={sinResultados}
    />
  );
};

export default Tabla;
