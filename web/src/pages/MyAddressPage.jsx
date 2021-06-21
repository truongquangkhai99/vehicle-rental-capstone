import React from 'react'
import { Button } from 'react-bootstrap'
import { AiOutlinePlusCircle } from 'react-icons/ai'
import FormAdd from 'components/myaddress/FormAdd'

export default function MyAddressPage() {
    const [isShow, setIsShow] = React.useState(false)
    return (
        <>
            <div className="address">
                <div className="address__header">
                    <div className="address__header-content container">
                        <h3>Địa chỉ của tôi</h3>
                        <Button onClick={() => setIsShow(true)}>
                            <span id="icon-plus"><AiOutlinePlusCircle/></span>
                            <span className="title">Thêm địa chỉ</span>
                        </Button>
                    </div>
                </div>
                <div className="address__content"></div>
            </div>
            <FormAdd showFormAdd={isShow} handleClose={() => setIsShow(false)} />
        </>
    )
}
