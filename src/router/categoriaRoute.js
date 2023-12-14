import React from 'react';
import Yup from '../config/i18nYup';
import Crud from '../components/crud';
import servicio from "../services/CategoriaService";
import formulario from "../components/categoria/Formulario";
import RouteConstant from './routeConstant';

// TITULO DE CRUD
const cabecera = {
  titulo: "Categorías",
  descripcion: "Administración de registros, listar, registrar, actualizar, eliminar.",
  icono: "pe-7s-graph3"
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
    name: 'DESCRIPCIÓN',
    center: true,
    selector: row => row.descripcion,
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
  descripcion: ''
};

//VALIDACIONES POR CADA ATRIBUTO DEL FORMULARIO
let validaciones = Yup.object().shape({
  nombre: Yup.string().min(1).max(50).required(),
  descripcion: Yup.string().min(1).max(100).required()
});

const ruta = {
  path: RouteConstant.CATEGORIA,
  component: () => ( <
    Crud columnas = {
      columnas
    }
    cabecera = {
      cabecera
    }
    inicial = {
      inicial
    }
    servicio = {
      servicio
    }
    Formulario = {
      formulario
    }
    validaciones = {
      validaciones
    }
    />
  )

};

export default ruta;