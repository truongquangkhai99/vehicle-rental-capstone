import React from 'react'
import { Form, FormControl, Button } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import adminApi from './../../../../api/adminApi';
import { Motorcycle, DirectionsCar } from '@material-ui/icons';
export default function AddBrand() {
    const [brand, setBrand] = useState({
        id: null,
        name: "",
        bikeProduction: true,
        carProduction: false,
    });
    const [brandList, setBrandList] = useState([]);
    useEffect(() => {
        // @ts-ignore
        adminApi.getBrand().then(res => setBrandList(res));
    }, [brandList])
    const handleSubmit = () => {
        adminApi.createBrand(brand);
        handleClear();
    }
    const handleClear = () => {
        setBrand({
            id: null,
            name: "",
            bikeProduction: true,
            carProduction: false,
        })
    }
    return (
        <div className="admin_add_brand">
            <div className="admin_add_brand_header">
                <h3 className="admin_add_brand_title">
                    Thêm hãng xe
                </h3>
            </div>
            <div className="admin_add_brand_body">
                <Form >
                    <Form.Label>Hãng xe</Form.Label>
                    <Row>
                        <Col sm={9}>
                            <FormControl name="name" value={brand.name} onChange={({ target }) => setBrand(state => ({ ...state, name: target.value }))} />
                        </Col>
                        <Col sm={3}>
                            <Button variant="info" type="button" className="brandBtn"
                                onClick={handleSubmit}
                            >Thêm</Button>
                        </Col>
                    </Row>
                    <Row className="mt-1">
                        <Col >
                            <Form.Check name="bikeProduction" label="Xe Moto"
                                type="checkbox"
                                checked={brand.bikeProduction}
                                onChange={({ target }) => setBrand(state => ({ ...state, bikeProduction: target.checked }))} />
                        </Col>
                        <Col>
                            <Form.Check name="carProduction" label="Xe Oto"
                                type="checkbox"
                                checked={brand.carProduction}
                                onChange={({ target }) => setBrand(state => ({ ...state, carProduction: target.checked }))} />
                        </Col>
                    </Row>
                </Form>
                <div className="add_brand_list">
                    <ul >
                        {
                            brandList.length > 0 ?
                                brandList.map((item) => (
                                    <li className="add_brand_item" key={item.id}>
                                        {item.name}
                                        {/* {item.bikeProduction ? <Motorcycle className="ms-2 me-2 text-success" /> : null}
                                        {item.carProduction ? <DirectionsCar className=" ms-2 text-success" /> : null} */}
                                    </li>
                                ))
                                : null
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}
