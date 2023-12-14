import ServiceConstant from "./ServiceConstant";
import MainService from "./MainService";

export default class ProductoService extends MainService {

    static listar() {
        return this.GET_SECURED(ServiceConstant.PRODUCTO_LISTAR);
    }

    static obtener(parametros) {
        return this.POST_SECURED(ServiceConstant.PRODUCTO_OBTENER, parametros);
    }

    static registrar(parametros) {
        return this.PUT_SECURED(ServiceConstant.PRODUCTO_REGISTRAR, parametros);
    }

    static actualizar(parametros) {
        return this.POST_SECURED(ServiceConstant.PRODUCTO_ACTUALIZAR, parametros);
    }

    static eliminar(parametros) {
        return this.DELETE_SECURED(ServiceConstant.PRODUCTO_ELIMINAR, parametros);
    }

}