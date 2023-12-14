import ServiceConstant from "./ServiceConstant";
import MainService from "./MainService";

export default class StockService extends MainService {

    static listar() {
        return this.GET_SECURED(ServiceConstant.STOCK_LISTAR);
    }

    static obtener(parametros) {
        return this.POST_SECURED(ServiceConstant.STOCK_OBTENER, parametros);
    }

    static registrar(parametros) {
        return this.PUT_SECURED(ServiceConstant.STOCK_REGISTRAR, parametros);
    }

    static actualizar(parametros) {
        return this.POST_SECURED(ServiceConstant.STOCK_ACTUALIZAR, parametros);
    }

    static eliminar(parametros) {
        return this.DELETE_SECURED(ServiceConstant.STOCK_ELIMINAR, parametros);
    }

}