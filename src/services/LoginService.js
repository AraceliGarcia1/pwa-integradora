import ServiceConstant from "./ServiceConstant";
import MainService from "./MainService";

export default class LoginService extends MainService {

    static login(parametros) {
        return this.POST_SECURED(ServiceConstant.LOGIN, parametros);
    }

}