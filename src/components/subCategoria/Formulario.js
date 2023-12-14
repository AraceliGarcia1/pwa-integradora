import React, { useState, useEffect } from "react";
import { Label, InputGroup, FormGroup, Row, Col, UncontrolledCarousel } from "reactstrap";
import { Form, Field, ErrorMessage, Formik } from "formik";
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Utileria from "../../util";
import CategoriaService from "../../services/CategoriaService";

const Formulario = (props) => {
    let { errors, touched } = props;

    const [categorias, setCategorias] = useState([]);
    const [file, setFile] = useState([]);

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

    const items = [
        {
            src: 'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_15ba800aa1d%20text%20%7B%20fill%3A%23555%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_15ba800aa1d%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22285.921875%22%20y%3D%22218.3%22%3EFirst%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E',
            header: 'Slide 1 Header'
        },
        {
            src: 'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_15ba800aa20%20text%20%7B%20fill%3A%23444%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_15ba800aa20%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23666%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22247.3203125%22%20y%3D%22218.3%22%3ESecond%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E',
            altText: 'Slide 2',
            caption: 'Slide 2',
            header: 'Slide 2 Header'
        },
        {
            src: 'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_15ba800aa21%20text%20%7B%20fill%3A%23333%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_15ba800aa21%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23555%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22277%22%20y%3D%22218.3%22%3EThird%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E',
            altText: 'Slide 3',
            caption: 'Slide 3',
            header: 'Slide 3 Header'
        }
    ];

    const onChange = (e) => {
        setFile(...file, URL.createObjectURL(e.target.files[0]));


        console.log(file, 'files ahahaha');
    }

    const [selectedImages, setSelectedImages] = useState([]);
    const [error, setError] = useState(null);
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    const handleImageChange = (event) => {
        const files = event.target.files;
        const maxAllowedFiles = 1;

        if (files.length > maxAllowedFiles) {
            setError(`Selecciona como máximo ${maxAllowedFiles} archivo.`);
            return;
        }

        const imageFiles = Array.from(files).filter((file) =>
            file.type.startsWith('image/')
        );

        if (imageFiles.length > 0) {
            const imagesArray = imageFiles.map((file) => URL.createObjectURL(file));
            setSelectedImages(imagesArray);
            setError(null);
        } else {
            setSelectedImages([]);
            setError('Solo se permiten archivos de imagen (JPEG, PNG, GIF, etc.)');
        }

    };

    return (
        <>

            <Form role="form" >

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
                    <Col xs="12">
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            
                             <label for="files" style={{ labelStyle }} class="btn">Escoge una imagen</label>
                            <input
                                type="file"
                                multiple
                                accept="image/*"
                                onChange={handleImageChange}
                                
                               
                            />
                            {error && <p style={{ color: 'red' }}>{error}</p>}
                            {selectedImages.length > 0 && (
                                <div style={{ maxWidth: '400px', width: '100%', margin: 'auto' }}>
                                    <Slider {...settings}>
                                        {selectedImages.map((image, index) => (
                                            <img
                                                src={image}
                                                alt={`Preview ${index}`}
                                                style={{ height: 50, objectFit: 'cover' }}
                                            />

                                        ))}
                                    </Slider>
                                </div>
                            )}
                        </div>
                    </Col>
                </Row>

            </Form>

        </>
    );
};

export default Formulario;
const yourBtnStyle = {
    position: 'relative',
    top: '150px',
    fontFamily: 'calibri',
    width: '150px',
    padding: '10px',
    borderRadius: '5px',
    border: '1px dashed #BBB',
    textAlign: 'center',
    backgroundColor: '#DDD',
    cursor: 'pointer',
  };

  const labelStyle = {
    backgroundColor: '#3498db',
    color: 'white',
    padding: '10px 15px',
    borderRadius: '5px',
    cursor: 'pointer',
    display: 'inline-block',
  };