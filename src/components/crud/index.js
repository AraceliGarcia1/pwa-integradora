import React, { Fragment, useState, useEffect } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { Row, Col, Card, CardBody, Button, CardTitle } from 'reactstrap';
import { Formik, useFormik, Field } from "formik";
import AppHeader from '../../Layout/AppHeader/';
import AppSidebar from '../../Layout/AppSidebar/';
import PageTitle from '../../Layout/AppMain/PageTitle';
import Tabla from '../tabla';
import Utileria from '../../util';



const Crud = (props) => {

  let { cabecera, columnas, servicio, Formulario, inicial, validaciones } = props;

  const LISTADO = 1;
  const REGISTRO = 2;
  const MODIFICACION = 3;

  const [registros, setRegistros] = useState([]);
  const [vista, setVista] = useState(LISTADO);
  const [enviando, setEnviando] = useState(false);
  let [valoresFormulario, setValoresFormulario] = useState({});


  let obtener = (params, i) => {

    if (!enviando) {

      setEnviando(true);

      servicio.obtener(params).then(({ data }) => {
        setValoresFormulario(data);
        setVista(MODIFICACION);
      }).catch((e) => {
        Utileria.errorhttp(e);
      }).finally(() => {
        setEnviando(false);
      });

    }
  };


  let eliminar = (params, i) => {
    if (!enviando) {

      const resultado = window.confirm('¿Desea eliminar el elemento?');

      if (resultado) {
        servicio.eliminar(params).then((response) => {
          listar();
          Utileria.notifications("Eliminado correctamente.", "success")
        }).catch((e) => {
          Utileria.errorhttp(e);
        }).finally(() => {
          setEnviando(false);
        })
      } else {
        setEnviando(false);
      }



    }
  };
  const listar = () => {
    servicio.listar().then(({ data }) => {

      let datos = data.map((item, i) => {
        item["indice"] = (<div>{i + 1}</div>)
        item["acciones"] = (<div>

          <Button onClick={() => eliminar(item)} outline className="my-2 border-0 btn-transition" color="danger">
            <i className="pe-7s-trash" style={{ fontSize: 19 }} />
          </Button>
          <Button onClick={() => obtener(item)} outline className="my-2 me-2 border-0 btn-transition" color="warning">
            <i className="pe-7s-pen" style={{ fontSize: 19 }} />
          </Button>
        </div>);
        return item;
      })
      setRegistros(datos);

    }).catch((e) => {
      Utileria.errorhttp(e);
    });
  };

  const registrar = (valores) => {
    console.log('valores', valores);
    if (!enviando) {
      setEnviando(true);

      servicio.registrar(valores).then(({ data, status }) => {
        listar();
        Utileria.notifications("Se ha registrado correctamente.", "SUCCESS");
        setValoresFormulario(inicial);
        setVista(LISTADO);
      }).catch((e) => {
        Utileria.errorhttp(e);
      }).finally(() => {
        setEnviando(false);
      });
    }
  };

  let actualizar = (valores) => {

    if (!enviando) {
      setEnviando(true);

      servicio.actualizar(valores).then(({ data, status }) => {
        listar();
        Utileria.notifications("Se ha actualizado correctamente.", "SUCCESS");
        setValoresFormulario(inicial);
        setVista(LISTADO);
      }).catch((e) => {
        Utileria.errorhttp(e);
      }).finally(() => {
        setEnviando(false);
      });
    }
  };


  const guardar = (valores) => {
    switch (vista) {
      case REGISTRO:
        registrar(valores);
        break;
      case MODIFICACION:
        actualizar(valores);
        break;
      default:
        break;
    }
  };



  const formularioFormik = (props) => {
    const { errors, touched, isValid, values, setValues, setFieldValue } = props;
    let cancelar = () => {
      setValoresFormulario(inicial)
      setVista(LISTADO);
    };

    return (
      <div>

        <Formulario errors={errors} touched={touched} values={values} isValid={isValid} setValues={setValues} setFieldValue={setFieldValue} />

        <div className="text-center">
          <Button className="mt-4 hand m-3"
            color="warning" type="button"
            onClick={() => { cancelar() }}
            disabled={enviando}>
            <i className="pe-7s-back-2" /> Cancelar
          </Button>
          <Button className="mt-4 hand m-3"
            color="success" type="submit"
            onClick={() => { guardar(values) }}
            disabled={!(isValid) || enviando}>
            {/* disabled={!(isValid && Utileria.nonEmptyObject(touched)) || enviando}> */}
            {enviando ? 'Guardando...' : 'Guardar'} <i className="pe-7s-diskette" />
          </Button>
        </div>
      </div>
    );
  };

  const vistaListado = () => {
    if (vista === LISTADO) {
      return (
        <Card className="main-card mb-3">
          <div style={{ marginLeft: 40, marginTop: 40 }} className='row'>
            <Col md="10">
              <PageTitle
                className="col-10"
                heading={cabecera.titulo}
                subheading={cabecera.descripcion}
                icon={cabecera.icono || "pe-7s-tools"}
              />
            </Col>
            <Col md="2">
              <CardTitle className="text-center mt-2">
                <i className="pe-7s-plus btn-outline-2x hand col-2" style={{ fontSize: '2.5em' }} size="lg" onClick={() => setVista(REGISTRO)} />
              </CardTitle>
            </Col>
          </div>
          <CardBody>
            <Tabla columnas={columnas} registros={registros} />
          </CardBody>
        </Card>)
    }
    return "";
  };

  const vistaFormulario = () => {
    if (vista === REGISTRO || vista === MODIFICACION) {
      return (
        <Card className="main-card mb-3">
          <div style={{ marginLeft: 40, marginTop: 40 }} className='row'>
            <Col md="12">
              <PageTitle
                className="col-10"
                heading={cabecera.titulo}
                subheading={cabecera.descripcion}
                icon={cabecera.icono || "pe-7s-tools"}
              />
              <hr/>
            </Col>
            
          </div>
          <CardBody className='mt-1'>

            <div className="ml-8 mr-8">
              <Formik initialValues={valoresFormulario} validationSchema={validaciones} >
                {formularioFormik}
              </Formik>
            </div>
          </CardBody>
        </Card>)
    }
    return "";
  };

  useEffect(() => {
    listar();
    setValoresFormulario(inicial);
  }, []);


  return (
    <Fragment>
      <AppHeader />
      <div className="app-main">
        <AppSidebar />
        <div className="app-main__outer">
          <div className="app-main__inner">
            <Fragment>
              <TransitionGroup>
                <CSSTransition component="div" appear={true} timeout={0} enter={false} exit={false}>
                  <div>
                    <div>
                      <Row>
                        <Col lg="12">
                          {vistaListado()}
                          {vistaFormulario()}
                        </Col>
                      </Row>
                    </div>
                  </div>
                </CSSTransition>
              </TransitionGroup>
            </Fragment>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Crud;
