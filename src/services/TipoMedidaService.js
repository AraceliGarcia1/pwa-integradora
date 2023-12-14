import ServiceConstant from "./ServiceConstant";
import MainService from "./MainService";

export default class TipoMedidaService extends MainService {

    static listar() {
        return this.GET_SECURED(ServiceConstant.TIPO_MEDIDA_LISTAR);
    }

    static obtener(parametros) {
        return this.POST_SECURED(ServiceConstant.TIPO_MEDIDA_OBTENER, parametros);
    }

    static registrar(parametros) {
        return this.PUT_SECURED(ServiceConstant.TIPO_MEDIDA_REGISTRAR, parametros);
    }

    static actualizar(parametros) {
        return this.POST_SECURED(ServiceConstant.TIPO_MEDIDA_ACTUALIZAR, parametros);
    }

    static eliminar(parametros) {
        return this.DELETE_SECURED(ServiceConstant.TIPO_MEDIDA_ELIMINAR, parametros);
    }

}