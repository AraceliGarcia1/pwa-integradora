import React, { useState, useEffect } from "react";
import { Label, InputGroup, FormGroup, Row, Col } from "reactstrap";
import { Form, Field, ErrorMessage } from "formik";
import Utileria from "../../util";
import CategoriaService from "../../services/CategoriaService";

const Formulario = (props) => {
    let { errors, touched } = props;

    const [categorias, setCategorias] = useState([]);


    const listarCategorias = () => {
        CategoriaService.listar().then(({ data }) => {
            setCategorias(data);
        }).catch((e) => {
            Utileria.errorhttp(e);
        });
    };


    useEffect(() => {
        listarCategorias();
    }, []);

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
                    <Col>
                        <FormGroup
                            className={Utileria.claseInputForm(
                                errors.categoriaId,
                                touched.categoriaId
                            )}
                        >
                            <Label htmlFor="categoriaId">Categoría:</Label>
                            <InputGroup className="input-group-alternative">
                                <Field
                                    className="form-control"
                                    placeholder="Ingrese..."
                                    id="categoriaId"
                                    name="categoriaId"
                                    type="number"
                                    autoComplete="off"
                                    required
                                    as="select"
                                >
                                    <option value="">Seleccione...</option>
                                    {categorias.map((item) => (
                                        <option
                                            key={item.idCategoria}
                                            value={item.idCategoria}
                                        >
                                           {item.nombre}
                                        </option>
                                    ))}
                                </Field>
                            </InputGroup>
                            <ErrorMessage
                                name="categoriaId"
                                component={() => (
                                    <small className="text-danger">{errors.categoriaId}</small>
                                )}
                            />
                        </FormGroup>
                    </Col>
                </Row>

            </Form>

        </>
    );
};

export default Formulario;
