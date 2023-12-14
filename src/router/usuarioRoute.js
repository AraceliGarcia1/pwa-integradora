import React from 'react';
import Yup from '../config/i18nYup';
import Crud from '../components/crud';
import servicio from "../services/UsuarioService";
import formulario from "../components/usuario/Formulario";
import RouteConstant from './routeConstant';
import Utileria from '../util';

// TITULO DE CRUD
const cabecera = {
    titulo: "Usuarios",
    descripcion: "Administración de registros, listar, registrar, actualizar, eliminar.",
    icono: "pe-7s-user-female"
};


//COLUMNAS DE TABLA
const columnas = [{
        name: 'ID USUARIO',
        center: true,
        selector: row => row.idUsuario,
        width: "10%"
    },
    {
        name: 'USUARIO',
        center: true,
        selector: row => row.usuario,
    },
    {
        name: 'NOMBRE COMPLETO',
        center: true,
        selector: row => row.persona ? `${row.persona.nombre} ${row.persona.primerApellido} ${row.persona.segundoApellido||''}` : row.usuario,
    },
    {
        name: 'FECHA DE REGISTRO',
        center: true,
        selector: row => Utileria.formatDateTime(row.fechaRegistro),
    },
    {
        name: 'TELÉFONO',
        center: true,
        selector: row => row.persona ? (row.persona.contacto ? row.persona.contacto.telefonoPrincipal || '- - -' : '- - -') : '- - -',
    },
    {
        name: 'CORREO',
        center: true,
        selector: row => row.persona ? (row.persona.contacto ? row.persona.contacto.correoElectronico || '- - -' : '- - -') : '- - -',
    },
    {
        name: 'ACCIONES',
        center: true,
        selector: row => row.acciones,
    }
];

//VALOR INICIAL DEL OBJETO DEL FORMULARIO
const inicial = {

    nombre: undefined,
    primerApellido: undefined,
    segundoApellido: undefined,
    fechaNacimiento: undefined,
    generoId: undefined,

    numeroExterior: undefined,
    calle: undefined,
    colonia: undefined,
    municipio: undefined,
    entidadFederativa: undefined,


    correoElectronico: undefined,
    telefonoPrincipal: undefined,
    telefonoSecundario: undefined,

};

//VALIDACIONES POR CADA ATRIBUTO DEL FORMULARIO
let validaciones = Yup.object().shape({
    nombre: Yup.string().min(1).max(100).required(),
    primerApellido: Yup.string().min(1).max(100).required(),
    segundoApellido: Yup.string().min(1).max(100),
    fechaNacimiento: Yup.string().min(1).max(100).required(),
    generoId: Yup.number().required(),
   
    numeroExterior: Yup.string().min(1).max(100).required(),
    calle: Yup.string().min(1).max(100).required(),
    colonia: Yup.string().min(1).max(100).required(),
    municipio: Yup.string().min(1).max(100).required(),
    entidadFederativa: Yup.string().min(1).max(100).required(),
   
    
    correoElectronico: Yup.string().min(1).max(100).required(),
    telefonoPrincipal: Yup.string().min(1).max(10).required(),
    telefonoSecundario: Yup.string().min(1).max(10).required(),
   
});

const ruta = {
    path: RouteConstant.USUARIO,
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