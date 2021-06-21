import React from 'react'
import { Tabs, Tab, Row } from 'react-bootstrap'
import ItemMyFavorite from 'components/myfavorite/ItemMyFavorite'

export default function MyFavsPage() {
    return (
        <>
            <div className="myfavs">
                <Tabs defaultActiveKey="self-driving" transition={false}>
                    <Tab eventKey="self-driving" title="Xe tự lái yêu thích">
                        <Row className="items">
                            <ItemMyFavorite />
                            <ItemMyFavorite />
                            <ItemMyFavorite />
                        </Row>
                    </Tab>
                    <Tab eventKey="have-driver" title="Xe có tài xế yêu thích">
                        <Row className="items">
                            <ItemMyFavorite />
                            <ItemMyFavorite />
                        </Row>
                    </Tab>
                    <Tab eventKey="motor" title="Xe máy yêu thích">
                        <Row className="items">
                            <ItemMyFavorite />
                        </Row>
                    </Tab>
                </Tabs>
            </div>
        </>
    )
}
