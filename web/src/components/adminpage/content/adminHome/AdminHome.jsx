import React from 'react'
import Chart from './Chart'
import FeatureInfo from './FeatureInfo'
import { DataProfit } from '../../Data'
export default function AdminHome() {
    return (
        <div className="adminHome">
            <FeatureInfo />
            <Chart data={DataProfit} title="Biểu đồ phân tích" dataKey="name" grid="4 4" />
        </div>
    )
}
