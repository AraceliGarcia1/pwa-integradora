const CONFIGURACION = {
  PROTOCOLO:
    process.env.NODE_ENV === "production"
      ? process.env.REACT_APP_API_PROTOCOL_PROD
      : process.env.REACT_APP_API_PROTOCOL_DEV,
  HOST:
    process.env.NODE_ENV === "production"
      ? process.env.REACT_APP_API_HOST_PROD
      : process.env.REACT_APP_API_HOST_DEV,
  PUERTO:
    process.env.NODE_ENV === "production"
      ? process.env.REACT_APP_API_PORT_PROD
      : process.env.REACT_APP_API_PORT_DEV,
  CONTEXT:
    process.env.NODE_ENV === "production"
      ? process.env.REACT_APP_API_CONTEXT_PROD
      : process.env.REACT_APP_API_CONTEXT_DEV,
};

export const ENDPOINT = `${CONFIGURACION.PROTOCOLO}://${CONFIGURACION.HOST}:${CONFIGURACION.PUERTO}/${CONFIGURACION.CONTEXT}/`;
