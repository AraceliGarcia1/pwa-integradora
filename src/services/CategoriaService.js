import ServiceConstant from "./ServiceConstant";
import MainService from "./MainService";

export default class CategoriaService extends MainService {

    static listar() {
        return this.GET_SECURED(ServiceConstant.CATEGORIA_LISTAR);
    }

    static obtener(parametros) {
        return this.POST_SECURED(ServiceConstant.CATEGORIA_OBTENER, parametros);
    }

    static registrar(parametros) {
        return this.PUT_SECURED(ServiceConstant.CATEGORIA_REGISTRAR, parametros);
    }

    static actualizar(parametros) {
        return this.POST_SECURED(ServiceConstant.CATEGORIA_ACTUALIZAR, parametros);
    }

    static eliminar(parametros) {
        return this.DELETE_SECURED(ServiceConstant.CATEGORIA_ELIMINAR, parametros);
    }

}