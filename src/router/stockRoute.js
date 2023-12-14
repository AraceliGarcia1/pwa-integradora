import React from "react";
import Yup from "../config/i18nYup";
import Crud from "../components/crud";
import servicio from "../services/StockService";
import formulario from "../components/stock/Formulario";
import RouteConstant from "./routeConstant";

// TITULO DE CRUD
const cabecera = {
  titulo: "Almacén",
  descripcion: "Administración de registros, listar, registrar, actualizar, eliminar.",
  icono: "pe-7s-box1",
};

//COLUMNAS DE TABLA
const columnas = [{
  name: 'NO.',
  center: true,
  selector: row => row.indice,
  width: "10%"
},
{
  name: "PRODUCTO",
  center: true,
  selector: (row) => row?.producto.nombre,
},
{
  name: "PRECIO",
  center: true,
  selector: row => `$${new Intl.NumberFormat().format(row.precio)}`,
},
{
  name: "EXISTENCIA",
  center: true,
  selector: (row) => row.existencia || 0,
},
{
  name: "TALLA",
  center: true,
  selector: (row) => row?.talla?.nombre || '- - -',
},
{
  name: "COLOR",
  center: true,
  // selector: (row) => row?.color?.color || '- - -',
  cell: (row, index) => (
    row?.color ? ( <span style={{ backgroundColor: row.color.color,  borderRadius: '8px',  padding: '5px' }}>{row.color.color}</span>) : '- - -'
    
  ),
},
{
  name: "ACCIONES",
  center: true,
  selector: (row) => row.acciones,
},
];

//VALOR INICIAL DEL OBJETO DEL FORMULARIO
const inicial = {
  precio: "",
  existencia: "",
  productoId: "",
};

//VALIDACIONES POR CADA ATRIBUTO DEL FORMULARIO
let validaciones = Yup.object().shape({
  precio: Yup.number().min(0).required(),
  existencia: Yup.number().min(0).required(),
  productoId: Yup.number().required()
});


const ruta = {
  path: RouteConstant.STOCK,
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