
import { Label, InputGroup, FormGroup, Row, Col } from "reactstrap";
import { Form, Field, ErrorMessage } from "formik";
import React, { useState } from "react";
import Utileria from "../../util";


const Formulario = (props) => {
    let { errors, touched } = props;


    return (
        <>

            <Form role="form">

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
                                />
                            </InputGroup>
                            <ErrorMessage
                                name="nombre"
                                component={() => <small className="text-danger">{errors.nombre}</small>}
                            />
                        </FormGroup>
                    </Col>
                </Row>

            </Form>

        </>
    );
};

export default Formulario;
