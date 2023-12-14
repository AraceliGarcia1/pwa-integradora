import ServiceConstant from "./ServiceConstant";
import MainService from "./MainService";

export default class TallaService extends MainService {

    static listar() {
        return this.GET_SECURED(ServiceConstant.TALLA_LISTAR);
    }

    static obtener(parametros) {
        return this.POST_SECURED(ServiceConstant.TALLA_OBTENER, parametros);
    }

    static registrar(parametros) {
        return this.PUT_SECURED(ServiceConstant.TALLA_REGISTRAR, parametros);
    }

    static actualizar(parametros) {
        return this.POST_SECURED(ServiceConstant.TALLA_ACTUALIZAR, parametros);
    }

    static eliminar(parametros) {
        return this.DELETE_SECURED(ServiceConstant.TALLA_ELIMINAR, parametros);
    }

}