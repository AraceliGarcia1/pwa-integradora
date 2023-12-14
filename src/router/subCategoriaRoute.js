import React from 'react';
import Yup from '../config/i18nYup';
import Crud from '../components/crud';
import servicio from "../services/SubCategoriaService";
import formulario from "../components/subCategoria/Formulario";
import RouteConstant from './routeConstant';

// TITULO DE CRUD
const cabecera = {
  titulo: "SubCategorías",
  descripcion: "Administración de registros, listar, registrar, actualizar, eliminar.",
  icono: "pe-7s-safe"
};


//COLUMNAS DE TABLA
const columnas = [
  {
    name: 'NO.',
    center: true,
    selector: row => row.indice,
    width: "10%"
  },
  {
    name: 'NOMBRE',
    center: true,
    selector: row => row.nombre,
    width: "30%"
  },
  {
    name: 'CATEGORÍA',
    center: true,
    selector: row => row.categoria.nombre,
    width: "40%"
  },
  {
    name: 'ACCIONES',
    center: true,
    selector: row => row.acciones,
  }
];

//VALOR INICIAL DEL OBJETO DEL FORMULARIO
const inicial = {
  nombre: '',
  categoriaId: ''
};

//VALIDACIONES POR CADA ATRIBUTO DEL FORMULARIO
let validaciones = Yup.object().shape({
  nombre: Yup.string().min(1).max(50).required(),
  categoriaId: Yup.number().required()
});

const ruta = {
  path: RouteConstant.SUBCATEGORIA,
  component: () => (
    <Crud
      columnas={columnas}
      cabecera={cabecera}
      inicial={
        inicial
      }
      servicio={
        servicio
      }
      Formulario={
        formulario
      }
      validaciones={
        validaciones
      }
    />
  )

};

export default ruta;