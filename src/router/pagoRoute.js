import React from "react";
import Yup from "../config/i18nYup";
import Crud from "../components/crud";
import servicio from "../services/PagoService";
import formulario from "../components/pago/Formulario";
import RouteConstant from "./routeConstant";
import Utileria from "../util";
// TITULO DE CRUD
const cabecera = {
  titulo: "Pagos",
  descripcion:
    "Administración de registros, listar, registrar, actualizar, eliminar.",
  icono: "pe-7s-cash",
};

const formatter = new Intl.NumberFormat('es-MX', {
  style: 'decimal',
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});
//COLUMNAS DE TABLA
const columnas = [
  {
    name: 'NO.',
    center: true,
    selector: row => row.indice,
    width: "10%"
  },
  {
    name: "CLAVE DE PAGO",
    center: true,
    selector: (row) => row.clave,
  },
  {
    name: "FECHA DE PAGO",
    center: true,
    selector: (row) => Utileria.formatDateTime( row.fechaPago),
  },
  {
    name: "MONTO ABONADO",
    center: true,
    selector: row => `$${formatter.format(row.monto)}`,
  },
  {
    name: "RESPONSABLE",
    center: true,
    selector: ({persona}) => `${persona.nombre} ${persona.primerApellido}${persona.segundoApellido? ' '+persona.segundoApellido:''}`,
  },
  {
    name: "ACCIONES",
    center: true,
    selector: (row) => row.acciones,
  },
];

//VALOR INICIAL DEL OBJETO DEL FORMULARIO
const inicial = {
  compraId: "",
  monto: "",
};

//VALIDACIONES POR CADA ATRIBUTO DEL FORMULARIO
let validaciones = Yup.object().shape({
  monto: Yup.number().min(1).required(),
  compraId: Yup.number().required(),
});

const ruta = {
  path: RouteConstant.PAGO,
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
