import React from 'react'
import '../../../../styles/pages/_admin.scss'
import { useState, useEffect } from 'react';
import adminApi from './../../../../api/adminApi';
export default function FeatureInfo() {
    const [listUser, setListUser] = useState([]);
    const [listVehicle, setListVehicle] = useState([]);
    const [listTransaction, setListTransaction] = useState([])
    useEffect(() => {
        // @ts-ignore
        adminApi.getUser().then(res => setListUser(res));
        // @ts-ignore
        adminApi.getVehicle().then(res => setListVehicle(res));
        // @ts-ignore
        adminApi.getTransaction().then(res => setListTransaction(res));
    }, [])
    let banned = 0;
    let actived = 0;
    listUser.forEach(item => {
        if (item.banned === true) {
            banned++;
        }
    });
    listVehicle.forEach(item => {
        if (item.actived === true) {
            actived++;
        }
    });
    console.log(listTransaction)
    return (
        <div className="admin_feature">
            <div className="admin_feature_item">
                <h2 className="admin_feature_icon text-success">Người dùng</h2>
                <h2 className="admin_feature_body text-success">{listUser.length}</h2>
            </div>
            <div className="admin_feature_item">
                <h2 className="admin_feature_icon text-danger">Bị cấm</h2>
                <h2 className="admin_feature_body text-danger">{banned}</h2>
            </div>
            <div className="admin_feature_item">
                <h2 className="admin_feature_icon text-primary">Phương tiện</h2>
                <h2 className="admin_feature_body text-primary">{listVehicle.length}</h2>
            </div>
            <div className="admin_feature_item">
                <h2 className="admin_feature_icon text-warning">Hoạt động</h2>
                <h2 className="admin_feature_body text-warning">{actived}</h2>
            </div>
            <div className="admin_feature_item">
                <h2 className="admin_feature_icon text-info">Giao dịch</h2>
                <h2 className="admin_feature_body text-info">{listTransaction.length}</h2>
            </div>
        </div>
    )
}
