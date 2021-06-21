import React from 'react'
import { Tabs, Tab, Row } from 'react-bootstrap'
import '../../styles/components/myfavorite/_myFavorite.scss'
import ItemMyFavorite from './ItemMyFavorite'

export default function MyFavoritePage() {
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
