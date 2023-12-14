import ServiceConstant from "./ServiceConstant";
import MainService from "./MainService";

export default class SubCategoriaService extends MainService {

    static listar() {
        return this.GET_SECURED(ServiceConstant.SUBCATEGORIA_LISTAR);
    }

    static obtener(parametros) {
        return this.POST_SECURED(ServiceConstant.SUBCATEGORIA_OBTENER, parametros);
    }

    static registrar(parametros) {
        return this.PUT_SECURED(ServiceConstant.SUBCATEGORIA_REGISTRAR, parametros);
    }

    static actualizar(parametros) {
        return this.POST_SECURED(ServiceConstant.SUBCATEGORIA_ACTUALIZAR, parametros);
    }

    static eliminar(parametros) {
        return this.DELETE_SECURED(ServiceConstant.SUBCATEGORIA_ELIMINAR, parametros);
    }

}