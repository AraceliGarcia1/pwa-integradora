import React from "react";
import Yup from "../config/i18nYup";
import Crud from "../components/crud";
import servicio from "../services/ProductoService";
import formulario from "../components/producto/Formulario";
import RouteConstant from "./routeConstant";

// TITULO DE CRUD
const cabecera = {
  titulo: "Productos",
  descripcion:
    "Administración de registros, listar, registrar, actualizar, eliminar.",
  icono: "pe-7s-cart",
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
    name: "NOMBRE",
    center: true,
    selector: (row) => row.nombre,
  },
  {
    name: "DESCRIPCIÓN",
    center: true,
    selector: (row) => row.descripcion,
  },
  // {
  //   name: 'PRECIO',
  //   center: true,
  //   selector: row => `$${new Intl.NumberFormat().format(row.precio)}` ,
  // },
  {
    name: "EXISTENCIA",
    center: true,
    selector: (row) => row.totalExistencia || 0,
  },
  {
    name: "SUBCATEGORIA",
    center: true,
    selector: (row) => row.subcategoria.nombre,
  },
  {
    name: "CATEGORÍA",
    center: true,
    selector: (row) => row.subcategoria.categoria.nombre,
  },
  {
    name: "ACCIONES",
    center: true,
    selector: (row) => row.acciones,
  },
];

//VALOR INICIAL DEL OBJETO DEL FORMULARIO
const inicial = {
  nombre: "",
  descripcion: "",
  tallas:[],
  colores:[]
};

//VALIDACIONES POR CADA ATRIBUTO DEL FORMULARIO
let validaciones = Yup.object().shape({
  nombre: Yup.string().min(1).max(50).required(),
  descripcion: Yup.string().min(1).max(100).required(),
  // precio: Yup.number().min(0).required(),
  // existencia: Yup.number().min(0).required(),
  // color: Yup.string().min(1).max(100).required(),
  subcategoriaId: Yup.number().required(),
});

const ruta = {
  path: RouteConstant.PRODUCTO,
  component: () => (
    <Crud
      columnas={columnas}
      cabecera={cabecera}
      inicial={inicial}
      servicio={servicio}
      Formulario={formulario}
      validaciones={validaciones}
    />
  ),
};

export default ruta;
