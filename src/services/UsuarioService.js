import ServiceConstant from "./ServiceConstant";
import MainService from "./MainService";

export default class UsuarioService extends MainService {

    static listar() {
        return this.GET_SECURED(ServiceConstant.USUARIO_LISTAR);
    }

    static obtener(parametros) {
        return this.POST_SECURED(ServiceConstant.USUARIO_OBTENER, parametros);
    }

    static registrar(parametros) {
        const data = {

            nombre: parametros.nombre,
            primerApellido: parametros.primerApellido,
            segundoApellido: parametros.segundoApellido,
            fechaNacimiento: parametros.fechaNacimiento,
            generoId: parametros.generoId,

            direccion: {
                numeroExterior: parametros.numeroExterior,
                calle: parametros.calle,
                colonia: parametros.colonia,
                municipio: parametros.municipio,
                entidadFederativa: parametros.entidadFederativa,
            },
            contacto: {
                correoElectronico: parametros.correoElectronico,
                telefonoPrincipal: parametros.telefonoPrincipal,
                telefonoSecundario: parametros.telefonoSecundario,
            }
        };
        return this.PUT_SECURED(ServiceConstant.USUARIO_REGISTRAR, data);
    }

    static actualizar(parametros) {
        const data = {

            idUsuario: parametros.idUsuario,
            nombre: parametros.nombre,
            primerApellido: parametros.primerApellido,
            segundoApellido: parametros.segundoApellido,
            fechaNacimiento: parametros.fechaNacimiento,
            generoId: parametros.generoId,

            direccion: {
                numeroExterior: parametros.numeroExterior,
                calle: parametros.calle,
                colonia: parametros.colonia,
                municipio: parametros.municipio,
                entidadFederativa: parametros.entidadFederativa,
            },
            contacto: {
                correoElectronico: parametros.correoElectronico,
                telefonoPrincipal: parametros.telefonoPrincipal,
                telefonoSecundario: parametros.telefonoSecundario,
            }
        };
        return this.POST_SECURED(ServiceConstant.USUARIO_ACTUALIZAR, data);
    }

    static eliminar(parametros) {
        return this.DELETE_SECURED(ServiceConstant.USUARIO_ELIMINAR, parametros);
    }

}