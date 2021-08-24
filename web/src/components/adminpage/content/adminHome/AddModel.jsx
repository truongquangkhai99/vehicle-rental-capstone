import React, { useEffect } from 'react'
import { FormLabel, Row, Col, Form, FormControl, Button } from 'react-bootstrap'
import { useState } from 'react';
import adminApi from './../../../../api/adminApi';


export default function AddModel() {
    const [model, setModel] = useState({
        id: null,
        name: '',
        carProduction: false,
        suggestPrice: 0,
    })
    const [brandid, setBrandid] = useState(1);
    const [listModel, setListModel] = useState([])
    const [listBrand, setListBrand] = useState([]);
    useEffect(() => {
        // @ts-ignore
        adminApi.getBrand().then(res => setListBrand(res))
        // @ts-ignore
        adminApi.getModel().then(res => setListModel(res))
    }, [listBrand])
    const handleSubmit = () => {
        let brand = listBrand.find(item => item.id = brandid);
        model.carProduction = brand.carProduction;
        let data = {
            model: model,
            id: parseInt(brand.id)
        }
        console.log(data);
        adminApi.createModel(data);
        handleClear();
    }
    const handleClear = () => {
        setModel({
            id: null,
            name: '',
            carProduction: false,
            suggestPrice: 0,
        });
        setBrandid(1);
    }
    return (
        <div className="admin_add_model">
            <div className="admin_add_model_header">
                <h3 className="admin_add_model_title">
                    Thêm dòng xe
                </h3>
            </div>
            <div className="admin_add_model_body">
                <Row>
                    <Col sm={4}>
                        <FormLabel>Chọn hãng xe</FormLabel>
                        <Form.Select
                            name="brandid"
                            value={brandid}
                            // @ts-ignore
                            onChange={({ target }) => setBrandid(target.value)}
                        >
                            {
                                listBrand.length > 0 ?
                                    listBrand.map((item) => (
                                        <option key={item.id} value={item.id}>{item.name}</option>
                                    ))
                                    : <option key={0}>Không có hãng xe</option>
                            }
                        </Form.Select>
                    </Col>
                    <Col sm={4}>
                        <FormLabel>Chọn dòng xe</FormLabel>
                        <FormControl name="name" value={model.name} required
                            onChange={({ target }) => setModel(state => ({ ...state, name: target.value }))}
                        />
                        <div className="model_list">
                            <ul>
                                {
                                    listModel.length > 0 ?
                                        listModel.map((item) => (
                                            <li key={item.id} className="model_item">{item.name}</li>
                                        ))
                                        : null
                                }
                            </ul>
                        </div>
                    </Col>
                    <Col sm={2}>
                        <FormLabel>Giá thuê gợi ý</FormLabel>
                        <FormControl name="suggestPrice" value={model.suggestPrice} type="number" required
                            // @ts-ignore
                            onChange={({ target }) => setModel(state => ({ ...state, suggestPrice: parseInt(target.value) }))}
                        />
                    </Col>
                    <Col sm={2}>
                        <Button variant="info" type="button" className="modelBtn"
                            onClick={handleSubmit}
                        >Thêm</Button>
                    </Col>
                </Row>
            </div>
        </div>
    )
}
