
import { Label, InputGroup, FormGroup, Row, Col } from "reactstrap";
import { Form, Field, ErrorMessage } from "formik";
import React, { useState } from "react";
import Utileria from "../../util";
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const Formulario = (props) => {
    let { errors, touched } = props;
    const [file, setFile] = useState([]);

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
                        <FormGroup className={Utileria.claseInputForm(errors.descripcion, touched.descripcion)}>
                            <Label htmlFor="nombre">Descripción:</Label>
                            <InputGroup className="input-group-alternative">
                                <Field
                                    className="form-control"
                                    placeholder="Ingrese..."
                                    id="descripcion"
                                    name="descripcion"
                                    type="text"
                                    autoComplete="off"
                                    required
                                />

                            </InputGroup>
                            <ErrorMessage
                                name="descripcion"
                                component={() => <small className="text-danger">{errors.descripcion}</small>}
                            />
                        </FormGroup>
                    </Col>
                    <Col xs="12">
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            
                             <label for="files" class="btn">Escoge una imagen</label>
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
