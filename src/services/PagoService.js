import ServiceConstant from "./ServiceConstant";
import MainService from "./MainService";

export default class PagoService extends MainService {

    static listar() {
        return this.GET_SECURED(ServiceConstant.PAGO_LISTAR);
    }

    static obtener(parametros) {
        return this.POST_SECURED(ServiceConstant.PAGO_OBTENER, parametros);
    }

    static registrar(parametros) {
        return this.PUT_SECURED(ServiceConstant.PAGO_REGISTRAR, parametros);
    }

    static actualizar(parametros) {
        return this.POST_SECURED(ServiceConstant.PAGO_ACTUALIZAR, parametros);
    }

    static eliminar(parametros) {
        return this.DELETE_SECURED(ServiceConstant.PAGO_ELIMINAR, parametros);
    }

}