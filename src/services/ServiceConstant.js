import {ENDPOINT} from "../config/ApiConfig";

export default class ServiceConstant {

    static LOGIN =  `${ENDPOINT}auth/login`;

    static CATEGORIA_LISTAR =  `${ENDPOINT}categoria`;
    static CATEGORIA_REGISTRAR =  `${ENDPOINT}categoria/registrar`;
    static CATEGORIA_OBTENER =  `${ENDPOINT}categoria/obtener`;
    static CATEGORIA_ACTUALIZAR =  `${ENDPOINT}categoria/actualizar`;
    static CATEGORIA_ELIMINAR =  `${ENDPOINT}categoria/eliminar`;

    static PRODUCTO_LISTAR =  `${ENDPOINT}producto`;
    static PRODUCTO_REGISTRAR =  `${ENDPOINT}producto/registrar`;
    static PRODUCTO_OBTENER =  `${ENDPOINT}producto/obtener`;
    static PRODUCTO_ACTUALIZAR =  `${ENDPOINT}producto/actualizar`;
    static PRODUCTO_ELIMINAR =  `${ENDPOINT}producto/eliminar`;

    static STOCK_LISTAR =  `${ENDPOINT}stock`;
    static STOCK_REGISTRAR =  `${ENDPOINT}stock/registrar`;
    static STOCK_OBTENER =  `${ENDPOINT}stock/obtener`;
    static STOCK_ACTUALIZAR =  `${ENDPOINT}stock/actualizar`;
    static STOCK_ELIMINAR =  `${ENDPOINT}stock/eliminar`;

    static PAGO_LISTAR =  `${ENDPOINT}pago`;
    static PAGO_REGISTRAR =  `${ENDPOINT}pago/registrar`;
    static PAGO_OBTENER =  `${ENDPOINT}pago/obtener`;
    static PAGO_ACTUALIZAR =  `${ENDPOINT}pago/actualizar`;
    static PAGO_ELIMINAR =  `${ENDPOINT}pago/eliminar`;

    static SUBCATEGORIA_LISTAR =  `${ENDPOINT}subcategoria`;
    static SUBCATEGORIA_REGISTRAR =  `${ENDPOINT}subcategoria/registrar`;
    static SUBCATEGORIA_OBTENER =  `${ENDPOINT}subcategoria/obtener`;
    static SUBCATEGORIA_ACTUALIZAR =  `${ENDPOINT}subcategoria/actualizar`;
    static SUBCATEGORIA_ELIMINAR =  `${ENDPOINT}subcategoria/eliminar`;

    static USUARIO_LISTAR =  `${ENDPOINT}usuario`;
    static USUARIO_REGISTRAR =  `${ENDPOINT}usuario/registrar`;
    static USUARIO_OBTENER =  `${ENDPOINT}usuario/obtener`;
    static USUARIO_ACTUALIZAR =  `${ENDPOINT}usuario/actualizar`;
    static USUARIO_ELIMINAR =  `${ENDPOINT}usuario/eliminar`;

    static TALLA_LISTAR = `${ENDPOINT}talla`;
    static TALLA_REGISTRAR = `${ENDPOINT}talla/registrar`;
    static TALLA_OBTENER = `${ENDPOINT}talla/obtener`;
    static TALLA_ACTUALIZAR = `${ENDPOINT}talla/actualizar`;
    static TALLA_ELIMINAR = `${ENDPOINT}talla/eliminar`;

    static TIPO_MEDIDA_LISTAR = `${ENDPOINT}tipoMedida`;
    static TIPO_MEDIDA_REGISTRAR = `${ENDPOINT}tipoMedida/registrar`;
    static TIPO_MEDIDA_OBTENER = `${ENDPOINT}tipoMedida/obtener`;
    static TIPO_MEDIDA_ACTUALIZAR = `${ENDPOINT}tipoMedida/actualizar`;
    static TIPO_MEDIDA_ELIMINAR = `${ENDPOINT}tipoMedida/eliminar`;

}