import React from 'react'
import FeatureInfo from './FeatureInfo'
import AddBrand from './AddBrand';
import AddModel from './AddModel';
export default function AdminHome() {
    return (
        <div className="adminHome">
            <FeatureInfo />
            <div className="adminHomeWidgets">
                <AddBrand />
                <AddModel />
            </div>
        </div>
    )
}
