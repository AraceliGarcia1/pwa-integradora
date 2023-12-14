import React, { useState, useEffect } from "react";
import { Label, InputGroup, FormGroup, Row, Col, Form, Button } from "reactstrap";
import { Field, ErrorMessage } from "formik";
import Utileria from "../../util";
import ProductoService from "../../services/ProductoService";
import DataTable from 'react-data-table-component';

const Formulario = ({ errors, touched, setValues, values, setFieldValue }) => {

  const [productos, setProductos] = useState([]);
  const [colores, setColores] = useState([]);
  const [tallas, setTallas] = useState([]);
  const [colorSeleccionado, setColorSeleccionado] = useState("#ffffff");


  const listarProductos = () => {
    ProductoService.listar().then(({ data }) => {
      setProductos(data);
    }).catch((e) => {
      Utileria.errorhttp(e);
    });
  };

  const onChangeProducto = (e) => {

    let idProducto = e?.target?.value || "";
    setFieldValue('productoId', idProducto);
    setColores([]);
    setTallas([]);
    obtenerProducto(idProducto);
  };

  const obtenerProducto = (idProducto) => {
    if (Utileria.nonEmpty(idProducto)) {
      ProductoService.obtener({ idProducto: idProducto }).then(({ data }) => {
        setColores(data.colores);
        setTallas([...new Set(data.medidas.map((item) => item.talla))]);
        if (Utileria.nonEmpty(values.colorId)) {
          let colorActual = data.colores.find(item => item.idColor == values.colorId);
          if(colorActual) {
            setColorSeleccionado(colorActual.color);
          }
        }
      });
    }
  }

  const onChangeColor = (e) => {

    let idColor = e?.target?.value || "";
    setFieldValue('colorId', idColor);
    setColorSeleccionado("#ffffff");
    if (Utileria.nonEmpty(idColor)) {
      let colorActual = colores.find(item => item.idColor == idColor);
      setColorSeleccionado(colorActual.color);
    }

  };





  useEffect(() => {
    listarProductos();
    obtenerProducto(values.productoId);
  }, []);



  return (
    <>
      <Form role="form">
        <Row>
          <Col>
            <FormGroup
              className={Utileria.claseInputForm(
                errors.productoId,
                touched.productoId
              )}
            >
              <Label htmlFor="productoId">Producto:</Label>
              <InputGroup className="input-group-alternative">
                <Field
                  className="form-control"
                  placeholder="Ingrese..."
                  id="productoId"
                  name="productoId"
                  type="number"
                  autoComplete="off"
                  required
                  as="select"
                  onChange={(event) => {
                    onChangeProducto(event)
                  }}
                >
                  <option value="">Seleccione...</option>
                  {productos.map((item) => (
                    <option
                      key={item.idProducto}
                      value={item.idProducto}
                    >
                      {`${item.nombre} / ${item?.subcategoria?.nombre} / ${item?.subcategoria?.categoria?.nombre}`}
                    </option>
                  ))}
                </Field>
              </InputGroup>
              <ErrorMessage
                name="productoId"
                component={() => (
                  <small className="text-danger">{errors.productoId}</small>
                )}
              />
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col>
            <FormGroup
              className={Utileria.claseInputForm(errors.precio, touched.precio)}
            >
              <Label htmlFor="precio">Precio:</Label>
              <InputGroup className="input-group-alternative">
                <Field
                  className="form-control"
                  placeholder="Precio del producto"
                  id="precio"
                  name="precio"
                  type="number"
                  autoComplete="off"
                  required
                />
              </InputGroup>
              <ErrorMessage
                name="precio"
                component={() => (
                  <small className="text-danger">{errors.precio}</small>
                )}
              />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup
              className={Utileria.claseInputForm(errors.existencia, touched.existencia)}
            >
              <Label htmlFor="existencia">Existencia:</Label>
              <InputGroup className="input-group-alternative">
                <Field
                  className="form-control"
                  placeholder="Existencia del producto"
                  id="existencia"
                  name="existencia"
                  type="number"
                  autoComplete="off"
                  required
                />
              </InputGroup>
              <ErrorMessage
                name="existencia"
                component={() => (
                  <small className="text-danger">{errors.existencia}</small>
                )}
              />
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col>
            <FormGroup
              className={Utileria.claseInputForm(
                errors.tallaId,
                touched.tallaId
              )}
            >
              <Label htmlFor="tallaId">Talla:</Label>
              <InputGroup className="input-group-alternative">
                <Field
                  className="form-control"
                  placeholder="Ingrese..."
                  id="tallaId"
                  name="tallaId"
                  type="number"
                  autoComplete="off"
                  required
                  as="select"
                >
                  <option value="">Seleccione...</option>
                  {tallas.map((item) => (
                    <option
                      key={item.idTalla}
                      value={item.idTalla}
                    >
                      {item.nombre}
                    </option>
                  ))}
                </Field>
              </InputGroup>
              <ErrorMessage
                name="tallaId"
                component={() => (
                  <small className="text-danger">{errors.tallaId}</small>
                )}
              />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup
              className={Utileria.claseInputForm(
                errors.colorId,
                touched.colorId
              )}
            >
              <Label htmlFor="colorId">Color:</Label>
              <InputGroup className="input-group-alternative">
                <Field
                  className="form-control"
                  placeholder="Ingrese..."
                  id="colorId"
                  name="colorId"
                  type="number"
                  autoComplete="off"
                  required
                  as="select"
                  style={{ backgroundColor: colorSeleccionado }}
                  onChange={(event) => {
                    onChangeColor(event)
                  }}
                >
                  <option value="">Seleccione...</option>
                  {colores.map((item) => (
                    <option
                      key={"color" + item.idColor}
                      value={item.idColor}
                      style={{ backgroundColor: item.color }}
                    >
                      {item.color}
                    </option>
                  ))}
                </Field>

              </InputGroup>
              <ErrorMessage
                name="colorId"
                component={() => (
                  <small className="text-danger">{errors.colorId}</small>
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
