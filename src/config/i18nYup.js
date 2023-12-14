import * as Yup from 'yup';

Yup.setLocale({
  mixed: {
    default: 'No es válido',
    required: 'Este campo es obligatorio',
    oneOf: 'Debe ser uno de los siguientes valores: ${values}',
    // Agrega más mensajes según sea necesario
  },
  string: {
    email: 'Introduce un correo electrónico válido',
    // Agrega más mensajes según sea necesario
  },
  // ... Otros mensajes para tipos de datos específicos
});

export default Yup;
