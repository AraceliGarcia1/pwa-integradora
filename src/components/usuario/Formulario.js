import React, { Fragment, useState, useEffect } from 'react';
import { Label, InputGroup, FormGroup, Row, Col } from "reactstrap";
import { Form, Field, ErrorMessage } from "formik";
import Utileria from "../../util";
import SubCategoriaService from '../../services/SubCategoriaService'

const Formulario = (props) => {

    let { errors, touched } = props;

    let [subcategorias, setSubcategorias] = useState([]);

    const listarSubctategorias = () => {

        SubCategoriaService.listar().then(({ data }) => {
            setSubcategorias(data);
        }).catch((e) => {
            Utileria.errorhttp(e);
        })
    };


    useEffect(() => {
        listarSubctategorias();
    }, []);

    return (
        <>

            <Form role="form">


                <h5>Información personal</h5>
                <Row>
                    <Col>
                        <FormGroup className={Utileria.claseInputForm(errors.nombre, touched.nombre)}>
                            <Label htmlFor="nombre">Nombre:</Label>
                            <InputGroup className="input-group-alternative">
                                <Field
                                    className="form-control"
                                    placeholder="Ingrese..."
                                    id="nombre"
                                    name="nombre"
                                    type="text"
                                    autoComplete="off"
                                    required
                                    maxlength="100"
                                />
                            </InputGroup>
                            <ErrorMessage
                                name="nombre"
                                component={() => <small className="text-danger">{errors.nombre}</small>}
                            />
                        </FormGroup>
                    </Col>
                    <Col>
                        <FormGroup className={Utileria.claseInputForm(errors.primerApellido, touched.primerApellido)}>
                            <Label htmlFor="primerApellido">Primer apellido:</Label>
                            <InputGroup className="input-group-alternative">
                                <Field
                                    className="form-control"
                                    placeholder="Ingrese..."
                                    id="primerApellido"
                                    name="primerApellido"
                                    type="text"
                                    autoComplete="off"
                                    required
                                    maxlength="100"
                                />
                            </InputGroup>
                            <ErrorMessage
                                name="primerApellido"
                                component={() => <small className="text-danger">{errors.primerApellido}</small>}
                            />
                        </FormGroup>
                    </Col>
                    <Col>
                        <FormGroup className={Utileria.claseInputForm(errors.segundoApellido, touched.segundoApellido)}>
                            <Label htmlFor="segundoApellido">Segundo apellido:</Label>
                            <InputGroup className="input-group-alternative">
                                <Field
                                    className="form-control"
                                    placeholder="Ingrese..."
                                    id="segundoApellido"
                                    name="segundoApellido"
                                    type="text"
                                    autoComplete="off"

                                    maxlength="100"
                                />
                            </InputGroup>
                            <ErrorMessage
                                name="segundoApellido"
                                component={() => <small className="text-danger">{errors.segundoApellido}</small>}
                            />
                        </FormGroup>
                    </Col>

                </Row>


                <Row>

                    <Col>
                        <FormGroup className={Utileria.claseInputForm(errors.fechaNacimiento, touched.fechaNacimiento)}>
                            <Label htmlFor="nombre">Fecha de nacimiento:</Label>
                            <InputGroup className="input-group-alternative">
                                <Field
                                    className="form-control"
                                    placeholder="Ingrese..."
                                    id="fechaNacimiento"
                                    name="fechaNacimiento"
                                    type="date"
                                    autoComplete="off"
                                    required
                                />

                            </InputGroup>
                            <ErrorMessage
                                name="fechaNacimiento"
                                component={() => <small className="text-danger">{errors.fechaNacimiento}</small>}
                            />
                        </FormGroup>
                    </Col>

                    <Col>
                        <FormGroup className={Utileria.claseInputForm(errors.generoId, touched.generoId)}>
                            <Label htmlFor="generoId">Genero:</Label>
                            <InputGroup className="input-group-alternative">
                                <Field
                                    className="form-control"
                                    placeholder="Ingrese..."
                                    id="generoId"
                                    name="generoId"
                                    type="number"
                                    autoComplete="off"
                                    required
                                    as="select"
                                >

                                    {
                                        subcategorias.map((item) => (
                                            <option key={item.idSubcategoria} value={item.idSubcategoria}>
                                                {item.nombre + " / " + item.categoria.nombre}
                                            </option>
                                        ))
                                    }

                                </Field>
                            </InputGroup>
                            <ErrorMessage
                                name="generoId"
                                component={() => <small className="text-danger">{errors.generoId}</small>}
                            />
                        </FormGroup>
                    </Col>

                </Row>

                <hr />
                <h5>Información de dirección</h5>

                <Row>

                    <Col>
                        <FormGroup className={Utileria.claseInputForm(errors.numeroExterior, touched.numeroExterior)}>
                            <Label htmlFor="numeroExterior">No. exterior:</Label>
                            <InputGroup className="input-group-alternative">
                                <Field
                                    className="form-control"
                                    placeholder="Ingrese..."
                                    id="numeroExterior"
                                    name="numeroExterior"
                                    type="number"
                                    autoComplete="off"
                                    required
                                />

                            </InputGroup>
                            <ErrorMessage
                                name="numeroExterior"
                                component={() => <small className="text-danger">{errors.numeroExterior}</small>}
                            />
                        </FormGroup>
                    </Col>

                    <Col>
                        <FormGroup className={Utileria.claseInputForm(errors.calle, touched.calle)}>
                            <Label htmlFor="calle">Calle:</Label>
                            <InputGroup className="input-group-alternative">
                                <Field
                                    className="form-control"
                                    placeholder="Ingrese..."
                                    id="calle"
                                    name="calle"
                                    type="text"
                                    autoComplete="off"
                                    required
                                />

                            </InputGroup>
                            <ErrorMessage
                                name="calle"
                                component={() => <small className="text-danger">{errors.calle}</small>}
                            />
                        </FormGroup>
                    </Col>
                    <Col>
                        <FormGroup className={Utileria.claseInputForm(errors.colonia, touched.colonia)}>
                            <Label htmlFor="colonia">Colonia:</Label>
                            <InputGroup className="input-group-alternative">
                                <Field
                                    className="form-control"
                                    placeholder="Ingrese..."
                                    id="colonia"
                                    name="colonia"
                                    type="text"
                                    autoComplete="off"
                                    required
                                />

                            </InputGroup>
                            <ErrorMessage
                                name="colonia"
                                component={() => <small className="text-danger">{errors.colonia}</small>}
                            />
                        </FormGroup>
                    </Col>


                </Row>
                <Row>

                    <Col>
                        <FormGroup className={Utileria.claseInputForm(errors.municipio, touched.municipio)}>
                            <Label htmlFor="municipio">Municipio:</Label>
                            <InputGroup className="input-group-alternative">
                                <Field
                                    className="form-control"
                                    placeholder="Ingrese..."
                                    id="municipio"
                                    name="municipio"
                                    type="text"
                                    autoComplete="off"
                                    required
                                />

                            </InputGroup>
                            <ErrorMessage
                                name="municipio"
                                component={() => <small className="text-danger">{errors.municipio}</small>}
                            />
                        </FormGroup>
                    </Col>

                    <Col>
                        <FormGroup className={Utileria.claseInputForm(errors.entidadFederativa, touched.entidadFederativa)}>
                            <Label htmlFor="entidadFederativa">Entidad federativa:</Label>
                            <InputGroup className="input-group-alternative">
                                <Field
                                    className="form-control"
                                    placeholder="Ingrese..."
                                    id="entidadFederativa"
                                    name="entidadFederativa"
                                    type="text"
                                    autoComplete="off"
                                    required
                                />

                            </InputGroup>
                            <ErrorMessage
                                name="entidadFederativa"
                                component={() => <small className="text-danger">{errors.entidadFederativa}</small>}
                            />
                        </FormGroup>
                    </Col>
                </Row>
                <hr />
                <h5>Información de contacto</h5>

                <Row>

                    <Col>
                        <FormGroup className={Utileria.claseInputForm(errors.correoElectronico, touched.correoElectronico)}>
                            <Label htmlFor="correoElectronico">Correo electronico:</Label>
                            <InputGroup className="input-group-alternative">
                                <Field
                                    className="form-control"
                                    placeholder="Ingrese..."
                                    id="correoElectronico"
                                    name="correoElectronico"
                                    type="email"
                                    autoComplete="off"
                                    required
                                />

                            </InputGroup>
                            <ErrorMessage
                                name="correoElectronico"
                                component={() => <small className="text-danger">{errors.correoElectronico}</small>}
                            />
                        </FormGroup>
                    </Col>

                    <Col>
                        <FormGroup className={Utileria.claseInputForm(errors.telefonoPrincipal, touched.telefonoPrincipal)}>
                            <Label htmlFor="telefonoPrincipal">Teléfono principal:</Label>
                            <InputGroup className="input-group-alternative">
                                <Field
                                    className="form-control"
                                    placeholder="Ingrese..."
                                    id="telefonoPrincipal"
                                    name="telefonoPrincipal"
                                    type="text"
                                    autoComplete="off"
                                    required
                                />

                            </InputGroup>
                            <ErrorMessage
                                name="telefonoPrincipal"
                                component={() => <small className="text-danger">{errors.telefonoPrincipal}</small>}
                            />
                        </FormGroup>
                    </Col>
                    <Col>
                        <FormGroup className={Utileria.claseInputForm(errors.telefonoSecundario, touched.telefonoSecundario)}>
                            <Label htmlFor="telefonoSecundario">Teléfono secundario:</Label>
                            <InputGroup className="input-group-alternative">
                                <Field
                                    className="form-control"
                                    placeholder="Ingrese..."
                                    id="telefonoSecundario"
                                    name="telefonoSecundario"
                                    type="text"
                                    autoComplete="off"
                                    
                                />

                            </InputGroup>
                            <ErrorMessage
                                name="telefonoSecundario"
                                component={() => <small className="text-danger">{errors.telefonoSecundario}</small>}
                            />
                        </FormGroup>
                    </Col>


                </Row>
               
                <hr />
            </Form>

        </>
    );
};

export default Formulario;
