/**
 * @author Kenia Reyes
 */
import React, {Component, Fragment} from 'react';
import moment from "moment";
import {
    ToastContainer,
    toast,
    Bounce,
    Slide,
    Flip,
    Zoom
} from 'react-toastify';


export default class Utileria {

    static FORMAT_DATE = "DD/MM/YYYY";
    static FORMAT_DATE_US = "YYYY-MM-DD"
    static FORMAT_DATE_TIME = "DD/MM/YYYY HH:mm";
    static FORMAT_TIME = "HH:mm";

    static isEmptyObject(object) {
        return Object.keys(object).length === 0 && object.constructor === Object;
    }

    static nonEmptyObject(object) {
        return !this.isEmptyObject(object)
    }

    static notifications(msj, type) {
        toast[type.toLowerCase()](msj)
    }

    static errorhttp(error) {
        console.log(error);
        let response = error.response;
        let status = 0;
        if (response !== undefined && Number(response.status) !== undefined) {
            status = response.status;
        }

        switch (status) {
            case 401:
                this.notifications("No estás autorizado para ver el recurso solicitado.", "ERROR");
                break;
            case 403:
                this.notifications("No tienes permisos para realizar la tarea.", "WARNING");
                break;
            case 404:
                this.notifications("No se encontró el recurso que solicitó.", "WARNING");
                break;
            case 400:
                let mensaje = response.data.mensaje || "Problemas en el servidor, notifique al administrador";
                if (this.nonEmptyList(response.data.errores)) {
                    mensaje += `: ${response.data.errores.map((error) => error).join(",")}`;
                }
                this.notifications(mensaje, "WARNING");
                break;
            default:
                this.notifications("Problemas en el servidor, notifique al administrador.", "ERROR");
        }
    }

    static validateDate(date) {
        return moment(date, this.FORMAT_DATE, true).isValid()
    }

    static endOfDay(date) {
        if (this.nonEmpty(date)) {
            return moment(date).endOf('day');
        }
        return null;
    }

    static startOfDay(date) {
        if (this.nonEmpty(date)) {
            return moment(date).startOf('day');
        }
        return null;
    }

    static formatDateDefault(date) {
        return moment(date).format()
    }

    static formatDate(date) {
        return moment(new Date(date)).locale("es").format("DD/MM/YYYY") || "---";
    }

    static formatDateTime(date) {
        if (this.nonEmpty(date)) {
            return moment(new Date(date)).locale("es").format("DD/MM/YYYY hh:mm a")
        }
        return null;
    }

    static formatTime(date) {
        if (this.nonEmpty(date)) {
            return moment(new Date(date)).format("hh:mm a")
        }
        return null;
    }

    static isEmptyList(list) {
        if (list !== null && list !== undefined && Array.isArray(list)) {
            return list.length === 0;
        }
        return true;
    }

    static nonEmptyList(list) {
        return !this.isEmptyList(list)
    }

    static nonEmpty(data, valueDafault) {
        if (valueDafault !== null && valueDafault !== undefined && valueDafault !== "") {
            if (data !== null && data !== undefined && data !== "") {
                return data;
            } else {
                return valueDafault;
            }
        }
        return data !== null && data !== undefined && data !== "";
    }
    static isEmpty(data) {
        return !this.nonEmpty(data);
    }

    static isNull(date) {
        return date === null || date === undefined;
    }

    static isNonNull(data) {
        return !this.isNull(data);
    }

    static isJSON(dataType) {
        return dataType === "json" || dataType === "application/json";
    }

    static catchError(e) {
        this.notifications(e || 'Ocurrió un error interno, intente nuevamente', "ERROR");
    }

    static claseInputForm = (errores, touched) => {
        if (errores && touched) {
            return 'has-danger';
        }
        if (!errores && touched) {
            return 'has-success';
        }
        return '';
    };

    static errorInput = (errors) => {
        return (<small className="text-danger">   {errors.usuario} </small>)
    };

}